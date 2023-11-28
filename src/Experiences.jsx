import React from "react";
import Experience from "./components/Experience";
import Needl from "./assets/images/xp/needl.jpeg";
import Block from "./assets/images/xp/9thblock.jpeg";
import Ignitus from "./assets/images/xp/ignitus.jpeg";
import IITBh from "./assets/images/xp/iitbhi.jpeg";

function Experiences() {
  return (
    <div className="card w-full grow flex flex-col justify-between">
      <div className="text-2xl text-left font-semibold pb-4 dark:text-white">
        Experiences
      </div>
      <Experience
        img={Needl}
        role="Software Developer"
        company="Needl.AI"
        duration="Jun 2022 - Present"
      >
        <ol class="list-decimal">
          <li>
            Integrated and configured a feature flagging and experimentation
            platform, optimizing feature release processes and enabling
            controlled feature roll-outs. Improved stability and flexibility in
            product iterations.
          </li>
          <li>
            Implemented various data previews enhancing user experience by
            providing dynamic and intuitive interface options. Leveraged
            expertise in React JS hooks, dynamic css, context API and other
            frontend tools to create versatile and visually appealing views,
            catering to varying user preferences and requirements.{" "}
          </li>
          <li>
            Updated user events throughout the application to meet revamped
            tracking requirements, ensuring comprehensive tracking and analysis
            of user interactions.
          </li>
          <li>
            Spearheaded the integration of the third party payment system to to
            streamline transaction processes. This integration involved
            collaborating with cross-functional teams, overseeing design &
            implementation phases, and conducting thorough testing to guarantee
            a smooth and efficient payment flow for our customers.
          </li>
        </ol>
      </Experience>
      <hr />
      <Experience
        img={Needl}
        role="SDE Intern"
        company="Needl.AI"
        duration="May 2021 - Jul 2021"
      >
        <ol class="list-decimal">
          <li>
            Effectively migrated the JavaScript-based Authentication component
            library to a new Typescript-driven UI. This significantly enhanced
            the app’s design system, streamlining code and simplifying
            development for our team.
          </li>
          <li>
            Migrated and implemented necessary tests for components and pages to
            enhance the stability and reliability of the application.
          </li>
        </ol>
      </Experience>
      <hr />
      <Experience
        img={Block}
        role="Full Stack developer"
        company="9th Block"
        duration="Dec 2020 - Mar 2021"
      >
        <ol class="list-decimal">
          <li>
            Developed intuitive web interfaces using ReactJS (TypeScript) from
            mockups, optimizing for performance and optimized components for
            peak performance across various devices.
          </li>
          <li>
            Integrated RESTful APIs to facilitate seamless functionality and
            data exchange. Additionally, implemented robust security measures
            through JSON Web Tokens (JWT) for user authentication and
            authorization.
          </li>
        </ol>
      </Experience>
      <hr />
      <Experience
        img={Ignitus}
        role="SDE Intern"
        company="Ignitus"
        duration="Apr 2020 - Jun 2020"
      >
        <ol class="list-decimal">
          <li>
            Created custom React Js reusable design components for existing
            websites and applications.
          </li>
          <li>Assisted in troubleshooting issues on web-based systems.</li>
          <li>
            Created prototypes and experimented with new technologies and
            features as assigned.
          </li>
        </ol>
      </Experience>
      <hr />
      <Experience
        img={IITBh}
        role="General Secretary of Cultural and Media Affairs"
        company="IIT Bhilai"
        duration="Apr 2019 - Apr 2020"
      />
    </div>
  );
}

export default Experiences;
