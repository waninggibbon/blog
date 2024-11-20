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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export const SiteSettings = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const handleModeSelection = (mode: "dark" | "light" | "system") => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    localStorage.setItem("mode", mode);
    document.documentElement.setAttribute(
      "data-theme",
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
    if (prev === theme) return;
    if (theme !== "random") {
      localStorage.setItem("theme", theme);

      document.documentElement.classList.add(theme);
      document.documentElement.classList.remove(prev);
      return;
    }

    const themes = [
      "squatch",
      "nesssie",
      "goblin",
      "mothman",
      "chupacabra",
    ].filter((theme) => theme != prev);

    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    localStorage.setItem("theme", randomTheme);
    document.documentElement.classList.add(randomTheme);
    document.documentElement.classList.remove(prev);
  };

  return (
    <DropdownMenu
      open={dropDownOpen}
      onOpenChange={(isOpen) => setDropDownOpen(isOpen)}
    >
      <DropdownMenuTrigger
        asChild
        onClick={() => setDropDownOpen((prev) => !prev)}
      >
        <button aria-label="open settings">
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
                  onClick={() => handleThemeSelection("nesssie")}
                >
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-nesssie rounded-full" />
                  <span>Nesssie</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeSelection("mothman")}
                >
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-mothman rounded-full" />
                  <span>Mothman</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeSelection("chupacabra")}
                >
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-chupacabra rounded-full" />
                  <span>Chupacabra</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleThemeSelection("squatch")}
                >
                  <div className="mr-2 h-4 w-4 border-text border-2 bg-squatch rounded-full" />
                  <span>Squatch</span>
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
