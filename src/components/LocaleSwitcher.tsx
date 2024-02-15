"use client";
import { usePathname } from "next/navigation";
import { i18n } from "../../i18n.config";
import Link from "next/link";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const RedirectPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul>
      {i18n.locales.map((locale) => (
        <li key={locale}>
          <Link href={RedirectPathName(locale)}>{locale}</Link>
        </li>
      ))}
    </ul>
  );
}
