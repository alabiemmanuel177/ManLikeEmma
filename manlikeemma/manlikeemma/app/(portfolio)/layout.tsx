import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Link from "next/link";

import { FaGithub } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Sidebar from "../component/Sidebar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ManLikeEmma",
  description: "Alabi Emmanuel is a software engineer who builds exceptional, accessible, inclusive products and digital experiences for the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}  leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          {/* <div className="thin-white-border absolute bottom-0 top-0 right-0 left-0 m-8"> */}
          <div className="lg:flex lg:justify-between lg:gap-4 ">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <Link href={"/"}>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    ManLikeEmma
                  </h1>
                </Link>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Software Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                  I build exceptional and accessible digital experiences.
                </p>

                <Sidebar />
              </div>
              <ul className="flex items-center mb-24" aria-label="Social media">
                <li className="mr-5 text-2xl">
                  <Link
                    href={"https://github.com/alabiemmanuel177"}
                    target="_blank"
                    className="block hover:text-slate-200"
                  >
                    <span className="sr-only">GitHub</span> <FaGithub />
                  </Link>
                </li>
                <li className="mr-5 text-2xl">
                  <Link
                    href={"https://www.instagram.com/_manlike.emma/"}
                    target="_blank"
                    className="block hover:text-slate-200"
                  >
                    <GrInstagram />
                  </Link>
                </li>
                <li className="mr-5 text-2xl">
                  <Link
                    href={""}
                    target="_blank"
                    className="block hover:text-slate-200"
                  >
                    <FaXTwitter />
                  </Link>
                </li>
                <li className="mr-5 text-2xl">
                  <Link
                    href={"https://www.linkedin.com/in/emmanuel-alabi-5474501a9"}
                    target="_blank"
                    className="block hover:text-slate-200"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </header>
            <main id="content" className=" pt-24 lg:w-1/2 lg:py-24">
              {children}
            </main>
          </div>
          {/* </div> */}
        </div>
      </body>
    </html>
  );
}
