const EDUCATION: {
  school: string;
  degree: string;
  GPA: string;
  startDate: string;
  endDate: string;
}[] = [
  {
    school: "Arizona State University",
    degree: "MS - Computer Science",
    GPA: "3.61",
    startDate: "Jan 2021",
    endDate: "December 2022",
  },
  {
    school: "Arizona State University",
    degree: "BA - Philosophy",
    GPA: "3.90",
    startDate: "August 2017",
    endDate: "December 2020",
  },
];

export const Education = () => {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Education</h2>

      {EDUCATION.map((edu, id) => {
        return (
          <div className="mb-8" key={id}>
            <h3 className="text-lg font-heading sm:text-xl">
              {edu.degree} from {edu.school}
            </h3>

            <p className="mb-4 mt-0.5 text-sm">
              {edu.startDate} - {edu.endDate} | {edu.GPA} GPA
            </p>
          </div>
        );
      })}
    </div>
  );
};
