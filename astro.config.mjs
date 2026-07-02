import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  /*image: {
    service: squooshImageService(),
  },*/
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://dorian-gauron.com",
  base: "/",
  integrations: [vue()],
});
