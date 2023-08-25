import React from 'react'
import './App.css';
import Profile from './Profile';
import Skills from './Skills';
import ProfileImage from './assets/images/linkedin-meg.png';
import Cat from './assets/images/cat.jpeg'
import Projects from './Projects'
import Experiences from './Experiences'
import Achievements from './Achievements'
import Blogs from './Blogs'
import Music from './Music'
import Footer from './Footer'
function App() {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <div className={isDark ? 'dark' : ''}> 
    <div className="App lg:pl-20 lg:pr-20 lg:pt-10 lg:pb-10 bg-gray-100 dark:bg-slate-900 gap-4">
      {/* add dark theme and multiple layout with animation */}
      <div className='flex flex-col m-5 lg:m-10 items-center gap-4'>
      <button className='btn self-end' onClick={()=> setIsDark(value => !value)}>Switch to {isDark ?  'Light' : 'Dark' } Mode!</button>
        <Profile img={ProfileImage}/>
      <div className='flex sm:flex-row flex-col justify-between w-full gap-4'>
        <div className='flex flex-col md:w-2/5 w-full gap-4'>
            <Skills/>
            <Achievements/>
            <Blogs/>
           
            <div className='card overflow-hidden grow flex flex-col justify-around'>
              <div className='title '> Also... cats are super cute, right? </div>
                <img src={Cat} alt='cats'/>
            </div>
        </div>
        <div className='flex flex-col items-center md:w-3/5 w-full gap-4'>
          <Experiences/>
          <Music/>
           <Projects/> 
        </div>
      </div>
      
      </div>
      <Footer/>
    </div>
   
    </div>
  );
}

export default App;

// Make all components auto resizable based on where they are draged to!!