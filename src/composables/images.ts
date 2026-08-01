import type { ImageMetadata } from "astro";

export const useImage = (options: { path: string; folder: string }) => {
  const modules = import.meta.glob<{ default: ImageMetadata }>(
    "/src/images/**/*.{jpg,jpeg,png,webp,svg}",
    { eager: true },
  );

  const image = Object.entries(modules).find(([path]) =>
    path.includes(`/${options.folder}/${options.path}.`),
  )?.[1].default;

  return {
    image,
  };
};
