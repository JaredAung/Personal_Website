import type { ReactNode } from "react";
import Link from "next/link";
import {
  contentSectionBody,
  contentSectionStack,
  contentNestedStack,
  contentSectionSurface,
  contentSectionTitle,
  contentSubsection,
} from "@/lib/contentSection";

const projectMeta =
  "mt-2 space-y-1 text-base leading-relaxed text-slate-600 dark:text-slate-400";

const projectMetaLabel =
  "font-medium text-slate-700 dark:text-slate-300";

const skillsKeyLabel =
  "font-semibold text-slate-800 dark:text-slate-200";

const externalTextLinkClass =
  "font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 hover:decoration-slate-400 dark:text-slate-300 dark:decoration-slate-600 dark:hover:text-slate-100 dark:hover:decoration-slate-500";

const AGENTFIELD_ISSUE_URL =
  "https://github.com/Agent-Field/agentfield/issues/104#issuecomment-4061115521";

const LIBREDB_REDIS_ISSUE_URL =
  "https://github.com/libredb/libredb-studio/issues/1453";
const LIBREDB_REDIS_PR_URL =
  "https://github.com/libredb/libredb-studio/pull/1608";
const LIBREDB_DISTRIBUTION_ISSUE_URL =
  "https://github.com/libredb/libredb-studio/issues/1120";
const LIBREDB_DISTRIBUTION_PR_URL =
  "https://github.com/libredb/libredb-studio/pull/1226";

const CERT_DEEPL_AGENTIC_AI =
  "https://learn.deeplearning.ai/certificates/37761fb7-d8a6-4fed-b091-7bc8461f0dbe?usp=sharing";

const CERT_MONGODB_AGENTS_CREDLY =
  "https://www.credly.com/badges/cc075d23-1a4a-4ca2-a32d-836011c94fdb/linked_in_profile";

const CERT_TRYHACKME_PRE_SECURITY_PDF =
  "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-6EODXMHU1V.pdf";

const projectRepoLinkClass =
  "inline-flex shrink-0 items-center gap-1.5 rounded-lg border-2 border-slate-400 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-900 no-underline shadow-sm transition hover:border-slate-600 hover:bg-white hover:shadow-md active:scale-[0.98] dark:border-slate-500 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-400 dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const PROJECT_REPO_LINKS = {
  recipeKitchen: "https://github.com/JaredAung/recipe-kitchen",
  howToKeepPlantsAlive: "https://github.com/JaredAung/HowToNotKillYourPlants",
  chicoChatbot: "https://github.com/JaredAung/CSUChico-WildcatAIConcierge",
  gaitorGate: "https://github.com/JaredAung/GaitorGate",
  board2Board: "https://github.com/JaredAung/Board2Board",
} as const;

const RECIPE_KITCHEN_SITE_URL = "https://recipe-kitchen-three.vercel.app";

const CHICO_PRESENTATION_URL =
  "https://docs.google.com/presentation/d/1-xGFHWhQPWJChK28VDnuPmtdYMDk_HnO/edit?slide=id.p1#slide=id.p1";

function parseInlineBold(text: string): ReactNode {
  if (!/<b>[\s\S]*?<\/b>/i.test(text)) {
    return text;
  }
  const out: ReactNode[] = [];
  const re = /<b>([\s\S]*?)<\/b>/gi;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      out.push(text.slice(last, match.index));
    }
    out.push(
      <strong
        key={`inline-bold-${key++}`}
        className="font-semibold text-slate-800 dark:text-slate-200"
      >
        {match[1]}
      </strong>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    out.push(text.slice(last));
  }
  return out.length === 0 ? text : out;
}

const SWE_TA_BULLETS = [
  "Mentor <b>48 undergraduate students</b> across <b>8 teams</b> in planning, developing, and deploying their full-stack senior capstone projects.",
  "Lead <b>5 hands-on technical workshops</b> on collaboration on <b>GitHub, CI/CD, AWS, Vercel, and LangChain/LangGraph</b>, helping teams adopt industry-standard technologies and development practices.",
  "Serve as a technical liaison between <b>Niantic Spatial</b> representatives, faculty, and student teams, translating sponsor technologies and requirements into hands-on workshops and project guidance, helping <b>all 8 teams</b> integrate Niantic Spatial technologies into their projects.",
] as const;

