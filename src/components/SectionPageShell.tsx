import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

export function SectionPageShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-blue-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-10 pt-8 sm:px-6 md:pt-10 md:pb-12">
        <Link
          href="/"
          className="text-base text-slate-500 transition hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-300"
        >
          ← Home
        </Link>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        <SiteNav className="mt-5" />
        <div className="mt-6">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
