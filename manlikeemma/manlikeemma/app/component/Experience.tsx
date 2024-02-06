"use client";

import Link from "next/link";
import React from "react";

const Experience = () => {
  const openPdf = () => {
    window.open("/resume.pdf", "_blank");
  };
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                Nov 2023 - present
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <Link
                      href={"https://spaybusiness.com/"}
                      target="_blak"
                      rel="noreferrer"
                      aria-label="Software Engineer at Spay Business"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-custom focus-visible:text-teal-custom  group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2 5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Software Engineer .{" "}
                        <span className="inline-block">
                          Spay Business
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <div className="text-slate-500" aria-hidden="true">
                      Engineer
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Software Engineer (Spay Business, Jan 2024 - Present): <br />
                  Developed the landing page for the Swop mobile fintech app
                  using NextJS and Tailwind. Implemented a push notification
                  project for merchants using an in-house service, improving
                  communication and engagement. Collaborated with
                  cross-functional teams on various projects, ensuring timely
                  delivery and high-quality code. <br />
                  <br />
                  UI/UX Designer (Spay Business, Jan 2024 - Present): <br />
                  Redesigned the company website UI, enhancing user engagement.
                  Improved the user interface for key Spay Business products
                  (checkout, payment link, invoices, direct debit) through user
                  research and iterative design processes.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      RabbitMQ
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Java
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Springboot
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      TypeScript
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                Aug - Oct 2023
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <Link
                      href={"https://www.unionbankng.com/"}
                      target="_blak"
                      rel="noreferrer"
                      aria-label="Software Engineer Intern at Union Bank NG"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-custom focus-visible:text-teal-custom  group/link text-base"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2 5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Software Engineer Intern .{" "}
                        <span className="inline-block">
                          Union Bank NG
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <div className="text-slate-500" aria-hidden="true">
                      Engineer
                    </div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Developed a vulnerability report system for InfoSec,
                  enhancing information security practices by tracking and
                  managing security exceptions. <br />• Implemented a push
                  notification project for merchants using an in-house service,
                  improving communication and engagement. <br />• Collaborated
                  effectively with cross-functional teams to ensure project
                  success
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      CSS
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      JavaScript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      TypeScript
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label="July to December 2017"
              >
                Feb — Aug 2022
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-custom focus-visible:text-teal-custom  group/link text-base"
                      href="https://atb.tech/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Full-stack Developer at ATB Tech "
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Full-stack Developer ·{" "}
                        <span className="inline-block">
                          ATB Tech
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Built and maintained web applications using React JS and
                  Node Express, strengthening front-end and back-end development
                  skills.
                  <br /> • Gained hands-on experience in the fintech industry,
                  developing a deep understanding of its challenges and
                  requirements. <br />• Honed communication, teamwork, and
                  problem-solving skills through collaborative projects.
                </p>
                {/* <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                  <li className="mr-4">
                    <a
                      className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-custom focus-visible:text-teal-custom"
                      href="https://developer.apple.com/documentation/musickitjs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-1 h-3 w-3"
                        aria-hidden="true"
                      >
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                      </svg>
                      <span>MusicKit.js</span>
                    </a>
                  </li>
                  <li className="mr-4">
                    <a
                      className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-custom focus-visible:text-teal-custom"
                      href="https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-1 h-3 w-3"
                        aria-hidden="true"
                      >
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                      </svg>
                      <span>9to5Mac</span>
                    </a>
                  </li>
                  <li className="mr-4">
                    <a
                      className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-custom focus-visible:text-teal-custom"
                      href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mr-1 h-3 w-3"
                        aria-hidden="true"
                      >
                        <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                        <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                      </svg>
                      <span>The Verge</span>
                    </a>
                  </li>
                </ul> */}
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Node.js
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      CSS
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      HTML
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      JavaScript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      React
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label="Jan - June 2021"
              >
                Jan - June 2021
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-custom focus-visible:text-teal-custom  group/link text-base"
                      href="https://botosoft.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Software Engineer Intern at Botosoft Technologies"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Software Engineer Intern ·{" "}
                        <span className="inline-block">
                          Botosoft Technologies
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Contributed to diverse projects, showcasing proficiency in
                  Python scripting, developed a data extraction tool that
                  reduced processing time by 20%, UI/UX design, and frontend
                  development. <br />• Developed Python scripts using image
                  comparison and name matching algorithms that improved W ASSCE
                  student registration accuracy by 92% and efficiency by 98%,
                  saving hundreds hours of manual processing time
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Python
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Face++
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      JavaScript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-blue px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Figma
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label="May 2018 - Feb 2021"
              >
                May 2018 - Feb 2021
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-custom focus-visible:text-teal-custom  group/link text-base"
                      href="https://www.linkedin.com/search/results/all/?keywords=Royal%20Gate%20Group%20&sid=)0E"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Systems Administrator at RoyalGate Groups "
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        Systems Administrator ·{" "}
                        <span className="inline-block">
                          RoyalGate Groups
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  • Oversaw computer systems, Wi-Fi networks, and CCTV systems.
                  <br />• Troubleshoot and resolved a network connectivity issue
                  that impacted 50+ users, restoring productivity within few
                  minutes.
                  <br />• Managed the installation and upgrade of 20+ computers,
                  reducing downtime by 90%. <br />• Negotiated discounts on
                  equipment purchases, saving the company money
                </p>
              </div>
            </div>
          </li>
        </ol>
        <div className="mt-12">
          <div
            className="inline-flex items-center leading-tight text-slate-200 font-semibold group cursor-pointer"
            aria-label="View Full Résumé"
            // href="../../public/doc/resume.pdf"
            onClick={openPdf}
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-custom motion-reduce:transition-none">
                View Full{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-custom motion-reduce:transition-none">
                  Résumé
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
