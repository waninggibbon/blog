import {
  type IconType,
  SiAstro,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiWebpack,
  SiTailwindcss,
  SiTypescript,
  SiAmazonwebservices,
  SiUnity,
  SiExpress,
  SiSpring,
} from "@icons-pack/react-simple-icons";

import { TooltipProvider } from "@/components/ui/tooltip";
import {
  SmartTooltip,
  SmartTooltipContent,
  SmartTooltipTrigger,
  TouchProvider,
} from "./ui/smart-tooltip";
import { forwardRef } from "react";

const SiCSharp: IconType = forwardRef(function (
  { title = "C#", color = "currentColor", size = 24, ...props },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="currentColor"
      ref={ref}
      {...props}
    >
      <title>{title}</title>
      <path d="M 25 2 C 24.285156 2 23.574219 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.808594 12.726563 4 14.074219 4 15.535156 L 4 34.464844 C 4 35.929688 4.808594 37.277344 6.089844 38 L 22.933594 47.460938 C 24.214844 48.183594 25.785156 48.183594 27.066406 47.460938 L 43.910156 38 C 45.195313 37.277344 46 35.925781 46 34.464844 L 46 15.535156 C 46 14.074219 45.191406 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.425781 2.179688 25.714844 2 25 2 Z M 25 4 C 25.375 4 25.753906 4.09375 26.089844 4.28125 L 42.933594 13.746094 C 43.601563 14.125 44 14.804688 44 15.535156 L 44 34.464844 C 44 35.195313 43.601563 35.875 42.929688 36.253906 L 26.089844 45.71875 C 25.417969 46.09375 24.582031 46.09375 23.910156 45.71875 L 7.070313 36.253906 C 6.398438 35.875 6 35.199219 6 34.464844 L 6 15.535156 C 6 14.804688 6.398438 14.125 7.070313 13.746094 L 23.910156 4.28125 C 24.246094 4.09375 24.625 4 25 4 Z M 25 12 C 17.839844 12 12 17.839844 12 25 C 12 32.160156 17.839844 38 25 38 C 29.089844 38 32.886719 36.09375 35.339844 32.863281 L 36.023438 31.960938 L 29.96875 28.453125 L 29.421875 29.046875 C 28.292969 30.28125 26.691406 31 25 31 C 21.683594 31 19 28.316406 19 25 C 19 21.683594 21.683594 19 25 19 C 26.691406 19 28.292969 19.71875 29.421875 20.953125 L 29.96875 21.546875 L 36.023438 18.039063 L 35.339844 17.136719 C 32.886719 13.90625 29.089844 12 25 12 Z M 25 14 C 28.074219 14 30.886719 15.316406 32.945313 17.511719 L 30.203125 19.097656 C 28.757813 17.832031 26.960938 17 25 17 C 20.597656 17 17 20.597656 17 25 C 17 29.402344 20.597656 33 25 33 C 26.960938 33 28.757813 32.167969 30.203125 30.902344 L 32.945313 32.488281 C 30.886719 34.683594 28.074219 36 25 36 C 18.925781 36 14 31.074219 14 25 C 14 18.925781 18.925781 14 25 14 Z M 35 20 L 35 22 L 33 22 L 33 24 L 35 24 L 35 26 L 33 26 L 33 28 L 35 28 L 35 30 L 37 30 L 37 28 L 39 28 L 39 30 L 41 30 L 41 28 L 43 28 L 43 26 L 41 26 L 41 24 L 43 24 L 43 22 L 41 22 L 41 20 L 39 20 L 39 22 L 37 22 L 37 20 Z M 37 24 L 39 24 L 39 26 L 37 26 Z"></path>
    </svg>
  );
});

<svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="100"
  height="100"
  viewBox="0 0 50 50"
></svg>;

const SiJava: IconType = forwardRef(function (
  { title = "C#", color = "currentColor", size = 24, ...props },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="currentColor"
      ref={ref}
      {...props}
    >
      <title>{title}</title>
      <path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"></path>
    </svg>
  );
});

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: "Languages",
      skills: [
        { skill: "javascript", icon: SiJavascript },
        { skill: "typescript", icon: SiTypescript },
        { skill: "c#", icon: SiCSharp },
        { skill: "java", icon: SiJava },
        { skill: "html", icon: SiHtml5 },
        { skill: "css", icon: SiCss3 },
        {
          skill: "postgresql",
          icon: SiPostgresql,
        },
      ],
    },
    {
      field: "Technologies",
      skills: [
        { skill: "react", icon: SiReact },
        { skill: "webpack", icon: SiWebpack },
        { skill: "unity", icon: SiUnity },
        { skill: "astro", icon: SiAstro },
        { skill: "spring", icon: SiSpring },
        {
          skill: "nodejs",
          icon: SiNodedotjs,
        },

        {
          skill: "aws",
          icon: SiAmazonwebservices,
        },
        {
          skill: "express.js",
          icon: SiExpress,
        },

        {
          skill: "docker",
          icon: SiDocker,
        },
        {
          skill: "tailwind",
          icon: SiTailwindcss,
        },
      ],
    },
  ];

export const Skills = () => {
  return (
    <TouchProvider>
      <div className="mb-16">
        <h2 className="mb-8 text-xl font-heading font-pixel sm:text-2xl">
          Skills
        </h2>

        {SKILLS.map((item, id) => {
          return (
            <div key={id}>
              <h3 className="mb-4 text-lg font-heading sm:text-xl">
                {item.field}
              </h3>

              <div className="mb-10 flex flex-wrap gap-5">
                {item.skills.map((skill, id) => {
                  console.log(skill);
                  return (
                    <TooltipProvider key={id}>
                      <SmartTooltip>
                        <SmartTooltipTrigger asChild>
                          <skill.icon className="h-8 w-8" title="" />
                        </SmartTooltipTrigger>
                        <SmartTooltipContent>{skill.skill}</SmartTooltipContent>
                      </SmartTooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </TouchProvider>
  );
};
