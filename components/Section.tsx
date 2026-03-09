import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  label: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
        {label}
      </p>
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h2>
      <div className="mt-2 text-sm leading-relaxed text-zinc-600">
        {children}
      </div>
    </section>
  );
}

