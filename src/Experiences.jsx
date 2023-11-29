import React from "react";
import Experience from "./components/Experience";
import { experiences } from "./consts/experiences";

function Experiences() {
  return (
    <div className="card w-full grow flex flex-col justify-between">
      <div className="text-2xl text-left font-semibold pb-4 dark:text-white">
        Experiences
      </div>
      {experiences.map(experience => (
        <>
          <Experience
            img={experience.img}
            role={experience.role}
            company={experience.company}
            duration={experience.duration}
            tasks={experience.tasks}
          />
          <hr />
        </>
      ))}
    </div>
  );
}

export default Experiences;