const DEVELOP_FOR_GOOD_BULLETS = [
  "Collaborated cross-functionally with designers, software engineers, and clients in an <b>Agile environment</b> to transform <b>30+ Figma designs</b> into reusable React Native components and production-ready screens.",
  "Engineered backend for authentication, goal management, and weekly streak services with <b>Firebase</b> for a React Native platform that can support <b>300+ end users</b> (consumers and staff) following UserTesting validation.",
  "Implemented <b>role-based authorization</b> using Firebase Authentication, Firestore Security Rules, Zod validation, and AsyncStorage, preventing unauthorized access while avoiding the need for higher-tier Firebase features.",
  "Documented developer-friendly <b>WCAG accessibility guidelines</b> and audited code to follow the guidelines, creating an accessible platform that can be used by screen readers on both Android and iOS.",
] as const;

const RECIPE_KITCHEN_BULLETS = [
  "Built a multimodal recipe extraction pipeline that turns short-form cooking reels into structured ingredient lists and steps by fusing <b>speech (including Burmese)</b>, <b>on-screen captions</b>, and <b>visual frame understanding</b>.",
  "Orchestrated ingestion and generation with <b>LangGraph</b>, <b>Google Gemini</b>, and <b>Silero VAD</b>, tagging each ingredient and step with its source (audio, caption, or visual) for transparent recipe cards.",
  "Shipped a full-stack product with a <b>FastAPI</b> backend, <b>Supabase</b> auth/storage, and a TypeScript frontend, deployed to <b>Vercel</b>.",
  "Designed an async <b>jobs + worker</b> system where the API enqueues job IDs on <b>Amazon SQS</b> and ECS workers claim, run, and complete ingest/recipe/audio/visual pipelines without blocking requests.",
  "Automated CI/CD with <b>GitHub Actions</b>: Docker images are built and pushed to <b>Amazon ECR</b>, then the API and worker services are deployed to <b>Amazon ECS</b> on successful main-branch builds.",
] as const;

const PLANT_PROJECT_BULLETS = [
  "Engineered a <b>two-tower recommendation system</b> that recommends plants based on users’ environment and preferences, improving <b>Recall@10 by 6.6×</b> over a semantic similarity baseline.",
  "Designed a <b>rule-based simulation framework</b> to generate synthetic plant–user interaction data and benchmark the recommendation model’s ability to learn behavioral patterns, successfully capturing <b>8 of 10 predefined rules</b>.",
  "Developed <b>LangGraph AI agents</b> capable of plant Q&A and comparisons, using a <b>hybrid RAG pipeline</b> of Pinecone vector search and BM25 retrieval over curated botany datasets.",
] as const;

const CHICO_CHATBOT_BULLETS = [
  "Selected as <b>1 of 100 participants from 1,000+ CSU applicants</b> for the DxHub AI Summer Camp and assigned to a team developing an AI chatbot for Chico State University stakeholders.",
  "Engineered a production <b>Retrieval-Augmented Generation (RAG)</b> system within the AWS ecosystem by building a knowledge base from <b>230+ university and local business webpages</b>, enabling transparent responses with inline citations and source references.",
  "Developed a serverless backend using <b>AWS Lambda</b> and <b>API Gateway</b> to orchestrate user requests and perform LLM inference with <b>Amazon Bedrock Claude Sonnet</b>, supporting English/Spanish queries for <b>500+ daily users</b>.",
] as const;

const GAITORGATE_BULLETS = [
  "Led a team of <b>6</b> over a 4-month period to develop and deploy a production-grade search platform for <b>200+ AI tools</b>, <b>winning 1st place out of 12 teams</b> in a software engineering competition.",
  "Architected a <b>14-table relational MySQL database</b> and search pipeline supporting ~190 AI tools and <b>500+ keywords</b>, implementing FULLTEXT and foreign-key indexes for efficient search and data retrieval.",
  "Developed <b>Flask API endpoints</b> for authentication, query execution, and user-uploaded tool ingestion, validating system reliability through <b>20+ student testers</b>.",
] as const;

