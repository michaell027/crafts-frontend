"use client";
import { PiMoonBold, PiSunBold } from "react-icons/pi";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.documentElement.classList.add(theme);
  }, [theme]);
  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <button type="button" onClick={handleToggleTheme}>
        {theme === "light" ? (
          <PiMoonBold className="w-6 h-6 text-gray-900 dark:text-gray-100" />
        ) : (
          <PiSunBold className="w-6 h-6 text-gray-900 dark:text-gray-100" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitcher;
