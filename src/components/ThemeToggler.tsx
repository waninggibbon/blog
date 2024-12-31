import {
  MonitorCog,
  Palette,
  LogOut,
  Moon,
  Settings,
  Shuffle,
  Sun,
  Wrench,
} from "lucide-react";

import config from "@/config";
import { Button } from "./ui/button";
import { useState } from "react";

type Mode = "dark" | "light";

export const ThemeToggler = () => {
  const [theme, setTheme] = useState<Mode>(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newTheme);
    document.documentElement.setAttribute("data-theme", config.modes[newTheme]);

    document.documentElement.classList[newTheme === "dark" ? "add" : "remove"](
      "dark"
    );

    setTheme(newTheme);
  };

  return (
    <Button className="w-max mx-auto" onClick={() => toggleTheme()}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
};
