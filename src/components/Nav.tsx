"use client";

import { useState, type ReactNode } from "react";
import { ThemeToggler } from "./ThemeToggler";
import {
  ArrowDownFromLine,
  ArrowLeftFromLine,
  ArrowRightFromLine,
  ArrowUpFromLine,
  BriefcaseBusiness,
  Gamepad2,
  ScrollText,
} from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  pathName: string;
};

const NavLink = ({
  activePath,
  path,
  icon,
  text,
}: {
  activePath: string;
  path: string;
  icon: ReactNode;
  text: ReactNode;
}) => {
  const isActivePath = activePath === path || activePath === path + "/";
  const classMod = isActivePath ? "bg-darkBg text-darkText" : "text-text";

  return (
    <li
      className={["text-center sm:p-4 p-2 w-full rounded-base ", classMod].join(
        " "
      )}
    >
      <a href={path} data-astro-prefetch>
        <div
          className={[
            "flex flex-row gap-2 justify-center items-center",
            isActivePath
              ? "bg-darkBg"
              : "bg-main dark:bg-darkMain transition-colors",
          ].join(" ")}
        >
          <span className="hidden sm:block">{icon}</span>
          <span>{text}</span>
        </div>
      </a>
    </li>
  );
};

const NavToggler = ({
  isExpanded,
  setIsExpanded,
}: {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Button
      onClick={() => setIsExpanded((prev) => !prev)}
      name="nav-toggler"
      id="navToggler"
      aria-label="toggle-nav"
    >
      {isExpanded ? (
        <>
          <ArrowLeftFromLine className="hidden sm:block" />
          <ArrowDownFromLine className="sm:hidden block" />
        </>
      ) : (
        <>
          <ArrowRightFromLine className="hidden sm:block" />
          <ArrowUpFromLine className="sm:hidden block" />
        </>
      )}
    </Button>
  );
};

export const Nav = ({ pathName }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  return (
    <div
      className="text-text flex flex-col sm:h-full font-heading gap-4 justify-between font-pixel text-xl sm:p-0 px-10
                ease-out"
    >
      <ul
        className={`text-text flex sm:flex-col flex-row gap-5 transition-all ease-in-out duration-500 ${isExpanded ? "sm:w-[250px] h-[40px]" : "sm:w-0 opacity-0 h-0"}`}
      >
        <NavLink
          path="/"
          activePath={pathName}
          icon={<Gamepad2 />}
          text="HOME"
        />
        <NavLink
          path="/blog"
          activePath={pathName}
          icon={<ScrollText />}
          text="BLOG"
        />

        <NavLink
          path="/work"
          activePath={pathName}
          icon={<BriefcaseBusiness />}
          text="RESUME"
        />
      </ul>
      <div className="flex flex-row sm:flex-col gap-2 items-center justify-center">
        <NavToggler isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <ThemeToggler />
      </div>
    </div>
  );
};
