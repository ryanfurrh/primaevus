"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1 text-[10px] w-fit text-sand-600 dark:text-pale-100 md:text-sm bg-stone-50 dark:bg-ink-900">
      <h1
        className={theme === "light" ? "opacity-100 font-medium" : "opacity-40"}
      >
        Light
      </h1>
      <div className="flex flex-col w-fit border-stone-400 border-1 p-1 rounded-[2px] gap-2 sm:gap-3">
        <button
          className={
            theme === "light"
              ? "w-4 h-2 sm:w-6 sm:h-3 bg-stone-400 rounded-[2px] after:translate-y-6 transition-all duration-300"
              : "w-4 h-2 sm:w-6 sm:h-3 bg-transparent rounded-[2px] hover:border-1 hover:border-pale-100 after:-translate-y-6 transition-all duration-300"
          }
          onClick={() => setTheme("light")}
        ></button>
        <button
          className={
            theme === "dark"
              ? "w-4 h-2 sm:w-6 sm:h-3 bg-stone-400 rounded-[2px] after:-translate-y-6 transition-all duration-300"
              : "w-4 h-2 sm:w-6 sm:h-3 bg-transparent rounded-[2px] hover:border-1 hover:border-stone-300 after:-translate-y-6 transition-all duration-300"
          }
          onClick={() => setTheme("dark")}
        ></button>
      </div>

      <h1
        className={theme === "dark" ? "opacity-100 font-medium" : "opacity-40"}
      >
        Dark
      </h1>
    </div>
  );
};

export default ThemeSwitcher;
