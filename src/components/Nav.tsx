"use client";

import clsx from "clsx";
import { SiteSettings } from "./SiteSettings";

type Props = {
  pathName: string;
};

export const Nav = ({ pathName }: Props) => {
  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/blog",
      text: "Blog",
    },
    {
      path: "/work",
      text: "Work",
    },
  ];

  return (
    <div className="fixed left-0 top-5 z-50 w-full">
      <nav className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex w-max gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4">
        {links.map((link) => {
          return (
            <a
              key={link.path}
              className={clsx(
                "hover:border-border dark:hover:border-darkBorder rounded-base border-2 px-2 py-1 transition-colors",
                pathName === link.path || pathName === link.path + "/"
                  ? "border-border dark:border-darkBorder"
                  : "border-transparent"
              )}
              href={link.path}
            >
              {link.text}
            </a>
          );
        })}
        <SiteSettings />
      </nav>
    </div>
  );
};
