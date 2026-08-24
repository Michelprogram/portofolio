import { defineCollection } from "astro:content";

import { file } from "astro/loaders";

import { z } from "astro/zod";

const hobbiesSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  link: z.string(),
});

export const hobbies = defineCollection({
  loader: file("src/collections/hobbies/hobbies.json"),
  schema: hobbiesSchema,
});

export type Hobby = z.infer<typeof hobbiesSchema>;
