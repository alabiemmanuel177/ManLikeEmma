import Link from "next/link";

export default function Archive() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <Link
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
      >
        Skip to Content
      </Link>
      <div className="lg:py-24">
        <Link
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-custom"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          ManLikeEmma
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <table id="content" className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10  px-6 py-5 backdrop-blur">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                Year
              </th>
              <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                Project
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Made at
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-300/10 last:border-none">
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px">2022</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>
                  <div className="block sm:hidden">
                    <span>Harvard Business School Design System</span>
                  </div>
                  <div className="hidden sm:block">
                    Harvard Business School Design System
                  </div>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <div className="translate-y-px whitespace-nowrap">
                  Upstatement
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Storybook
                    </div>
                  </li>
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      React
                    </div>
                  </li>
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      TypeScript
                    </div>
                  </li>
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell"></td>
            </tr>
            <tr className="border-b border-slate-300/10 last:border-none">
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px">2021</div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>
                  <div className="block sm:hidden">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-custom focus-visible:text-teal-custom hover:text-slate-200 focus-visible:text-teal-custom sm:hidden group/link text-base"
                      href="https://www.koala.health/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Koala Health"
                    >
                      <span>
                        Koala
                        <span className="inline-block">
                          Health
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
                  <div className="hidden sm:block">Koala Health</div>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <div className="translate-y-px whitespace-nowrap">
                  Upstatement
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Next.js
                    </div>
                  </li>
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      TypeScript
                    </div>
                  </li>
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Redux Toolkit
                    </div>
                  </li>
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Stripe
                    </div>
                  </li>
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Algolia
                    </div>
                  </li>
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Firebase Auth
                    </div>
                  </li>
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Formik
                    </div>
                  </li>
                  <li className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-custom ">
                      Vercel
                    </div>
                  </li>
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                <ul className="translate-y-1">
                  <li className="mb-1 flex items-center">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-custom focus-visible:text-teal-custom text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-custom group/link text-sm"
                      href="https://www.koala.health/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="koala.health"
                    >
                      <span>
                        {" "}
                        <span className="inline-block">
                          koala.health
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
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
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
