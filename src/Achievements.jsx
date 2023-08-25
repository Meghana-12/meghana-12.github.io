import React from 'react'
import Achievement from './components/Achievement';
import MLH from './assets/images/xp/mlh.jpeg'
import Microsoft from './assets/images/xp/microsoft.jpeg'
import Tie from './assets/images/xp/tie.jpeg'
import Hacktoberfest from './assets/images/xp/hacktober.png'
import Technica from './assets/images/xp/technica.png'

function Achievements() {
  return (
    <div className='card flex flex-col gap-4 '>
            <div className='text-2xl text-left font-semibold pb-4 dark:text-white'>Achievements</div>
            <Achievement img={MLH} role="MLH Prep Fellow '22"  duration='Apr 22'/>
            <Achievement img={Microsoft} role='Mentee, Microsoft Engage 2021'  duration='Nov 2021' />
            <Achievement img={Tie} role='Tie University Global Business Hackathon | Winning Team' duration='Mar 2021' />
            <Achievement img={Hacktoberfest} role='Hacktoberfest Challenge 2020'  duration='Oct 2020' />
            <Achievement img={Technica} role='Technica Hackathon | Winning team ' duration='Oct 2020' />
    </div>
  )
}

export default Achievements