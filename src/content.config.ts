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
      skills: z.string().optional(),
    }),
  });

const project = createProjCollection("./src/content/projects");
const researchProject = createProjCollection("./src/content/research");
const academicProject = createProjCollection("./src/content/academic")

export const collections = { project, researchProject, academicProject };
