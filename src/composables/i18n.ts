import { fr, en, type Translation } from "@/i18n";
import { type Maybe } from "@/utils";

export const useI18n = (lang: Maybe<string>) => {
  const translation: Translation = lang === "en" ? en : fr;

  const locale = () => (lang === "en" ? "en" : "fr");

  return {
    translation,
    locale,
  };
};
