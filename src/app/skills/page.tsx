import type { Metadata } from "next";
import { SkillsPanel } from "@/components/portfolio/Panels";
import { SectionPageShell } from "@/components/SectionPageShell";

export const metadata: Metadata = {
  title: "Skills",
};

export default function SkillsPage() {
  return (
    <SectionPageShell title="Skills">
      <SkillsPanel showHeading={false} />
    </SectionPageShell>
  );
}
