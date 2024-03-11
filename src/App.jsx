import React from "react";
import "./App.css";
import Profile from "./sections/Profile";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Achievements from "./sections/Achievements";
import Footer from "./sections/Footer";

export const App = () => {
  const [isDark, setIsDark] = React.useState(true);
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="App lg:pl-20 lg:pr-20 lg:pt-10 lg:pb-10 bg-gray-100 dark:bg-slate-900 gap-4 flex flex-col justify-center items-center">
        <div className="flex flex-col m-5 lg:m-10 items-center gap-4 w-[100%] max-w-[1400px]">
          <button
            className="btn self-end"
            onClick={() => setIsDark(value => !value)}
          >
            Switch to {isDark ? "Light" : "Dark"} Mode!
          </button>
          <Profile />
          <Skills />
          <Achievements />
          <Experiences />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
