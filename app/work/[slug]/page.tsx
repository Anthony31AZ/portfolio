import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { projects } from "../../../content/projects";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {};
  }

  const title = `${project.title} – Anthony Abitbol`;

  return {
    title,
    description: project.summary,
  };
}

export default function ProjectPage({ params }: { params: Params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#e5e7eb,_#f5f5f4)]">
      <Container>
        <main className="space-y-10">
          <header className="space-y-4 border-b border-zinc-100 pb-6">
            <Link
              href="/#work"
              className="inline-flex items-center text-xs font-medium text-zinc-500 hover:text-zinc-800"
            >
              ← Back to selected work
            </Link>
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
                Case study
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                {project.title}
              </h1>
              <p className="text-sm text-zinc-500">
                {project.role}
                {project.timeframe ? ` · ${project.timeframe}` : null}
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
                {project.summary}
              </p>
            </div>
            {project.tags && project.tags.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-900/5 px-2 py-0.5 text-[11px] font-medium text-zinc-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </header>

          <section className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-zinc-900">
                  Overview
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600">
                  This is a placeholder case study. Replace this text with the
                  story of the project: the context, the problem you were trying
                  to solve, and the impact it had.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-zinc-900">
                  Process
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Talk through how you approached the work. Which questions did
                  you ask first? What did you learn from research or from the
                  team? How did the design evolve?
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-zinc-900">
                  Outcome
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Capture what changed as a result: product metrics, signals
                  from users, or how the work helped the team make clearer
                  decisions.
                </p>
              </div>
            </div>

            <aside className="space-y-4 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4 text-xs text-zinc-600">
              <h2 className="text-xs font-semibold text-zinc-900">
                Quick facts
              </h2>
              <dl className="space-y-3">
                {project.timeframe ? (
                  <div className="flex justify-between gap-3">
                    <dt className="text-zinc-400">Timeframe</dt>
                    <dd className="text-right">{project.timeframe}</dd>
                  </div>
                ) : null}
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-400">Role</dt>
                  <dd className="text-right">{project.role}</dd>
                </div>
                {project.highlight ? (
                  <div>
                    <dt className="text-zinc-400">Focus</dt>
                    <dd className="mt-1 text-xs leading-relaxed text-zinc-600">
                      {project.highlight}
                    </dd>
                  </div>
                ) : null}
              </dl>
              <p className="mt-3 text-[11px] text-zinc-400">
                Replace these placeholders with details, screenshots, and
                artefacts from your work when you are ready.
              </p>
            </aside>
          </section>
        </main>
      </Container>
    </div>
  );
}

