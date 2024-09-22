import { Moon, Sun } from "lucide-react";
import config from "@/config";

export const ThemeToggler = () => {
  const handleToggleClick = () => {
    const element = document.documentElement;
    element.classList.toggle("dark");

    const isDark = element.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    element.setAttribute(
      "data-theme",
      config.themes[isDark ? "dark" : "light"]
    );
  };

  return (
    <>
      <button onClick={handleToggleClick}>
        <Sun className="m500:h-4 m500:w-4 stroke-text hidden h-6 w-6 dark:inline" />
        <Moon className="m500:h-4 m500:w-4 stroke-text inline h-6 w-6 dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  );
};
