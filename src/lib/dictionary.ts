import "server-only";
import type { Locale } from "@/../i18n.config";
const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  sk: () => import("@/dictionaries/sk.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
