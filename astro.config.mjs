import { defineConfig, squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  site: "https://michelprogram.github.io",
  base: "/portfolio",
});
