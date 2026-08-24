import { defineCollection } from "astro:content";

import { file } from "astro/loaders";

import { z } from "astro/zod";

const articleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  link: z.string(),
});

export const articles = defineCollection({
  loader: file("src/collections/articles/articles.json"),
  schema: articleSchema,
});

export type Article = z.infer<typeof articleSchema>;
