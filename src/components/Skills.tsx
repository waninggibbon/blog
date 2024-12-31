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
  SiOpenjdk,
  SiExpress,
  SiSpring,
  SiLinux,
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
        { skill: "javascript", icon: SiJavascript },
        { skill: "typescript", icon: SiTypescript },
        { skill: "java", icon: SiOpenjdk },
        {
          skill: "postgresql",
          icon: SiPostgresql,
        },
        { skill: "html", icon: SiHtml5 },
        { skill: "css", icon: SiCss3 },
      ],
    },
    {
      field: "Technologies",
      skills: [
        { skill: "react", icon: SiReact },
        { skill: "webpack", icon: SiWebpack },
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
          skill: "linux",
          icon: SiLinux,
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
