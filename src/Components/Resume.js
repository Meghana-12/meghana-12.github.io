import React from "react";
import { ReactComponent as ReactSVG } from "../icons/react.svg";
import { ReactComponent as CPPSVG } from "../icons/c-plusplus.svg";
import { ReactComponent as CSSSVG } from "../icons/css-3.svg";
import { ReactComponent as FBSVG } from "../icons/firebase.svg";
import { ReactComponent as HTMLSVG } from "../icons/html-5.svg";
import { ReactComponent as JavascriptSVG } from "../icons/javascript.svg";
import { ReactComponent as NextJSSVG } from "../icons/nextjs.svg";
import { ReactComponent as NodeJSSVG } from "../icons/nodejs.svg";
import { ReactComponent as PythonSVG } from "../icons/python.svg";
import { ReactComponent as RouterSVG } from "../icons/react-router.svg";
import { ReactComponent as SagaSVG } from "../icons/redux-saga.svg";
import { ReactComponent as ReduxSVG } from "../icons/redux.svg";
import { ReactComponent as TWSVG } from "../icons/tailwindcss-icon.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
          <div>
            Activities and societies: <br />
            COO/CTO, Trinity ( Entrepreneurship Action Club ), Phase-1, 2021 |{" "}
            <br />
            General Secretary of Cultural and Media Affairs, Council of Student
            Affairs 19-20, IIT Bhilai |<br />
            Core Member, Google’s Developer Student Club, 20-21, Web
            Development, IIT Bhilai | <br />
            Mentor, OpenLake, 20-21, IIT Bhilai | <br />
            Contingent Leader, Cultural Meet 4.0, Dec 19, IIT Bombay | <br />
            Cultural Coordinator, Meraz 19 | <br />
            Cultural Meet 3.0, Vocalist, Dec 18, IIT Roorkee | <br />
            Inter IIT Sports Meet, Table Tennis, Dec 18, IIT Guwahati | <br />
            Volunteer, Meraz 18 | <br />
            Music & Dance Club | <br />
            Table Tennies | Badminton | NSO |
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <Tabs>
            <TabList>
              <Tab>SDE Intern, Needl.AI </Tab>
              <Tab>Frontend Intern, 9th Block Inc</Tab>
              <Tab>SDE Intern, Ignitus</Tab>
              <Tab>Gen Sec</Tab>
            </TabList>

            <TabPanel>
              <p>
                <h4>Software Development Engineering Intern,9th Block </h4>
                <h5> May 2021 - Present</h5>
                <div></div>
                ReactJs, Typescript, Styled-components, tailwind css, git,
                storybook,
              </p>
              <p>I'm currently working on the design components and Pages</p>
            </TabPanel>
            <TabPanel>
              <p>
                <h4>Software Development Engineering Intern,9th Block </h4>
                <h5> Dec 2020 - Mar 2021</h5>
                ReactJs(Hooks), Typescript, Router, Emotion (Dynamic CSS),
                Redux, Redux-saga, git, axios, JSON Web Token
                <ol>
                  <li>
                    Researching about the technologies and choose ones that best
                    suit the application needs and try to implement the best
                    code practices.
                  </li>
                  <li>
                    Developing new user-facing features using React.js, Emotion
                    CSS, Redux, Redux-saga.
                  </li>
                  <li>
                    Building reusable components and front-end libraries for
                    future use.
                  </li>
                  <li>
                    Translating designs and wireframes in high-quality code.
                  </li>
                  <li>
                    Optimizing components for maximum performance across a vast
                    array of web-capable devices and browsers.
                  </li>
                  <li> Integrating APIs for complete functionality.</li>
                  <li> Authentication using JSON Tokens.</li>
                  <li>Building interfaces to RESTful APIs.</li>
                </ol>
              </p>
            </TabPanel>
            <TabPanel>
              <p>
                <h4>Software Development Engineering Intern, Ignitus</h4>
                <h5> Mar 2020 - June 2020</h5>
                <p>
                  Tech Stack: ReactJs(Hooks), Typescript, Router, Emotion
                  (Dynamic CSS), git, Github. My responsibilities included:
                  <br />
                  1. Created custom React Js reusable design components for
                  existing websites and applications.
                  <br />
                  2. Assisted in troubleshooting issues on web-based systems.
                  <br />
                  3. Created prototypes and experimented with new technologies
                  and features as assigned.
                </p>
              </p>
            </TabPanel>
            <TabPanel>
              1. Managed the Cultural Council of CoSA, IIT Bhilai. Worked with
              the Council of Student Affairs and College Administration to
              ensure the council requirements were met. <br />
              2. Discussed, Scheduled, and Managed (including arranging the
              venue and logistics, budget) for Intra and Inter-college Cultural
              Events for the academic year.
              <br />
              3. Prepared Annual, event-wise budget for all cultural events and
              clubs and took necessary steps for its approval.
              <br />
              4. Acted as a Cultural Coordinator, Core Team, Meraz our
              Techno-Cultural Fest, IIT Bhilai. Responsibilities included
              conceptualizing fest, finalizing cultural events budget, ensuring
              student and volunteer participation for making the events
              successful, handling PR and publicity, smooth execution of the
              fest cultural events, etc.
              <br />
              5. Headed a team of 60+ participants of IIT Bhilai as Contingent
              Leader for Cultural Meet 4.0, IIT Bombay.
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <h3>Web dev</h3>
          <h5>Proficent</h5>
          <ReactSVG style={{ width: "3rem", height: "3rem", margin: "1rem" }} />
          <HTMLSVG style={{ width: "3rem", height: "3rem", margin: "1rem" }} />
          <JavascriptSVG
            style={{ width: "3rem", height: "3rem", margin: "1rem" }}
          />
          <CSSSVG style={{ width: "3rem", height: "3rem", margin: "1rem" }} />
          <h5>Familiar</h5>
          <FBSVG style={{ width: "3rem", height: "3rem", margin: "1rem" }} />
          <NextJSSVG
            style={{ width: "3rem", height: "3rem", margin: "1rem" }}
          />
          <NodeJSSVG
            style={{ width: "3rem", height: "3rem", margin: "1rem" }}
          />
          <RouterSVG
            style={{ width: "3rem", height: "3rem", margin: "1rem" }}
          />
          <SagaSVG style={{ width: "3rem", height: "3rem", margin: "1rem" }} />
          <TWSVG style={{ width: "3rem", height: "3rem", margin: "1rem" }} />
          <ReduxSVG style={{ width: "3rem", height: "3rem", margin: "1rem" }} />
          {/* styled-componets , material ui , emotion, jwt auth , vercel, */}
          <h3>Programming</h3>
          <CPPSVG style={{ width: "3rem", height: "3rem", margin: "1rem" }} />
          <PythonSVG
            style={{ width: "3rem", height: "3rem", margin: "1rem" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
