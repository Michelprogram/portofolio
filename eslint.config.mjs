import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      "dist/",
      ".astro/",
      "node_modules/",
      "src/env.d.ts",
      "tailwind.config.js",
      "astro.config.mjs",
    ],
  },
];
