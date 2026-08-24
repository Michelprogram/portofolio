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

/*     {
        "id": "magic-scanner",
        "technologies": [
            "OCR",
            "Heroku",
            "PWA",
            "Notion API"
        ],
        "link": "https://github.com/Michelprogram/magic-scanner",
        "image": "placeholder",
        "date": "2023-10-01",
        "fr": {
            "title": "Scanner Magic: The Gathering",
            "description": "Inventoriser ses cartes, quelle corvée autant le faire avec de l'OCR."
        },
        "en": {
            "title": "Scanner Magic: The Gathering",
            "description": "What a boring task to inventory your cards, let's do it with OCR."
        }
    },
    {
        "id": "essence-pas-chere",
        "technologies": [
            "Python",
            "Flask",
            "Geolocation"
        ],
        "link": "https://github.com/Michelprogram/essence",
        "image": "placeholder",
        "date": "2022-04-01",
        "fr": {
            "title": "Essence pas chère",
            "description": "Toi aussi tu veux être un vrai rat et trouver la station-service la moins chère près de chez toi."
        },
        "en": {
            "title": "Essence pas chère",
            "description": "You too want to be a real rat and find the cheapest gas station near you."
        }
    } */
