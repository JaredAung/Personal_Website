"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
] as const;

export function SiteNav({ className = "" }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Portfolio sections"
      className={`rounded-xl border border-slate-200/95 bg-white/90 p-1.5 shadow-sm shadow-slate-900/[0.04] ring-1 ring-slate-900/[0.03] backdrop-blur-sm dark:border-slate-700/90 dark:bg-slate-900/55 dark:shadow-black/20 dark:ring-white/[0.04] sm:p-2 ${className}`}
    >
      <ul className="grid w-full grid-cols-2 gap-1.5 sm:grid-cols-4 md:gap-2">
        {NAV_ITEMS.map(({ href, label }) => {
          const isActive =
            pathname === href || pathname.startsWith(`${href}/`);

          return (
            <li key={href} className="min-w-0">
              <Link
                href={href}
                className={
                  isActive
                    ? "flex min-h-[2.5rem] w-full items-center justify-center rounded-md bg-slate-900 px-2 py-2 text-center text-base font-semibold text-white shadow-sm dark:bg-slate-100 dark:text-slate-900"
                    : "flex min-h-[2.5rem] w-full items-center justify-center rounded-md px-2 py-2 text-center text-base font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/90 dark:hover:text-slate-100"
                }
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
