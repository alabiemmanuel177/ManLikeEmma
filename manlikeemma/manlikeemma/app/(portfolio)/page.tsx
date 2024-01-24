import About from "@/app/component/About";
import Experience from "../component/Experience";
import Projects from "../component/Projects";
import Writing from "../component/Writing";

export default function Home() {
  return (
    <>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About me"
      >
        <About />
      </section>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <Experience />
      </section>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Selected projects"
      >
        <Projects />
      </section>
      <section
        id="writing"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Blog posts"
      >
        <Writing />
      </section>
      <footer
        className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0"
        aria-label="About me"
      >
        <p>
          Loosely designed in{" "}
          <a
            href="https://www.figma.com/"
            className="font-medium text-slate-400 hover:text-teal-custom focus-visible:text-teal-custom"
            target="_blank"
            rel="noreferrer"
          >
            Figma
          </a>{" "}
          and coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            className="font-medium text-slate-400 hover:text-teal-custom focus-visible:text-teal-custom"
            target="_blank"
            rel="noreferrer"
          >
            Visual Studio Code
          </a>{" "}
          by yours truly. Built with{" "}
          <a
            href="https://nextjs.org/"
            className="font-medium text-slate-400 hover:text-teal-custom focus-visible:text-teal-custom"
            target="_blank"
            rel="noreferrer"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-medium text-slate-400 hover:text-teal-custom focus-visible:text-teal-custom"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://vercel.com/"
            className="font-medium text-slate-400 hover:text-teal-custom focus-visible:text-teal-custom"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </a>
          . All text is set in the{" "}
          <a
            href="https://rsms.me/montserrat/"
            className="font-medium text-slate-400 hover:text-teal-custom focus-visible:text-teal-custom"
            target="_blank"
            rel="noreferrer"
          >
            Montserrat
          </a>{" "}
          typeface.
        </p>
      </footer>
    </>
  );
}
