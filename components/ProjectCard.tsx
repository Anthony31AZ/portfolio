import Link from "next/link";
import type { Project } from "../content/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col gap-2 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4 transition hover:-translate-y-0.5 hover:border-zinc-200 hover:bg-white hover:shadow-sm">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold text-zinc-900">
          <Link href={`/work/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        {project.timeframe ? (
          <span className="text-xs text-zinc-400">{project.timeframe}</span>
        ) : null}
      </div>
      <p className="text-xs font-medium text-zinc-500">{project.role}</p>
      <p className="text-sm text-zinc-600">{project.summary}</p>
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
    </article>
  );
}

