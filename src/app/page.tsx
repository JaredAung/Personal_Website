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

const PILLARS = [
  {
    title: "Engineering",
    body: "Reliable systems, APIs, and data pipelines—clarity, observability, and maintainability first.",
    icon: CodeIcon,
  },
  {
    title: "Applied AI",
    body: "Production-minded ML: evaluation, iteration, and tight loops with the people who use the output.",
    icon: LayersIcon,
  },
  {
    title: "Data science",
    body: "Rigorous analysis and experimentation—turning complex data into decisions teams can act on.",
    icon: ChartIcon,
  },
] as const;

function CodeIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden
    >
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function LayersIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function ChartIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden
    >
      <path d="M3 3v18h18" />
      <path d="M7 16V9M12 16v-5M17 16V6" />
    </svg>
  );
}

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
        <div className="mt-6 md:mt-7">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Computer Science student at San Francisco State University with
            experience designing and delivering scalable, high-performing, and
            user-friendly web applications from concept to production.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Experienced in Python, Java, React, FastAPI, AWS, and AI/ML, with
            strong expertise in integrating ML models and AI systems into
            production full-stack environments.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Adept at creating responsive and accessible user interfaces,
            optimizing backend performance, and collaborating across teams to
            deliver reliable user-facing applications.
          </p>
        </div>

        <div
          className="mt-14 border-t-2 border-slate-400 dark:border-slate-500 sm:mt-16"
          aria-hidden
        />

        <section
          aria-labelledby="focus-heading"
          className={`${contentSectionStack} scroll-mt-6`}
        >
          <div className={contentSectionSurface}>
            <h2 id="focus-heading" className={contentSectionTitle}>
              Focus
            </h2>
            <ul
              className={`${contentSectionBody} grid gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6`}
            >
              {PILLARS.map(({ title, body, icon: Icon }) => (
                <li key={title} className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-slate-400 sm:h-6 sm:w-6 dark:text-slate-500" />
                  <div className="min-w-0">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                      {title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

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
