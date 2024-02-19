"use client";
import { usePathname } from "next/navigation";
import { i18n } from "../../i18n.config";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const [isDropdownLanguageOpen, setIsDropdownLanguageOpen] = useState(false);

  const getLocale = (): string => {
    if (!pathName) return i18n.defaultLocale;
    const segments = pathName.split("/");
    return segments[1];
  };

  const handleToggleDropdownLanguage = () => {
    setIsDropdownLanguageOpen(!isDropdownLanguageOpen);
  };

  const RedirectPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="relative inline-block text-center items-center">
      <div>
        <button
          type="button"
          onClick={handleToggleDropdownLanguage}
          className="custom-dropdown w-full"
        >
          <Image
            src={require(`/public/assets/icons/flags/${getLocale()}.png`)}
            alt={getLocale() + " flag"}
            width={25}
            height={25}
          />
          <span>{getLocale().toLocaleUpperCase()}</span>
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isDropdownLanguageOpen && (
        <ul
          className="absolute right-0 z-10 mt-2 w-28 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {i18n.locales.map((locale) => (
            <li className="" role="none" key={locale}>
              <Link
                className={
                  locale === getLocale()
                    ? `text-gray-700 inline-flex px-4 py-3 text-sm font-semibold items-center gap-x-2 text-left w-full justify-center bg-gray-300/30 rounded-md cursor-not-allowed`
                    : `custom-dropdown-item font-semibold justify-center`
                }
                role="menuitem"
                tabIndex={-1}
                href={RedirectPathName(locale)}
              >
                <Image
                  src={require(`/public/assets/icons/flags/${locale}.png`)}
                  alt={locale}
                  width={25}
                  height={25}
                />
                {locale.toLocaleUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
