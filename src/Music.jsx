import React from 'react'
import Skill from './components/Skill'
function Music() {
  return (
    <div className='card w-full'>
        <div className='title'>
          Hobbies
        </div>
        <Skill  skills={['Guitar' , 'Music', 'Building apps', 'Hackathons' , 'Watching Movies/Series' ]}/>
    </div>
  )
}

export default Music