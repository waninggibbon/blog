import {
  type IconType,
  SiAstro,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiVite,
  SiWebpack,
  SiTailwindcss,
  SiTypescript,
  SiAmazonwebservices,
  SiOpenjdk,
  SiSpring,
  SiBlender,
  SiAseprite,
  SiAmazongames,
  SiAdobecreativecloud,
  SiExpo,
  SiUnrealengine,
  SiCplusplus,
  SiExpress,
  SiDotnetHex,
  SiDotnet,
  SiSharp,
  SiPython,
  SiUnity,
} from "@icons-pack/react-simple-icons";

import { TooltipProvider } from "@/components/ui/tooltip";
import {
  SmartTooltip,
  SmartTooltipContent,
  SmartTooltipTrigger,
  TouchProvider,
} from "./ui/smart-tooltip";

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: "Languages",
      skills: [
        { skill: "html", icon: SiHtml5 },
        { skill: "css", icon: SiCss3 },
        { skill: "javascript", icon: SiJavascript },
        { skill: "typescript", icon: SiTypescript },
        { skill: "c#", icon: SiSharp },
        { skill: "Python", icon: SiPython },
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
        { skill: "tailwind", icon: SiTailwindcss },
        { skill: "webpack", icon: SiWebpack },
        { skill: "astro", icon: SiAstro },
        { skill: "vite", icon: SiVite },
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
          skill: "unity",
          icon: SiUnity,
        },
        {
          skill: "docker",
          icon: SiDocker,
        },
      ],
    },
  ];

export const Skills = () => {
  return (
    <TouchProvider>
      <div className="mb-16">
        <h2 className="mb-8 text-xl font-heading sm:text-2xl">Skills</h2>

        {SKILLS.map((item, id) => {
          return (
            <div key={id}>
              <h3 className="mb-4 text-lg font-heading sm:text-xl">
                {item.field}
              </h3>

              <div className="mb-10 flex flex-wrap gap-5">
                {item.skills.map((skill, id) => {
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
