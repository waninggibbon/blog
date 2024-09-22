import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Sun className="m500:h-4 m500:w-4 stroke-text hidden h-6 w-6 dark:inline" />
        <Moon className="m500:h-4 m500:w-4 stroke-text inline h-6 w-6 dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  );
};
