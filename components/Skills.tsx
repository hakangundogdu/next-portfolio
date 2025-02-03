import React from "react";

const skills = [
  "React",
  "NextJS",
  "TypeScript",
  "Node",
  "Angular",
  "JavaScript",
  "Python",
  "Java",
  "Redux",
  "Zustand",
  "MongoDB",
  "Supabase",
  "Firebase",
  "TailwindCSS",
  "Shadcn UI",
  "Material UI",
  "React Query",
  "AG Grid",
  "REST API",
  "GraphQL",
  "Agile",
  "Scrum",
  "Git",
];

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" inline-flex items-center bg-slate-100 text-slate-500 0 py-2 px-3  hover:bg-slate-700 hover:text-white rounded-xl text-base  mt-4 md:mt-0 hover:shadow-xl ">
      {children}
    </div>
  );
};

const Skills = () => {
  return (
    <div
      className={"flex flex-wrap justify-start gap-3 max-w-2xl animate-fade "}
    >
      {skills.map((skill) => (
        <Tag key={skill}>{skill}</Tag>
      ))}
    </div>
  );
};

export default Skills;
