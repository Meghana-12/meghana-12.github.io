import React from 'react'
import Skill from './components/Skill'

function Skills() {
  return (
    <div className="flex flex-col gap-4">
        <div className='card'>
                <Skill title='Proficent' skills={['ReactJS', 'Javascript', 'Python', 'Tailwind', 'styled-components' , 'Emotion', 'MaterialUI', 'Firebase']}/>
            </div>
            <div className='card'>
            <Skill title='Familiar' skills={['CPP', 'NodeJS','Redux', 'React Router', 'NextJS', 'RTL(React testing Library)', 'Jest' , 'TypeScript' ,'Latex']}/>
            </div>
           
            
    </div>
  )
}

export default Skills