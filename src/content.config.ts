import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const createProjCollection = (path: string) => 
  defineCollection({
    loader: glob({ pattern: "*.mdx", base: path }),
    type: "content_layer",
    schema: z.object({
      title: z.string(),
      dateRange: z.string(),
      link: z.string().optional(),
      technologies: z.string().optional(),
    }),
  });

const project = createProjCollection("./src/content/projects");
const researchProject = createProjCollection("./src/content/research");

export const collections = { project, researchProject };
