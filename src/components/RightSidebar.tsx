"use client";
import { useEffect, useState } from "react";
import { useDictionary } from "@/providers/dictionary-provider";

const RightSidebar = () => {
  const [showMaxiSidebar, setShowMaxiSidebar] = useState<boolean>(false);
  const dictionary = useDictionary();

  const handleMouseEnter = () => {
    setShowMaxiSidebar(true);
  };

  const handleMouseLeave = () => {
    setShowMaxiSidebar(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const miniSidebar = document.getElementById("mini-right-sidebar");
      const maxiSidebar = document.getElementById("maxi-right-sidebar");
      if (window.innerWidth >= 1023 && miniSidebar && maxiSidebar) {
        miniSidebar.classList.add("hidden");
        maxiSidebar.classList.remove("hidden");
      } else if (window.innerWidth < 1023 && miniSidebar && maxiSidebar) {
        miniSidebar.classList.remove("hidden");
        maxiSidebar.classList.add("hidden");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        id="maxi-right-sidebar"
        className={`sidebar ${showMaxiSidebar ? "" : "hidden"}`}
        onMouseLeave={handleMouseLeave}
      >
        <aside
          className="fixed top-[81.5px] right-0 z-10 w-64 h-screen text-gray-700 transition-transform bg-[#F3F9FF]/95 border-gray-300 border-l-2 dark:border-gray-600/30 dark:bg-[#0d1017]/95 dark:text-gray-300"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium flex flex-col items-center justify-center">
              <li className="flex flex-col justify-center items-center">
                <p className="text-center">
                  {dictionary.component.rightSidebar.craftsman}
                </p>
                <p className="text-center">
                  {dictionary.component.rightSidebar.craftsmanDesc}
                </p>
                <button className="flex items-center p-2 mt-4 my-2 bg-green-500 dark:bg-green-800 text-gray-100 rounded-lg dark:text-white hover:bg-green-600 dark:hover:bg-green-900 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {dictionary.component.rightSidebar.join}
                  </span>
                </button>
              </li>
              <div className="divider before:bg-black/20 after:bg-black/20"></div>
              <li className="flex flex-col justify-center items-center text-black dark:text-gray-400">
                <p className="text-center">
                  {dictionary.component.rightSidebar.client}
                </p>
                <p className="text-center">
                  {dictionary.component.rightSidebar.clientDesc}
                </p>

                <button className="flex items-center p-2 mt-4 my-2 bg-green-500 dark:bg-green-800 text-gray-100 rounded-lg dark:text-white hover:bg-green-600 dark:hover:bg-green-900 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-fill-add"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {dictionary.component.rightSidebar.register}
                  </span>
                </button>
              </li>

              <div className="divider before:bg-black/20 after:bg-black/20"></div>

              <div className="fixed bottom-0 flex flex-col items-center justify-center text-black dark:text-gray-400">
                <p className="text-center text-sm">
                  {dictionary.component.rightSidebar.loginDesc}
                </p>
                <li className="end-0">
                  <button
                    onClick={() => (window.location.href = "/login")}
                    className=" flex items-center p-2 my-4 bg-green-500 dark:bg-green-800 text-gray-100 rounded-lg dark:text-white hover:bg-green-600 dark:hover:bg-green-900 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-in-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                      />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {dictionary.component.rightSidebar.login}
                    </span>
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </aside>
      </div>
      <div
        id="mini-right-sidebar"
        className={`mini-right-sidebar ${showMaxiSidebar ? "hidden" : ""}`}
        onMouseEnter={handleMouseEnter}
      >
        <aside
          className="fixed top-[81.5px] right-0 z-20 w-16 h-screen"
          aria-label="Sidebar"
        >
          <div className="h-full w-full  px-3 py-4 overflow-y-auto bg-[#F3F9FF]/95 border-gray-300 border-l-2 dark:border-gray-600/30 dark:bg-[#0d1017]/95 dark:text-gray-300">
            <ul className="space-y-2 font-medium w-full">
              <li>
                <button className="flex items-center justify-center p-2 rounded-lg dark hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 animated"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default RightSidebar;
