import { i18n } from "../../i18n.config";

export function getLocaleFunction(pathName: string | null) {
  return (): string => {
    if (!pathName) return i18n.defaultLocale;
    const segments = pathName.split("/");
    return segments[1];
  };
}
