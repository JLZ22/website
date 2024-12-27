import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const project = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/projects" }),
  type: "content_layer",
  schema: z.object({
    title: z.string(),
    dateRange: z.string(),
    link: z.string(),
    technologies: z.string(),
  }),
});

const researchProject = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/research" }),
  type: "content_layer",
  schema: z.object({
    title: z.string(),
    dateRange: z.string(),
    link: z.string().optional(),
  }),
});

export const collections = { project, researchProject };
