const EXPERIENCES: {
  company: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
}[] = [
  {
    company: "Amazon",
    role: "Frontend Engineer II",
    description:
      "Currently working on LEGO, the Amazon internal content management system powering hundreds of sites.",
    startDate: "June 2024",
    endDate: "Now",
  },
  {
    company: "Amazon Web Services",
    role: "Frontend Engineer I & II",
    description:
      "Worked on the Amazon CodeCatalyst's web platform team to provide seamless integration and support for micro-frontend applications.",
    startDate: "May 2022",
    endDate: "June 2024",
  },
  {
    company: "Hawaiian Airlines",
    role: "Associate Software Development Engineer",
    description:
      "Worked on the web team, building the shopping and booking applications.",
    startDate: "June 2021",
    endDate: "May 2022",
  },
];

export const Experience = () => {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>

      {EXPERIENCES.map((role, id) => {
        return (
          <div className="mb-8" key={id}>
            <h3 className="text-lg font-heading sm:text-xl">
              {role.role} @ {role.company}
            </h3>

            <p className="mb-4 mt-0.5 text-sm">
              {role.startDate} - {role.endDate}
            </p>
            <p>{role.description}</p>
          </div>
        );
      })}
    </div>
  );
};
