import { defineCollection } from "astro:content";

import { file } from "astro/loaders";

import { z } from "astro/zod";

const experienceSchema = z.object({
  id: z.string(),
  from: z.string(),
  to: z.string().optional(),
  place: z.string(),
  link: z.string(),
  icon: z.string(),
  position: z.object({
    x: z.number(),
    y: z.number(),
  }),
  threshold: z.number(),
  fr: z.object({
    title: z.string(),
    description: z.string(),
  }),
  en: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const experiences = defineCollection({
  loader: file("src/collections/experiences/experiences.json"),
  schema: experienceSchema,
});

export type Experience = z.infer<typeof experienceSchema>;
