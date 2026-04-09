import type { Metadata } from "next";
import { SectionPageShell } from "@/components/SectionPageShell";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <SectionPageShell title="About">
      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
        Content coming soon.
      </p>
    </SectionPageShell>
  );
}
