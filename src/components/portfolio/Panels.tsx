import type { ReactNode } from "react";
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
  howToKeepPlantsAlive: "https://github.com/JaredAung/HowToNotKillYourPlants",
  gaitorGate: "https://github.com/JaredAung/GaitorGate",
  board2Board: "https://github.com/JaredAung/Board2Board",
} as const;

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

const OUTAMATION_BULLETS = [
  "Built an <b>end-to-end document intelligence pipeline</b> that classifies and extracts structured data from mortgages, invoices, and contracts using <b>Tesseract, PaddleOCR, and EasyOCR</b> for RAG workflows.",
  "Benchmarked layout-aware parsing techniques across document formats, identifying <b>OCR–LLM combinations</b> that improved extraction efficiency and accuracy on multi-column and table-heavy layouts.",
] as const;

const PLANT_PROJECT_BULLETS = [
  "Engineered a <b>two-tower recommendation system</b> using <b>Feast-backed features</b> and <b>holdout-based offline evaluation</b>, <b>outperforming a cosine-similarity baseline by 6.6× on Recall@10, 3.8× on NDCG@10, and 4× on Hit@10</b>, while <b>reducing inference latency from 63.7ms to 2.2ms</b>.",
  "Developed a <b>LangGraph multi-agent system</b> for plant Q&A, side-by-side comparison, exploring recommendations, and <b>live web search via Tavily</b>, supported by a <b>hybrid RAG pipeline</b> with <b>cosine similarity</b>, <b>BM25 reranking</b>, and recursive/sliding window chunking.",
  "Designed a <b>synthetic data generation framework</b> that simulated user–plant interactions for training and evaluation in a data-scarce domain, <b>successfully capturing 8 out of 10 target behavioral patterns</b>.",
  "Containerized the <b>FastAPI</b> backend with <b>Docker</b> and <b>deployed on Railway and Vercel</b>, <b>serving a catalogue of 1000+ plants</b>.",
] as const;

const GAITORGATE_BULLETS = [
  "<b>Led a team of 6</b> to develop a search platform for <b>100+ AI tools</b> using keyword or NLP-based search, <b>winning 1st place out of 12 teams in a software engineering competition</b>.",
  "Designed and optimized a <b>relational database schema</b> and <b>search pipeline</b> using <b>SQL</b>, <b>enabling natural language queries with ~0.4s average latency</b>.",
  "Collaborated cross-functionally with designers, frontend and backend engineers, and QA in an <b>Agile environment to improve team productivity and workflow efficiency</b>.",
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
}: {
  title: string;
  description: string;
  repoHref: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
      <h3 className="min-w-0 flex-1 text-lg text-slate-900 dark:text-slate-100">
        <span className="font-normal">{title}:</span>{" "}
        <span className="font-semibold">{description}</span>
      </h3>
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

const sfsuEducationBody = (
  <>
    <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
      San Francisco State University
    </h3>
    <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
      Bachelor of Science, Computer Science (Minor in Mathematics)
    </p>
    <p className="mt-2 text-base text-slate-500 dark:text-slate-500">
      San Francisco, CA · Expected December 2026
    </p>
  </>
);

const codePathEducationBody = (
  <>
    <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
      CodePath
    </h3>
    <div className="mt-4 space-y-4">
      <div className="rounded-lg border border-slate-200/90 bg-white/60 p-4 dark:border-slate-600/80 dark:bg-slate-900/35">
        <p className="text-base font-medium text-slate-900 dark:text-slate-100">
          Applications of AI Engineering
        </p>
        <p className="mt-1 text-base text-slate-500 dark:text-slate-500">
          Starting June 2026
        </p>
      </div>
      <div className="rounded-lg border border-slate-200/90 bg-white/60 p-4 dark:border-slate-600/80 dark:bg-slate-900/35">
        <p className="text-base font-medium text-slate-900 dark:text-slate-100">
          Advanced Technical Interview Prep
        </p>
        <p className="mt-1 text-base text-slate-500 dark:text-slate-500">
          Starting June 2026
        </p>
      </div>
    </div>
  </>
);

/**
 * @param showHeading — In-card “Education” title (home); omit on `/education` where the page h1 is enough.
 * @param includeCodePath — CodePath courses + second card: only on `/education`, not on the home page.
 */
export function EducationPanel({
  showHeading = true,
  includeCodePath = false,
}: {
  showHeading?: boolean;
  includeCodePath?: boolean;
}) {
  const sfsuCard = (
    <div className={contentSectionSurface}>
      {showHeading ? (
        <>
          <h2 id="education-heading" className={contentSectionTitle}>
            Education
          </h2>
          <div className={contentSectionBody}>{sfsuEducationBody}</div>
        </>
      ) : (
        sfsuEducationBody
      )}
    </div>
  );

  if (!includeCodePath) {
    return sfsuCard;
  }

  return (
    <>
      {sfsuCard}
      <div className={`${contentSectionSurface} ${contentSectionStack}`}>
        {codePathEducationBody}
      </div>
    </>
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
    <article>
      <header className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
        <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
          AI Engineering Extern — Outamation
        </h3>
        <p className="shrink-0 text-base text-slate-500 dark:text-slate-500">
          March 2026 – Present
        </p>
      </header>
      <BulletList items={OUTAMATION_BULLETS} />
    </article>
  );
}

export function ProfessionalExperiencePanel({
  showHeading = true,
}: {
  showHeading?: boolean;
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
          <div className={`${contentSectionBody} space-y-6`}>
            {professionalInner()}
          </div>
        </>
      ) : (
        professionalInner()
      )}
    </div>
  );
}

