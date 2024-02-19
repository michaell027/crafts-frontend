"use client";
import { PiSunBold } from "react-icons/pi";
import { useState } from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useDictionary } from "@/providers/dictionary-provider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

const Header = () => {
  const dictionary = useDictionary();

  const [isDropdownMenuOpen, setIsDropDownMenuOpen] = useState(false);
  const [isDropdownLanguageOpen, setIsDropdownLanguageOpen] = useState(false);

  const handleToggleDropdownMenu = () => {
    setIsDropDownMenuOpen(!isDropdownMenuOpen);
  };

  const handleToggleDropdownLanguage = () => {
    setIsDropdownLanguageOpen(!isDropdownLanguageOpen);
  };

  return (
    <header className="fixed h-fit flex w-full text-gray-700 bg-[#F3F9FF]/95 border-b-2 border-gray-300 dark:border-gray-600/30 dark:bg-[#0d1017]/95 dark:text-gray-300">
      <div className="container grid grid-cols-3 items-center justify-between p-4 mx-auto flex-row">
        <Link
          href={"/"}
          className="flex items-center justify-start font-medium title-font"
        >
          <h1 className="text-2xl font-bold hover:bg-gray-400/30 rounded-md px-3 py-2 dark:hover:bg-gray-600/30">
            {dictionary.component.header.title}
          </h1>
        </Link>

        <nav className="hidden md:flex flex-wrap items-center justify-center gap-2 lg:gap-4">
          <Link
            href="#"
            className="font-medium hover:bg-gray-400/30 rounded-md px-3 py-2 dark:hover:bg-gray-600/30"
          >
            {dictionary.component.header.menu.home}
          </Link>
          <Link
            href="#"
            className="font-medium hover:bg-gray-400/30 rounded-md px-3 py-2 dark:hover:bg-gray-600/30"
          >
            {dictionary.component.header.menu.about}
          </Link>
          <Link
            href="#"
            className="font-medium hover:bg-gray-400/30 rounded-md px-3 py-2 dark:hover:bg-gray-600/30"
          >
            {dictionary.component.header.menu.contact}
          </Link>
        </nav>

        <div className="md:hidden relative items-center inline-block text-center">
          <div>
            <button
              onClick={handleToggleDropdownMenu}
              type="button"
              className="custom-dropdown"
            >
              Menu
              <svg
                className="h-6 w-6"
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
          {isDropdownMenuOpen && (
            <div
              className="absolute z-10 text-start mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div role="none">
                <a
                  href="#"
                  className="custom-dropdown-item"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  className="custom-dropdown-item"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="custom-dropdown-item"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="items-center flex justify-end h-full gap-6">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