const BOARD2BOARD_BULLETS = [
  "Designed a <b>computer vision pipeline</b> with OpenCV to <b>detect, warp, and segment real-life chessboard images into 64 cropped squares for piece classification</b>.",
  "<b>Fine-tuned a ResNet50 model</b> on a custom dataset of <b>2,000+ images</b>, achieving <b>94% classification accuracy across all classes</b>.",
  "Developed an <b>adaptive thresholding system</b> using linear regression to handle variable lighting and image conditions, improving successful board detection rate by <b>4× across 150 diverse real-world unseen board images</b>.",
] as const;

function ProjectTitleWithRepo({
  title,
  description,
  repoHref,
  presentationHref,
  siteHref,
}: {
  title: string;
  description: string;
  repoHref: string;
  presentationHref?: string;
  siteHref?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
      <h3 className="min-w-0 flex-1 text-lg text-slate-900 dark:text-slate-100">
        <span className="font-normal">{title}:</span>{" "}
        <span className="font-semibold">{description}</span>
      </h3>
      <div className="flex shrink-0 flex-wrap items-center gap-2">
        {siteHref ? (
          <a
            href={siteHref}
            className={projectRepoLinkClass}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`${title}: view live site (opens in new tab)`}
          >
            Live site
          </a>
        ) : null}
        {presentationHref ? (
          <a
            href={presentationHref}
            className={projectRepoLinkClass}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`${title}: view presentation (opens in new tab)`}
          >
            Presentation
          </a>
        ) : null}
        {repoHref ? (
          <a
            href={repoHref}
            className={projectRepoLinkClass}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={`${title}: view repository on GitHub (opens in new tab)`}
          >
            <GitHubIcon className="h-4 w-4 opacity-90" />
            GitHub
          </a>
        ) : (
          <span
            className="shrink-0 text-base text-slate-400 dark:text-slate-500"
            title="Add URL in PROJECT_REPO_LINKS"
          >
            GitHub
          </span>
        )}
      </div>
    </div>
  );
}

const sectionMoreLinkClass =
  "group inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-800 no-underline shadow-sm transition hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:focus-visible:ring-offset-slate-900";

function SectionMoreLink({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-6 flex w-full justify-end">
      <Link href={href} className={sectionMoreLinkClass}>
        {label}
        <svg
          viewBox="0 0 16 16"
          aria-hidden
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </Link>
    </div>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600 marker:text-slate-400 dark:text-slate-400 dark:marker:text-slate-500">
      {items.map((item, index) => (
        <li key={index}>{parseInlineBold(item)}</li>
      ))}
    </ul>
  );
}

const educationEntryHeader =
  "flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4";

const educationTitle =
  "text-lg font-medium text-slate-900 dark:text-slate-100";

const educationDate = "shrink-0 text-base text-slate-500 dark:text-slate-500";

const educationDetail =
  "mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400";

/**
 * @param showHeading — In-card “Education” title (home); omit on `/education` where the page h1 is enough.
 * @param includeCodePath — CodePath courses: only on `/education`, not on the home page.
 */
export function EducationPanel({
  showHeading = true,
  includeCodePath = false,
  moreLink,
}: {
  showHeading?: boolean;
  includeCodePath?: boolean;
  moreLink?: { href: string; label: string };
}) {
  return (
    <div className={contentSectionSurface}>
      {showHeading ? (
        <h2 id="education-heading" className={contentSectionTitle}>
          Education
        </h2>
      ) : null}
      <div
        className={
          showHeading ? `${contentSectionBody} space-y-10` : "space-y-10"
        }
      >
        <article>
          <header className={educationEntryHeader}>
            <h3 className={educationTitle}>San Francisco State University</h3>
            <p className={educationDate}>Expected December 2026</p>
          </header>
          <p className={educationDetail}>
            Bachelor of Science, Computer Science (Minor in Mathematics)
          </p>
          <p className={educationDate + " mt-2"}>San Francisco, CA</p>
        </article>

        {includeCodePath ? (
          <article>
            <h3 className={educationTitle}>CodePath</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-600 marker:text-slate-400 dark:text-slate-400 dark:marker:text-slate-500">
              <li>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  Applications of AI Engineering
                </span>
                <span className="text-slate-500 dark:text-slate-500">
                  {" "}
                  · July 2026 – September 2026
                </span>
              </li>
              <li>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  AI Open Source Capstone
                </span>
                <span className="text-slate-500 dark:text-slate-500">
                  {" "}
                  · September 2026 – December 2026
                </span>
              </li>
            </ul>
          </article>
        ) : null}
      </div>
      {moreLink ? (
        <SectionMoreLink href={moreLink.href} label={moreLink.label} />
      ) : null}
    </div>
  );
}