/** Open source work; shown on the Experience page (not the home Professional block). */
export function AgentFieldOpenSourcePanel() {
  return (
    <div className={contentSectionSurface}>
      <h2 className={contentSectionTitle}>Open source</h2>
      <div className={contentSectionBody}>
        <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
          AgentField — control plane
        </h3>
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          Contributed unit tests for the control plane retry handler in{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            retry.go
          </code>
          , covering successful retry submission, invalid or missing execution IDs,
          and error response shape—keeping the handler’s behavior explicit as
          the project grows.
        </p>
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          <a
            href={AGENTFIELD_ISSUE_URL}
            className={externalTextLinkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub issue #104 — thread &amp; context
          </a>
        </p>
      </div>
    </div>
  );
}

function projectsSubsections() {
  return (
    <>
      <div className={contentSubsection}>
        <ProjectTitleWithRepo
          repoHref={PROJECT_REPO_LINKS.howToKeepPlantsAlive}
          title="HowToKeepPlantsAlive"
          description="AI Plant Recommendation System & Care Platform"
        />
        <div className={projectMeta}>
          <p>
            <span className={projectMetaLabel}>Tech stack:</span> LangGraph,
            PyTorch, Python, MongoDB, Gemini LLM, Voyage AI, Cohere Reranker,
            DVC, Prefect, MLFlow, Pinecone
          </p>
        </div>
        <BulletList items={PLANT_PROJECT_BULLETS} />
      </div>

      <div className={contentSubsection}>
        <ProjectTitleWithRepo
          repoHref={PROJECT_REPO_LINKS.gaitorGate}
          title="GaitorGate"
          description="Full-Stack Search Engine for AI Tools"
        />
        <div className={projectMeta}>
          <p className={projectMetaLabel}>Team Lead</p>
          <p>
            <span className={projectMetaLabel}>Tech stack:</span> LAMP stack,
            Flask, AWS EC2, Google Gemini
          </p>
        </div>
        <BulletList items={GAITORGATE_BULLETS} />
      </div>

      <div className={contentSubsection}>
        <ProjectTitleWithRepo
          repoHref={PROJECT_REPO_LINKS.board2Board}
          title="Board2Board"
          description="Chess Utility Tool for Over-the-Board (OTB) Game Recognition"
        />
        <div className={projectMeta}>
          <p>
            <span className={projectMetaLabel}>Tech stack:</span> Keras, Python,
            OpenCV, ResNet50, Scikit-learn, Matplotlib, SciPy, scikit-image,
            TensorFlow
          </p>
        </div>
        <BulletList items={BOARD2BOARD_BULLETS} />
      </div>
    </>
  );
}

export function ProjectsPanel({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <div className={contentSectionSurface}>
      {showHeading ? (
        <>
          <h2 id="project-experience-heading" className={contentSectionTitle}>
            Project Experience
          </h2>
          <div className={`${contentSectionBody} ${contentNestedStack}`}>
            {projectsSubsections()}
          </div>
        </>
      ) : (
        <div className={contentNestedStack}>{projectsSubsections()}</div>
      )}
    </div>
  );
}

function skillsInner() {
  return (
    <div className="space-y-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
      <p>
        <span className={skillsKeyLabel}>Programming languages:</span> Python,
        Java, JavaScript, TypeScript, Rust
      </p>
      <p>
        <span className={skillsKeyLabel}>Databases:</span> MySQL, MongoDB,
        PostgreSQL, Pinecone, Supabase
      </p>
      <p>
        <span className={skillsKeyLabel}>Cloud/DevOps:</span> AWS, Azure,
        Docker, Railway
      </p>
      <p>
        <span className={skillsKeyLabel}>ML/AI:</span> Keras, TensorFlow,
        PyTorch, LangGraph, LangChain, OpenCV, Hugging Face
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
        <EducationPanel showHeading />
      </section>

      <section
        aria-labelledby="professional-experience-heading"
        className={contentSectionStack}
      >
        <ProfessionalExperiencePanel showHeading />
      </section>

      <section
        aria-labelledby="project-experience-heading"
        className={contentSectionStack}
      >
        <ProjectsPanel showHeading />
      </section>

      <section aria-labelledby="skills-heading" className={contentSectionStack}>
        <SkillsPanel showHeading />
      </section>
    </>
  );
}
