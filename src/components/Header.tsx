"use client";
import { useState } from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useDictionary } from "@/providers/dictionary-provider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

const Header = () => {
  const dictionary = useDictionary();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownMenuOpen, setIsDropDownMenuOpen] = useState(false);

  const handleToggleDropdownMenu = () => {
    setIsDropDownMenuOpen(!isDropdownMenuOpen);
  };

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen) {
      document.getElementById("leftSidebar")!.classList.remove("hidden");
    } else {
      document.getElementById("leftSidebar")!.classList.add("hidden");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20 h-[81.5px] items-center flex text-gray-700 bg-[#F3F9FF]/95 border-b-2 border-gray-300 dark:border-gray-600/30 dark:bg-[#0d1017]/95 dark:text-gray-300">
      <div className="container grid items-center grid-cols-3 auto-cols-fr px-4 h-full mx-auto">
        <div className="flex justify-start gap-2 items-center">
          <button
            id="left-sidebar-button"
            type="button"
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center h-fit p-2 ml-3 text-sm rounded-lg focus:outline-none text-gray-700 dark:text-gray-300 hover:bg-gray-400/30 dark:hover:bg-gray-600/30"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <Link href={"/"} className="font-medium title-font">
            <h1 className="lg:text-2xl text-xl font-bold hover:bg-gray-400/30 rounded-md px-3 py-2 dark:hover:bg-gray-600/30">
              <span className="hidden sm:inline">
                {dictionary.component.header.title}
              </span>
            </h1>
          </Link>
        </div>
        <>
          <nav className="hidden lg:flex flex-wrap items-center justify-center gap-2 lg:gap-4">
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

          <div className="lg:hidden relative items-center inline-block text-center">
            <div>
              <button
                onClick={handleToggleDropdownMenu}
                type="button"
                className="custom-dropdown"
              >
                <span className="hidden sm:inline">Menu</span>
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
        </>

        <div className="items-center justify-end flex gap-6">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
