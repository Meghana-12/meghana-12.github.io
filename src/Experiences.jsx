import React from 'react'
import Experience from './components/Experience';
import Needl from './assets/images/xp/needl.jpeg';
import Block from './assets/images/xp/9thblock.jpeg';
import Ignitus from './assets/images/xp/ignitus.jpeg'
import IITBh from './assets/images/xp/iitbhi.jpeg';

function Experiences() {
  return (
    <div className='card w-full grow flex flex-col justify-between'>
            <div className='text-2xl text-left font-semibold pb-4 dark:text-white'>Experiences</div>
            <Experience img={Needl} role='SDE Intern'  company='Needl.AI' duration='May 2021 - Jul 2021'> 
            1. Migrated the old designs (components with stories, pages) related to Authentication written in JavaScript (Material UI) to new UI in Typescript (dynamic CSS styled-components, headless component libraries ReachUI, downshift) based on the Figma designs using best coding practices.
            <br/>
            2. Migrated and built tests for the components and pages as required using RTL (React Testing Library) and Jest.
            <br/>
            3. Created pdf reader using pdf.js by Mozilla to better the user experience
            </Experience>
            <hr/>
            <Experience img={Block} role='Full Stack developer'company='9th Block' duration='Dec 2020 - Mar 2021' >
            Tech Stack: ReactJs(Hooks), Typescript, Router, Emotion (Dynamic CSS), Redux, Redux-saga, git, Axios, JSON Web Token, etc
            <br/>
            My Current Responsibilities include :
            <br/>
            1. Planned website development, converting mockups into usable web presence with ReactJS (TypeScript), Redux, Redux-saga, Router and Emotion CSS (Dynamic CSS) maintaining the best code practices.
            <br/>2. Optimized components for maximum performance across a vast array of web-capable devices and browsers.
            <br/>3. Integrating RESTful APIs for complete functionality using Axios.
            4. Handled authentication using JSON Web Tokens (JWT).
            {/* collapsable bar */}
            </Experience>
            <hr/>
            <Experience img={Ignitus} role='SDE Intern'  company='Ignitus' duration='Apr 2020 - Jun 2020' > 
            ReactJs(Hooks), Typescript, Router, Emotion (Dynamic CSS), git, Github.
            <br/>1. Created custom React Js reusable design components for existing websites and applications.
            <br/>2. Assisted in troubleshooting issues on web-based systems.
            <br/>3. Created prototypes and experimented with new technologies and features as assigned.
            </Experience>
            <hr/>
            <Experience img={IITBh} role='General Secretary of Cultural and Media Affairs'  company='IIT Bhilai' duration='Apr 2019 - Apr 2020' />
    </div>
  )
}

export default Experiences