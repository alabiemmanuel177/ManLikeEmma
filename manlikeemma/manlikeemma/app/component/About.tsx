"use client";

import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4">
          From the early fascination of watching my cousin design logos in Corel
          Draw to experimenting with{" "}
          <Link
            href="https://www.lego.com/en-us/product/lego-mindstorms-ev3-31313"
            className="font-medium text-slate-200 hover:text-teal-custom focus-visible:text-teal-custom"
          >
            Lego Ev3 Windstorm robots{" "}
          </Link>
          in a high school robotics club, my journey into software engineering
          has been a dynamic adventure.
        </p>
        <p className="mb-4">
          In{" "}
          <Link
            href="https://babcock.edu.ng/"
            className="font-medium text-slate-200 hover:text-teal-custom focus-visible:text-teal-custom"
          >
            university
          </Link>
          , I not only honed my skills but contributed to an LMS, integrating
          video conferencing and websockets. This journey paved the way for{" "}
          <Link
            href=""
            className="font-medium text-slate-200 hover:text-teal-custom focus-visible:text-teal-custom lg:cursor-[url('/Logo.png'),_pointer]"
          >
            Acadu,{" "}
          </Link>
          my startup aimed at transforming the educational landscape.
        </p>
        <p>
          Driven by a passion to enhance the complete university experience,
          <span className="group/korok inline-flex lg:cursor-[url('/Logo.png'),_pointer] lg:font-medium lg:text-slate-200">
            <span className="sr-only">Acadu</span>
            <span
              className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
              aria-hidden="true"
            >
              A
            </span>
            <span
              className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
              aria-hidden="true"
            >
              c
            </span>
            <span
              className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
              aria-hidden="true"
            >
              a
            </span>
            <span
              className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
              aria-hidden="true"
            >
              d
            </span>
            <span
              className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
              aria-hidden="true"
            >
              u
            </span>
          </span>{" "}
          aspires to leave its mark, starting with private universities in
          Africa. Join me in this exciting venture of reshaping education for
          the coming generation.
        </p>
      </div>
    </>
  );
};

export default About;
