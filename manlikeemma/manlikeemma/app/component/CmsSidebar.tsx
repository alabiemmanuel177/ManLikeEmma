"use client";

import Link from "next/link";
import { useState } from "react";
import { sidebarItems } from "@/store";

export default function CmsSidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapse] = useState<boolean>(false);
  const toggleSidebarCollapseHandler = () => {
    setIsSidebarCollapse((prev) => !prev);
  };

  return (
    <div className="relative h-full">
      <aside className="w-64 h-full">
        <div className="h-16 border-solid border-b border-b-teal-custom flex items-center justify-center">
          <h1 className="text-2xl">ManLikeEmma</h1>
        </div>
        <ul className="list-none mt-8">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li key={name} className="ml-6">
              <Link
                href={href}
                className="text-base no-underline flex flex-row items-center mb-8 rounded w-32"
              >
                <span className="text-lg">
                  <Icon />
                </span>
                <span className="ml-2">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
