export type Project = {
  slug: string;
  title: string;
  role: string;
  timeframe?: string;
  summary: string;
  tags?: string[];
  highlight?: string;
};

export const projects: Project[] = [
  {
    slug: "placeholder-product-experience",
    title: "Placeholder product experience",
    role: "Product Designer",
    timeframe: "2024",
    summary:
      "A flagship product experience where I owned the end-to-end design, from research and framing the problem through to delivery.",
    tags: ["Product design", "End-to-end", "Case study"],
    highlight:
      "Focused on measurable impact, clear constraints, and a tight collaboration with product and engineering.",
  },
  {
    slug: "placeholder-design-system",
    title: "Placeholder design system",
    role: "Design systems",
    timeframe: "2023",
    summary:
      "Systematising patterns and components to help teams move faster while keeping interfaces coherent.",
    tags: ["Design system", "Components", "Foundations"],
  },
  {
    slug: "placeholder-mobile-experience",
    title: "Placeholder mobile experience",
    role: "Product Designer",
    timeframe: "2022",
    summary:
      "Iterating on a core mobile flow to improve clarity and reduce friction for new users.",
    tags: ["Mobile", "Onboarding", "Iteration"],
  },
  {
    slug: "placeholder-explorations",
    title: "Placeholder explorations",
    role: "Product Designer",
    summary:
      "A set of smaller explorations and experiments that show how I think through interaction, structure, and hierarchy.",
    tags: ["Explorations", "Interaction", "Visual design"],
  },
];

