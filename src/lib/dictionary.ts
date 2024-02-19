import "server-only";
import { Locale } from "@/../i18n.config";

const dictionaries = {
  en: () =>
    import("./../dictionaries/en.json").then((module) => module.default),
  sk: () =>
    import("./../dictionaries/sk.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return locale == "sk" ? dictionaries.sk() : dictionaries.en();
};
