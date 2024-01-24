import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ManLikeEmma",
  description:
    "Alabi Emmanuel is a software engineer who builds exceptional, accessible, inclusive products and digital experiences for the web.",
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
        {children}
      </body>
    </html>
  );
}
