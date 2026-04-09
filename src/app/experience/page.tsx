import type { Metadata } from "next";
import {
  AgentFieldOpenSourcePanel,
  ProfessionalExperiencePanel,
} from "@/components/portfolio/Panels";
import { SectionPageShell } from "@/components/SectionPageShell";
import { contentSectionStack } from "@/lib/contentSection";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <SectionPageShell title="Experience">
      <ProfessionalExperiencePanel showHeading={false} />
      <div className={contentSectionStack}>
        <AgentFieldOpenSourcePanel />
      </div>
    </SectionPageShell>
  );
}
