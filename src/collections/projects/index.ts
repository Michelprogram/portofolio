import { defineCollection } from "astro:content";

import { file } from "astro/loaders";

import { z } from "astro/zod";

const projectSchema = z.object({
  id: z.string(),
  acronym: z.string().max(3),
  technologies: z.array(z.string()),
  live: z.url().optional(),
  media: z
    .discriminatedUnion("type", [
      z.object({ type: z.literal("website"), url: z.url() }),
      z.object({ type: z.literal("video"), src: z.url() }),
    ])
    .optional(),
  link: z.string(),
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
