import type { ReactNode } from "react";
import { HomeBackgroundSection } from "@/components/HomeBackgroundSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import {
  contentSectionBody,
  contentSectionStack,
  contentSectionSurface,
  contentSectionTitle,
} from "@/lib/contentSection";

const LINKS = {
  resume: "/Aung_Ye_Marn_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/ye-marn-aung",
  github: "https://github.com/JaredAung",
  email: "mailto:jaredaungfr@gmail.com",
} as const;

function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="text-base text-slate-600 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 hover:decoration-slate-400 dark:text-slate-400 dark:decoration-slate-600 dark:hover:text-slate-200 dark:hover:decoration-slate-500"
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-blue-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-10 pt-8 sm:px-6 md:pt-10 md:pb-12">
        <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl md:leading-[1.05] lg:text-8xl xl:text-9xl">
          <span className="hero-title-underline">Ye Marn Aung</span>
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-1 gap-y-2 text-base text-slate-500 md:mt-6 dark:text-slate-500">
          <TextLink href={LINKS.resume}>Download Resume</TextLink>
          <span className="px-2 text-slate-300 dark:text-slate-600" aria-hidden>
            ·
          </span>
          <TextLink href={LINKS.github}>GitHub</TextLink>
          <span className="px-2 text-slate-300 dark:text-slate-600" aria-hidden>
            ·
          </span>
          <TextLink href={LINKS.linkedin}>LinkedIn</TextLink>
          <span className="px-2 text-slate-300 dark:text-slate-600" aria-hidden>
            ·
          </span>
          <TextLink href={LINKS.email}>Email</TextLink>
        </div>
        <SiteNav className="mt-5 md:mt-6" />
        <section aria-label="About" className="mt-8 scroll-mt-6 md:mt-10">
          <div className={contentSectionSurface}>
            <p className="text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl dark:text-slate-100">
              Hello, welcome to my little corner of the internet!
            </p>
            <div className="mt-6 space-y-4 border-t border-slate-200 pt-6 text-base leading-relaxed text-slate-600 sm:mt-7 sm:pt-7 dark:border-slate-700 dark:text-slate-400">
              <p>
                My name is Ye Marn Aung, but I go by Jared. I&apos;m a senior at
                San Francisco State University, studying Computer Science and
                Mathematics. I&apos;m currently a Teaching Assistant for a
                Software Engineering course and previously worked as a
                Full-Stack Engineering Intern at Develop for Good, where I
                helped build a mobile application for Fresh Lifelines for Youth,
                a nonprofit supporting young people impacted by the justice
                system.
              </p>
              <p>
                I&apos;m passionate about using technology and AI to solve
                real-world problems, particularly those that can make a positive
                difference in people&apos;s lives.
              </p>
              <p>
                In my free time, I love reading fiction, playing and watching
                soccer, chess, and movies. My favorite book is this sweet little
                book called Last Summer of Us by Maggie Harcourt.
              </p>
            </div>
          </div>
        </section>

        <div
          className="mt-14 border-t-2 border-slate-400 dark:border-slate-500 sm:mt-16"
          aria-hidden
        />

        <HomeBackgroundSection />

        <section
          aria-labelledby="contact-heading"
          className={`${contentSectionStack} scroll-mt-6`}
        >
          <div className={contentSectionSurface}>
            <h2 id="contact-heading" className={contentSectionTitle}>
              Contact
            </h2>
            <div className={contentSectionBody}>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  Ye Marn Aung.
                </span>{" "}
                Open to software, applied AI, and data science roles. For
                opportunities or a brief introduction, reach out by email,
                GitHub, or LinkedIn.
              </p>
              <p className="mt-4 text-base">
                <TextLink href={LINKS.email}>Email</TextLink>
                <span className="text-slate-400 dark:text-slate-600"> · </span>
                <TextLink href={LINKS.github}>GitHub</TextLink>
                <span className="text-slate-400 dark:text-slate-600"> · </span>
                <TextLink href={LINKS.linkedin}>LinkedIn</TextLink>
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
