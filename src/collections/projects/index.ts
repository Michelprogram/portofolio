import { defineCollection } from "astro:content";

import { file } from "astro/loaders";

import { z } from "astro/zod";

const projectSchema = z.object({
  id: z.string(),
  technologies: z.array(z.string()),
  link: z.string(),
  image: z.string(),
  date: z.string(),
  fr: z.object({
    title: z.string(),
    description: z.string(),
  }),
  en: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const projects = defineCollection({
  loader: file("src/collections/projects/projects.json"),
  schema: projectSchema,
});

export type Project = z.infer<typeof projectSchema>;
