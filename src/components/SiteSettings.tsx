import {
  CircleHelp,
  MonitorCog,
  Palette,
  Eclipse,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Moon,
  Plus,
  PlusCircle,
  Settings,
  Shuffle,
  Sun,
  User,
  UserPlus,
  Users,
  Wrench,
} from "lucide-react";

import { useState, useEffect } from "react";

//set primary color in css variables set by class

import config from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const SiteSettings = () => {
  const handleModeSelection = (mode: "dark" | "light" | "system") => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    localStorage.setItem("mode", mode);
    document.documentElement.setAttribute(
      "data-mode",
      config.modes[mode === "system" ? preference : mode]
    );

    document.documentElement.classList[
      mode === "dark"
        ? "add"
        : mode === "light"
          ? "remove"
          : preference === "dark"
            ? "add"
            : "remove"
    ]("dark");
  };

  const handleThemeSelection = (theme: string) => {
    const prev = localStorage.getItem("theme") ?? config.theme;
    if (theme !== "random") {
      localStorage.setItem("theme", theme);

      document.documentElement.classList.add(theme);
      document.documentElement.classList.remove(prev);
      return;
    }

    const themes = [
      "barbarian",
      "paladin",
      "goblin",
      "necromancer",
      "tiefling",
    ].filter((theme) => theme != prev);

    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    localStorage.setItem("theme", randomTheme);
    document.documentElement.classList.add(randomTheme);
    document.documentElement.classList.remove(prev);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Settings className="m500:h-4 m500:w-4 stroke-text h-6 w-6 align-middle" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Site settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <MonitorCog className="mr-2 h-4 w-4" />
              <span>Display</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => handleModeSelection("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleModeSelection("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleModeSelection("system")}>
                  <Wrench className="mr-2 h-4 w-4" />
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Palette className="mr-2 h-4 w-4" />
              <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onClick={() => handleThemeSelection("goblin")}
                >
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-goblin rounded-full" />
                  <span>Goblin</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeSelection("paladin")}
                >
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-paladin rounded-full" />
                  <span>Paladin</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeSelection("necromancer")}
                >
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-necromancer rounded-full" />
                  <span>Necromancer</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeSelection("tiefling")}
                >
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-tiefling rounded-full" />
                  <span>Tiefling</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeSelection("barbarian")}
                >
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-barbarian rounded-full" />
                  <span>Barbarian</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    handleThemeSelection("random");
                  }}
                >
                  <Shuffle className="mr-2 h-4 w-4" />
                  <span>Random</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Close</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
