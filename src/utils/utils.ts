import type { CSSProperty } from "astro/types";

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomNumberNotFloor = (min: number, max: number) => {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
};

export type MeteorInformation = {
  className: string;
  style: Partial<Record<CSSProperty, string>>;
};

export const computeDateFromBeginning = (date: Date) => {
  return Math.abs(new Date(Date.now() - date.getTime()).getFullYear() - 1970);
};
