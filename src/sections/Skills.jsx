import React from "react";
import Skill from "../components/Skill";

const Skills = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="card w-full flex flex-col gap-y-6">
        <Skill
          title="Programming Languages"
          skills={["TypeScript", "Javascript", "Python"]}
        />
        <Skill
          title="Frontend Technologies"
          skills={[
            "React.js",
            "Material UI",
            "emotion",
            "styled-components",
            "TailwindCSS",
            "CSS",
            "HTML",
            "React Native",
            "Expo",
            "NextJS",
            "Redux",
            "Redux Saga",
            "React Query",
            "React Router",
            "Formik",
            "RTL(React testing Library)",
            "Vitest",
          ]}
        />
        <Skill
          title="Backend Technologies & Databases"
          skills={[
            "Express.js",
            "Node.js",
            "Sequelize ORM",
            "Jest",
            "RESTful APIs",
            "JWT",
            "PostgreSQL",
            "Firebase",
          ]}
        />
        <Skill title="Others" skills={["git", "Github", "Docker"]} />
      </div>
    </div>
  );
};

export default Skills;
