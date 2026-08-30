export const formatDate = (iso: string, lang: "fr" | "en") => {
  const d = new Date(iso);
  const month = new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-US", {
    month: "short",
  }).format(d);
  return `${month} ${d.getUTCDate()} ${d.getUTCFullYear()}`;
};

export const formatMonthYear = (
  iso: string,
  lang: "fr" | "en" = "fr",
  monthFormat: "short" | "long" = "short",
) => {
  const date = new Date(iso);
  const locale = lang === "fr" ? "fr-FR" : "en-US";

  return new Intl.DateTimeFormat(locale, {
    month: monthFormat,
    year: "numeric",
  }).format(date);
};

export const formatAcronym = (char: string, name: string) => {
  const chars = name.split("");
  chars.splice(1, 0, char);
  return chars.join("");
};
