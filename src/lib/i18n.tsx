import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { PHRASES } from "./phrases";

export type Lang = "he" | "ru" | "en";
// Phase 1: default language is Russian; switch to "he" at launch.
export const DEFAULT_LANG: Lang = "ru";
const DIRS: Record<Lang, "rtl" | "ltr"> = { he: "rtl", ru: "ltr", en: "ltr" };

const DICT: Record<"en" | "he", Record<string, string>> = {
  en: {
    "nav.home": "Home", "nav.georgia": "Georgia", "nav.italy": "Italy", "nav.china": "China",
    "nav.japan": "Japan", "nav.offices": "Offices", "nav.order": "Order",
    "btn.order": "Order",
  },
  he: {
    "nav.home": "ראשי", "nav.georgia": "גאורגיה", "nav.italy": "איטליה", "nav.china": "סין",
    "nav.japan": "יפן", "nav.offices": "משרדים", "nav.order": "הזמנה",
    "btn.order": "להזמנה",
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

/** Translate a Russian source phrase into the given language. */
export function translate(lang: Lang, ru: string) {
  return lang === "ru" ? ru : (PHRASES[ru]?.[lang] ?? ru);
}
export function useTr() {
  const lang = useLang();
  return (ru: string) => translate(lang, ru);
}

export function useDocumentLang() {
  const lang = useLang();
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = DIRS[lang];
  }, [lang]);
}
