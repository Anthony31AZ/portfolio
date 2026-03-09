import Link from "next/link";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../content/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#e5e7eb,_#f5f5f4)]">
      <Container>
        <main className="space-y-16">
          <header className="flex flex-col gap-6 border-b border-zinc-100 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
                Product Design
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                Anthony Abitbol
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-zinc-600">
                Product designer focused on clear interfaces, thoughtful flows,
                and working closely with teams to ship useful things.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-800"
              >
                View selected work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium text-zinc-700 bg-white/60 transition hover:border-zinc-300 hover:bg-white"
              >
                Get in touch
              </a>
            </div>
          </header>

          <div className="grid gap-12">
            <Section id="about" label="About" title="A bit about me">
              <p>
                I work end-to-end: from understanding the context and framing
                the problem, to exploring directions, shaping the solution, and
                working with product and engineering to bring it to life.
              </p>
              <p className="mt-3">
                I care about crisp interfaces, good structure, and keeping
                things legible for the people using the product and the people
                building it.
              </p>
            </Section>

            <Section id="work" label="Selected work" title="A few things I’ve worked on">
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </Section>

            <Section
              id="process"
              label="Approach"
              title="How I like to work"
            >
              <div className="mt-4 grid gap-4 sm:grid-cols-4">
                {[
                  {
                    title: "Discover",
                    body: "Clarify the problem, constraints, and who we’re designing for. Use existing data before adding new research.",
                  },
                  {
                    title: "Frame",
                    body: "Align on what success looks like and which questions we’re actually trying to answer with design.",
                  },
                  {
                    title: "Explore",
                    body: "Sketch, prototype, and iterate with the team. Compare options explicitly and trade-offs honestly.",
                  },
                  {
                    title: "Deliver",
                    body: "Bring detail, edge cases, and states into the open. Work closely with engineering to make sure the thing we ship matches the intent.",
                  },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="flex flex-col gap-1 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-3"
                  >
                    <h3 className="text-xs font-semibold text-zinc-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-600">{step.body}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="contact" label="Contact" title="Let’s talk">
              <p>
                If you’d like to talk about a role, a project, or just compare
                notes on product and design, feel free to reach out.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a
                  href="mailto:hello@anthonyabitbol.com"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-50 shadow-sm transition hover:bg-zinc-800"
                >
                  Email
                </a>
                <Link
                  href="https://www.linkedin.com"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium text-zinc-700 bg-white/60 transition hover:border-zinc-300 hover:bg-white"
                >
                  LinkedIn
                </Link>
              </div>
            </Section>
          </div>

          <footer className="pt-4 text-[11px] text-zinc-400">
            <p>© {new Date().getFullYear()} Anthony Abitbol. All rights reserved.</p>
          </footer>
        </main>
      </Container>
    </div>
  );
}

