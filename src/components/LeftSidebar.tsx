"use client";
import React, { useEffect, useState } from "react";
import { Category } from "@/models/Category";
import { usePathname } from "next/navigation";
import { getLocaleFunction } from "@/utils/getLocaleFunction";
import { useDictionary } from "@/providers/dictionary-provider";

const LeftSidebar = () => {
  const locale: string = getLocaleFunction(usePathname())();
  const [categories, setCategories] = useState<Category[]>([]);
  const dictionary = useDictionary();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://localhost:7185/api/Category");
      const categories = await res.json();
      return categories as Category[];
    };
    fetchData().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div>
      <div id="leftSidebar" className="hidden lg:block">
        <aside className="w-fit text-gray-700 fixed top-[81.5px] left-0 z-20 h-screen transition-transform bg-[#F3F9FF]/95 border-gray-300 border-r-2 dark:border-gray-600/30 dark:bg-[#0d1017]/95 dark:text-gray-300">
          <div className="h-full w-full px-3 mr-14">
            <button className="w-full justify-between flex p-2 my-2 text-gray-900 rounded-md dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700">
              <span className="text-xl font-semibold text-black whitespace-nowrap dark:text-white">
                {dictionary.component.leftSidebar.categories}
              </span>

              <div className="pl-10 text-black dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </button>

            <ul className="space-y-2 font-medium">
              {categories &&
                categories.map((category: Category) => (
                  <li key={category.id}>
                    <a
                      href={`/category/${category.id}`}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700 group left-group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                      {locale === "en" ? (
                        <span className="ml-4">{category.name}</span>
                      ) : (
                        <span className="ml-4">{category.skName}</span>
                      )}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default LeftSidebar;
