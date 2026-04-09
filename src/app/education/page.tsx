import type { Metadata } from "next";
import {
  EducationCertificatesPanel,
  EducationPanel,
} from "@/components/portfolio/Panels";
import { SectionPageShell } from "@/components/SectionPageShell";
import { contentSectionStack } from "@/lib/contentSection";

export const metadata: Metadata = {
  title: "Education",
};

export default function EducationPage() {
  return (
    <SectionPageShell title="Education">
      <EducationPanel showHeading={false} includeCodePath />
      <div className={contentSectionStack}>
        <EducationCertificatesPanel />
      </div>
    </SectionPageShell>
  );
}
