import type { Metadata } from "next";
import { ProjectsPanel } from "@/components/portfolio/Panels";
import { SectionPageShell } from "@/components/SectionPageShell";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <SectionPageShell title="Projects">
      <ProjectsPanel showHeading={false} />
    </SectionPageShell>
  );
}
