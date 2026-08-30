import { defineCollection } from "astro:content";

import { file } from "astro/loaders";

import { z } from "astro/zod";

export const skills = defineCollection({
  loader: file("src/collections/skills/skills.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    icon: z.string(),
    experiences: z.string(),
  }),
});
