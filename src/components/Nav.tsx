"use client";

import type { ReactNode } from "react";
import { ThemeToggler } from "./ThemeToggler";
import { BriefcaseBusiness, Gamepad2, ScrollText } from "lucide-react";

type Props = {
  pathName: string;
};

const NavLink = ({
  activePath,
  path,
  children,
}: {
  activePath: string;
  path: string;
  children: ReactNode;
}) => {
  const classMod =
    activePath === path ? "bg-text text-darkText" : "bg-transparent text-text";

  return (
    <a
      className={["text-center sm:p-4 p-2 w-full rounded-base", classMod].join(
        " "
      )}
      href={path}
      data-astro-prefetch
    >
      {children}
    </a>
  );
};

export const Nav = ({ pathName }: Props) => {
  return (
    <nav className="text-text flex flex-col sm:w-[300px] w-full bg-main dark:bg-darkMain font-base gap-2 justify-between font-pixel text-xl sm:p-0 px-10">
      <ul className="text-text flex sm:flex-col flex-row gap-5">
        <NavLink path="/" activePath={pathName}>
          <div className="flex flex-row gap-2 justify-center">
            <Gamepad2 />
            <span>HOME</span>
          </div>
        </NavLink>
        <NavLink path="/blog" activePath={pathName}>
          <div className="flex flex-row gap-2 justify-center">
            <ScrollText />
            <span>BLOG</span>
          </div>
        </NavLink>
        <NavLink path="/work" activePath={pathName}>
          <div className="flex flex-row gap-2 justify-center">
            <BriefcaseBusiness />
            <span>WORK</span>
          </div>
        </NavLink>
      </ul>

      <ThemeToggler />
    </nav>
  );
};
