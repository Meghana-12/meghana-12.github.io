import React from 'react'
import Project from './components/Project'
import Portfolio from './assets/images/projects/portfolio.png';
import ChatApp from './assets/images/projects/chat-app.png';
import Kozy from './assets/images/projects/kozy.png'

const projects = [
    {
        img : Portfolio,
        key: 'Portfolio Website (This one right here XD)',
        title : 'Portfolio Website',
        hashtags : ['reactjs' , 'tailwind'],
        project_link: 'https://meghana-12.github.io/',
        code_link : 'https://github.com/Meghana-12/devchallenges-portfolio',
        description : <div>Its this project right here XD! I built this as part of the <a className='font-semibold underline' href='https://devchallenges.io/challenges/5ZnOYsSXM24JWnCsNFlt'>devchallenges</a>. I took most of the design inspiration from the figma designs provided by them.</div>
    },
    {
        img : Kozy,
        key : 'Kozy Classroom | LSM | Microsoft Engage 2021',
        title : 'Kozy Classroom | LSM | Microsoft Engage 2021',
        hashtags : ['reactjs' , 'react-router', 'firebase'],
        project_link: 'https://kozy-klassroom.firebaseapp.com/',
        code_link: 'https://github.com/Meghana-12/kozy-klassroom',
        description : <div>Kozy Klassroom is Learning Management System (Submission Portal + Forum) created using ReactJS, material ui, material ui template, react router, firebase. I built this as part of <b>the Microsoft Engage Program 2021</b></div>
    },
    {
        img : ChatApp,
        key : 'Chat Application',
        title : 'Chat Application',
        hashtags : ['reactjs' , 'firebase'],
        project_link :'https://chat-app-deploy-v1.vercel.app/',
        code_link: 'https://github.com/Meghana-12/Chat-App',
        description : 'This is a simple Chat application built using ReactJS and firebase. This helped my get hang of Firebase.'
    },

]

function Projects() {
    const [nav, setNav] = React.useState(1)
    const [active, setActive] = React.useState('all')
    const [projectsArray, setProjects] = React.useState(projects)

    const handleClick = (e) => {
        e.preventDefault();
        let value = e.target.getAttribute('data-id')
        if (value !== 'all') {
        setProjects(projects?.filter(item => item?.hashtags?.includes(value)))
        } else {
            setProjects(projects)
        }
        setActive(value)
    }
  return (
    <div  className='flex flex-col justify-evenly gap-4 '>
        <div className='card text-left font-semibold w-full dark:text-white'> Projects ({projectsArray.length}) 
            <div className='flex flex-row gap-2 flex-wrap m-2'>
                <button className={`btn-outlined rounded-2xl border-2 ${active === 'all' ? 'dark:bg-sky-800 bg-sky-500 text-white' : ''}`} data-id='all' onClick={(e) => handleClick(e)}> All</button>
                <button className={`btn-outlined rounded-2xl border-2 ${active === 'reactjs' && 'dark:bg-sky-800 bg-sky-500 text-white'}`} data-id='reactjs' onClick={(e) => handleClick(e)}>   ReactJS </button> 
                <button className={`btn-outlined rounded-2xl border-2 ${active === 'firebase' && 'dark:bg-sky-800 bg-sky-500 text-white'}`}  data-id='firebase' onClick={(e) => handleClick(e)}>   Firebase</button>  
                <button className={`btn-outlined rounded-2xl border-2 ${active === 'tailwind' && 'dark:bg-sky-800 bg-sky-500 text-white'}`} data-id='tailwind' onClick={(e) => handleClick(e)} >   Tailwind</button>
            </div>
            </div>
        <div className='flex gap-4 sm:flex-row flex-col'>
            {/* // 0 1 2 3 4 5 6  */}
        { !!projectsArray[(nav-1)*2 + 1] ? (
            [projectsArray[(nav-1)*2],projectsArray[(nav-1)*2 + 1]]?.map(item => (
                <div key={item?.title} className='card sm:w-1/2 w-full'>
                    <Project  key={item?.title} img={item?.img} title={item?.title} hashtags={item?.hashtags} description={item?.description}/>
                </div>
            ))) : (
                [projectsArray[(nav-1)*2]]?.map(item => (
                    <div key={item?.title} className='card sm:w-1/2 w-full'>
                        <Project  key={item?.title} img={item?.img} title={item?.title} hashtags={item?.hashtags} description={item?.description} project_link={item?.project_link} code_link={item?.code_link}/>
                    </div>
                )))
        }
        </div> 
        <div className="grow flex-1"></div>
        <div className='flex justify-center'>
            {Array.apply(null , {length :(projectsArray.length/2 + projectsArray.length%2)}).map((item, i) => (
                    <button className={ nav === i+1 ? 'nav-chip-selected' : 'nav-chip'} onClick={() => setNav(i+1)}> {i+1}</button>
            ))}
           
            {/* <button className={ nav === 2 ? 'nav-chip-selected' : 'nav-chip'} onClick={ () => setNav(2)}> 2</button> */}
        </div>  
    </div>
  )
}

export default Projects