/** Certificates — render only on `/education`, not the home page. */
export function EducationCertificatesPanel() {
  const linkProps = {
    className: externalTextLinkClass,
    rel: "noopener noreferrer" as const,
    target: "_blank" as const,
  };

  return (
    <div className={contentSectionSurface}>
      <h2 className={contentSectionTitle}>Certificates</h2>
      <ol
        className={`${contentSectionBody} list-decimal space-y-5 pl-5 text-base leading-relaxed text-slate-600 marker:font-medium marker:text-slate-800 dark:text-slate-400 dark:marker:text-slate-200`}
      >
        <li>
          <a href={CERT_DEEPL_AGENTIC_AI} {...linkProps}>
            DeepLearning.AI — Agentic AI
          </a>
        </li>
        <li>
          <a href={CERT_MONGODB_AGENTS_CREDLY} {...linkProps}>
            Building AI Agents with MongoDB
          </a>
          <span className="text-slate-500 dark:text-slate-500"> · MongoDB</span>
        </li>
        <li>
          <a href={CERT_TRYHACKME_PRE_SECURITY_PDF} {...linkProps}>
            Pre Security Certificate (PDF)
          </a>
          <span className="text-slate-500 dark:text-slate-500"> · TryHackMe</span>
        </li>
      </ol>
    </div>
  );
}

function professionalInner() {
  return (
    <div className="space-y-10">
      <article>
        <header className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
          <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
            SWE Teaching Assistant — San Francisco State University
          </h3>
          <p className="shrink-0 text-base text-slate-500 dark:text-slate-500">
            September 2026 – Current
          </p>
        </header>
        <BulletList items={SWE_TA_BULLETS} />
      </article>

      <article>
        <header className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
          <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
            Full-Stack Engineer — Develop for Good
          </h3>
          <p className="shrink-0 text-base text-slate-500 dark:text-slate-500">
            May 2026 – Present
          </p>
        </header>
        <div className={projectMeta}>
          <p>
            <span className={projectMetaLabel}>Tech stack:</span> Firebase /
            Firestore, React Native (Expo), TypeScript, Zod, Jest, GitHub Actions
          </p>
        </div>
        <BulletList items={DEVELOP_FOR_GOOD_BULLETS} />
      </article>
    </div>
  );
}

export function ProfessionalExperiencePanel({
  showHeading = true,
  moreLink,
}: {
  showHeading?: boolean;
  moreLink?: { href: string; label: string };
}) {
  return (
    <div className={contentSectionSurface}>
      {showHeading ? (
        <>
          <h2
            id="professional-experience-heading"
            className={contentSectionTitle}
          >
            Professional Experience
          </h2>
          <div className={contentSectionBody}>{professionalInner()}</div>
        </>
      ) : (
        professionalInner()
      )}
      {moreLink ? (
        <SectionMoreLink href={moreLink.href} label={moreLink.label} />
      ) : null}
    </div>
  );
}

const openSourceHeading =
  "text-lg font-medium text-slate-900 dark:text-slate-100";

const openSourceBody =
  "mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400";

function OpenSourceLinks({
  links,
}: {
  links: readonly { href: string; label: string }[];
}) {
  return (
    <p className={openSourceBody}>
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 ? <span aria-hidden> · </span> : null}
          <a
            href={link.href}
            className={externalTextLinkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        </span>
      ))}
    </p>
  );
}

