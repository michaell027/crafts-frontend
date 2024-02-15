"use client";
import { PiSunBold } from "react-icons/pi";
import { useState } from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const Header = ({ dict }: Readonly<{ dict: any }>) => {
  const [isDropdownMenuOpen, setIsDropDownMenuOpen] = useState(false);
  const [isDropdownLanguageOpen, setIsDropdownLanguageOpen] = useState(false);

  const handleToggleDropdownMenu = () => {
    setIsDropDownMenuOpen(!isDropdownMenuOpen);
  };

  const handleToggleDropdownLanguage = () => {
    setIsDropdownLanguageOpen(!isDropdownLanguageOpen);
  };

  return (
    <header className="w-full text-gray-700 bg-white shadow-sm body-font border-b border-gray-200 border-solid dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300">
      <div className="container grid grid-cols-3 items-center justify-between p-6 mx-auto flex-row">
        <a className="flex items-center justify-start font-medium title-font">
          <h1 className="text-2xl font-bold">{dict.component.header.title}</h1>
        </a>

        <nav className="hidden md:flex flex-wrap items-center justify-center text-base">
          <a href="#_" className="mr-5 font-medium hover:text-gray-900">
            {dict.component.header.menu.home}
          </a>
          <a href="#_" className="mr-5 font-medium hover:text-gray-900">
            {dict.component.header.menu.about}
          </a>
          <a href="#_" className="font-medium hover:text-gray-900">
            {dict.component.header.menu.contact}
          </a>
        </nav>

        <div className="md:hidden relative items-center inline-block text-center">
          <div>
            <button
              onClick={handleToggleDropdownMenu}
              type="button"
              className="inline-flex w-fit justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
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
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm"
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
          <button type="button">
            <PiSunBold className="w-6 h-6 text-gray-900" />
          </button>

          <div className="relative inline-block text-center items-center">
            <div>
              <button
                type="button"
                onClick={handleToggleDropdownLanguage}
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
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
              <div
                className="absolute right-0 z-10 mt-2 w-28 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    Edit
                  </a>
                </div>
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    Archive
                  </a>
                </div>
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-4"
                  >
                    Share
                  </a>
                </div>
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-6"
                  >
                    Delete
                  </a>
                </div>
              </div>
            )}
          </div>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
