"use client";

import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

interface SectionInfo {
  id: string;
  label: string;
}

const sections: SectionInfo[] = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
];

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>("about");

  const handleScroll = () => {
    const sectionOffsets: { [key: string]: number } = {};

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      sectionOffsets[section.id] = element ? element.offsetTop : 0;
    });
  };

  const getLinkStyles = (sectionId: string) => {
    const isActive = activeItem === sectionId;
    const baseStyles =
      "nav-indicator mr-4 h-px transition-all motion-reduce:transition-none";
    const activeStyles = `w-16 bg-slate-200`;
    const defaultStyles = `w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200`;

    return `${baseStyles} ${isActive ? activeStyles : defaultStyles}`;
  };

  const generateScrollLink = (section: SectionInfo) => (
    <li key={section.id}>
      <ScrollLink
        to={section.id}
        spy={true}
        smooth={true}
        offset={-70}
        duration={200}
        activeClass="active"
        onSetActive={() => setActiveItem(section.id)}
        className="group flex items-center py-3 cursor-pointer"
      >
        <span className={getLinkStyles(section.id)}></span>{" "}
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-200 group-hover:text-slate-500 group-focus-visible:text-slate-200">
          {section.label}
        </span>
      </ScrollLink>
    </li>
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">{sections.map(generateScrollLink)}</ul>
    </nav>
  );
};

export default Sidebar;
