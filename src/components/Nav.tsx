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
      className={["text-center sm:p-4 p-2 w-full rounded-base", classMod].join(
        " "
      )}
    >
      <a href={path} data-astro-prefetch>
        <div
          className={[
            "flex flex-row gap-2 justify-center ",
            isActivePath ? "bg-darkBg" : "bg-main dark:bg-darkMain",
          ].join(" ")}
        >
          {icon}
          <span>{text}</span>
        </div>
      </a>
    </li>
  );
};

export const Nav = ({ pathName }: Props) => {
  return (
    <div className="text-text flex flex-col w-full sm:h-full font-heading gap-2 justify-between font-pixel text-xl sm:p-0 px-10 transition-none">
      <ul className="text-text flex sm:flex-col flex-row gap-5">
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

      <ThemeToggler />
    </div>
  );
};
