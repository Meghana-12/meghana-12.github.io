import React from 'react'
import Skill from './components/Skill'
function Music() {
  return (
    <div className='card w-full'>
        <div className='title'>
          Hobbies
        </div>
        <Skill  skills={['Guitar' , 'Watercolors', 'Building apps', 'Anime' ]}/>
    </div>
  )
}

export default Music