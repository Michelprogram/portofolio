import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  site: "https://dorian-gauron.com",
  base: "/",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          fr: "fr-CA",
        },
      },
    }),
  ],
});