/** Open source work. Home shows Redis and AgentField only; Experience includes distribution. */
export function AgentFieldOpenSourcePanel({
  includeDistribution = true,
  moreLink,
}: {
  includeDistribution?: boolean;
  moreLink?: { href: string; label: string };
}) {
  return (
    <div className={contentSectionSurface}>
      <h2 id="open-source-heading" className={contentSectionTitle}>
        Open source
      </h2>
      <div className={`${contentSectionBody} ${contentNestedStack}`}>
        <div>
          <h3 className={openSourceHeading}>
            LibreDB Studio (1k + Github stars) — fix: Redis Operations Metrics Display
          </h3>
          <p className={openSourceBody}>
            Fixed the Redis Admin “Run Info” action so the{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-200">
              INFO
            </code>{" "}
            reply is parsed into key:value metrics and shown in the Operations
            tab. The count now matches those metrics, and provider, Operations
            tab, and hook tests cover the table, including clearing it when a
            later call returns no rows.
          </p>
          <OpenSourceLinks
            links={[
              { href: LIBREDB_REDIS_ISSUE_URL, label: "GitHub issue #1453" },
              { href: LIBREDB_REDIS_PR_URL, label: "PR #1608" },
            ]}
          />
        </div>

        <div>
          <h3 className={openSourceHeading}>
            AgentField (2.6k + Github stars) — tests: Control Plane Test Coverage
          </h3>
          <p className={openSourceBody}>
            Contributed unit tests for the control plane retry handler in{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-200">
              retry.go
            </code>
            , covering successful retry submission, invalid or missing execution
            IDs, and error response shape—keeping the handler’s behavior
            explicit as the project grows.
          </p>
          <OpenSourceLinks
            links={[
              {
                href: AGENTFIELD_ISSUE_URL,
                label: "GitHub issue #104 — thread & context",
              },
            ]}
          />
        </div>

        {includeDistribution ? (
          <div>
            <h3 className={openSourceHeading}>
              LibreDB Studio (1k + Github stars) — docs: Scoop Distribution Guide
            </h3>
            <p className={openSourceBody}>
              Added the Scoop Extras listing to the channel inventory and
              regenerated the channel matrix and login showcase from that
              inventory. The README and distribution guide now include the
              Windows install command, scoop install extras/libredb-studio.
              Release CI still leaves Scoop updates to the bucket’s own
              workflow.
            </p>
            <OpenSourceLinks
              links={[
                {
                  href: LIBREDB_DISTRIBUTION_ISSUE_URL,
                  label: "GitHub issue #1120",
                },
                { href: LIBREDB_DISTRIBUTION_PR_URL, label: "PR #1226" },
              ]}
            />
          </div>
        ) : null}
      </div>
      {moreLink ? (
        <SectionMoreLink href={moreLink.href} label={moreLink.label} />
      ) : null}
    </div>
  );
}

function projectsSubsections(includeBoard2Board: boolean) {
  return (
    <>
      <div className={contentSubsection}>
        <ProjectTitleWithRepo
          repoHref={PROJECT_REPO_LINKS.recipeKitchen}
          siteHref={RECIPE_KITCHEN_SITE_URL}
          title="Recipe Kitchen"
          description="Multimodal Reel-to-Recipe Platform"
        />
        <div className={projectMeta}>
          <p>
            <span className={projectMetaLabel}>Tech stack:</span> LangGraph,
            Google Gemini, FastAPI, Python, TypeScript, Supabase, Silero VAD,
            Apify, Amazon SQS, AWS ECS, Amazon ECR, GitHub Actions, Vercel
          </p>
        </div>
        <BulletList items={RECIPE_KITCHEN_BULLETS} />
      </div>

      <div className={contentSubsection}>
        <ProjectTitleWithRepo
          repoHref={PROJECT_REPO_LINKS.howToKeepPlantsAlive}
          title="HowToKeepPlantsAlive"
          description="AI Plant Recommendation System & Care Platform"
        />
        <div className={projectMeta}>
          <p>
            <span className={projectMetaLabel}>Tech stack:</span> LangGraph,
            PyTorch, Python, MongoDB, Gemini, Cohere, DVC, Prefect, MLFlow,
            Pinecone, Feast, TypeScript
          </p>
        </div>
        <BulletList items={PLANT_PROJECT_BULLETS} />
      </div>

      <div className={contentSubsection}>
        <ProjectTitleWithRepo
          repoHref={PROJECT_REPO_LINKS.chicoChatbot}
          presentationHref={CHICO_PRESENTATION_URL}
          title="Chico State University Chatbot"
          description="DxHub AI Summer Camp at Cal Poly San Luis Obispo"
        />
        <div className={projectMeta}>
          <p>
            <span className={projectMetaLabel}>Tech stack:</span> Node.js, AWS
            Bedrock, AWS Lambda, AWS API Gateway, AWS OpenSearch Serverless, AWS
            S3, AWS CloudFront
          </p>
        </div>
        <BulletList items={CHICO_CHATBOT_BULLETS} />
      </div>

      <div className={contentSubsection}>
        <ProjectTitleWithRepo
          repoHref={PROJECT_REPO_LINKS.gaitorGate}
          title="GaitorGate"
          description="Full-Stack Search Engine for AI Tools"
        />
        <div className={projectMeta}>
          <p className={projectMetaLabel}>
            Team Lead + Backend/Database Engineer
          </p>
          <p>
            <span className={projectMetaLabel}>Tech stack:</span> LAMP stack,
            Flask, AWS EC2, Google Gemini
          </p>
        </div>
        <BulletList items={GAITORGATE_BULLETS} />
      </div>

      {includeBoard2Board ? (
        <div className={contentSubsection}>
          <ProjectTitleWithRepo
            repoHref={PROJECT_REPO_LINKS.board2Board}
            title="Board2Board"
            description="Chess Utility Tool for Over-the-Board (OTB) Game Recognition"
          />
          <div className={projectMeta}>
            <p>
              <span className={projectMetaLabel}>Tech stack:</span> Keras,
              Python, OpenCV, ResNet50, Scikit-learn, Matplotlib, SciPy,
              scikit-image, TensorFlow
            </p>
          </div>
          <BulletList items={BOARD2BOARD_BULLETS} />
        </div>
      ) : null}
    </>
  );
}

export function ProjectsPanel({
  showHeading = true,
  includeBoard2Board = true,
  moreLink,
}: {
  showHeading?: boolean;
  includeBoard2Board?: boolean;
  moreLink?: { href: string; label: string };
}) {
  return (
    <div className={contentSectionSurface}>
      {showHeading ? (
        <>
          <h2 id="project-experience-heading" className={contentSectionTitle}>
            Project Experience
          </h2>
          <div className={`${contentSectionBody} ${contentNestedStack}`}>
            {projectsSubsections(includeBoard2Board)}
          </div>
        </>
      ) : (
        <div className={contentNestedStack}>
          {projectsSubsections(includeBoard2Board)}
        </div>
      )}
      {moreLink ? (
        <SectionMoreLink href={moreLink.href} label={moreLink.label} />
      ) : null}
    </div>
  );
}

function skillsInner() {
  return (
    <div className="space-y-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
      <p>
        <span className={skillsKeyLabel}>Programming languages:</span> Python,
        Java, JavaScript, TypeScript
      </p>
      <p>
        <span className={skillsKeyLabel}>Databases:</span> MySQL, MongoDB,
        PostgreSQL, Pinecone
      </p>
      <p>
        <span className={skillsKeyLabel}>Cloud/DevOps:</span> AWS, Docker,
        Railway, Vercel, Google Firebase
      </p>
      <p>
        <span className={skillsKeyLabel}>ML/AI:</span> Keras, TensorFlow,
        PyTorch, LangGraph, LangChain, OpenCV, LangSmith
      </p>
    </div>
  );
}

export function SkillsPanel({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <div className={contentSectionSurface}>
      {showHeading ? (
        <>
          <h2 id="skills-heading" className={contentSectionTitle}>
            Skills
          </h2>
          <div className={contentSectionBody}>{skillsInner()}</div>
        </>
      ) : (
        skillsInner()
      )}
    </div>
  );
}

export function HomeBackgroundSection() {
  return (
    <>
      <section
        aria-labelledby="education-heading"
        className={contentSectionStack}
      >
        <EducationPanel
          showHeading
          moreLink={{ href: "/education", label: "More qualifications" }}
        />
      </section>

      <section
        aria-labelledby="professional-experience-heading"
        className={contentSectionStack}
      >
        <ProfessionalExperiencePanel
          showHeading
          moreLink={{ href: "/experience", label: "More experiences" }}
        />
      </section>

      <section
        aria-labelledby="project-experience-heading"
        className={contentSectionStack}
      >
        <ProjectsPanel
          showHeading
          includeBoard2Board={false}
          moreLink={{ href: "/projects", label: "More projects" }}
        />
      </section>

      <section
        aria-labelledby="open-source-heading"
        className={contentSectionStack}
      >
        <AgentFieldOpenSourcePanel
          includeDistribution={false}
          moreLink={{
            href: "/experience#open-source-heading",
            label: "More contributions",
          }}
        />
      </section>

      <section aria-labelledby="skills-heading" className={contentSectionStack}>
        <SkillsPanel showHeading />
      </section>
    </>
  );
}
