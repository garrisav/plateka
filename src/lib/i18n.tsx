import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export type Lang = "he" | "ru" | "en";
// Phase 1: default language is Russian; switch to "he" at launch.
export const DEFAULT_LANG: Lang = "ru";
const DIRS: Record<Lang, "rtl" | "ltr"> = { he: "rtl", ru: "ltr", en: "ltr" };

const DICT: Record<"en" | "he", Record<string, string>> = {
  en: {
    "nav.home": "Home", "nav.georgia": "Georgia", "nav.italy": "Italy", "nav.china": "China",
    "nav.japan": "Japan", "nav.offices": "Offices", "nav.order": "Order",
    "btn.order": "Order",
    notice: "English version is in progress. Some text is still in Russian.",
  },
  he: {
    "nav.home": "ראשי", "nav.georgia": "גאורגיה", "nav.italy": "איטליה", "nav.china": "סין",
    "nav.japan": "יפן", "nav.offices": "משרדים", "nav.order": "הזמנה",
    "btn.order": "להזמנה",
    notice: "הגרסה בעברית בהכנה. חלק מהטקסט עדיין ברוסית.",
  },
};

export function parseLang(v: unknown): Lang | undefined {
  return v === "he" || v === "ru" || v === "en" ? v : undefined;
}

export function useLang(): Lang {
  const search = useRouterState({ select: (s) => s.location.search as Record<string, unknown> });
  return parseLang(search["lang"]) ?? DEFAULT_LANG;
}

/** Search params that carry the language to internal links. */
export function langSearch(lang: Lang, extra: Record<string, string> = {}) {
  return lang === DEFAULT_LANG ? extra : { ...extra, lang };
}

export function useT() {
  const lang = useLang();
  return (key: string, ru: string) => (lang === "ru" ? ru : (DICT[lang][key] ?? ru));
}

export function hasMissing(lang: Lang) {
  return lang !== "ru"; // most page copy is Russian-only for now
}
export function noticeText(lang: Lang) {
  return lang === "ru" ? "" : DICT[lang]["notice"] ?? "";
}

export function useDocumentLang() {
  const lang = useLang();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = DIRS[lang];
  }, [lang]);
}
