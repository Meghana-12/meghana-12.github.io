import React from 'react'
import Mail from './assets/images/icons/mail.svg'
import Linkedin from './assets/images/icons/linkedin.svg'
import Github from './assets/images/icons/github.svg'
import Twitter from './assets/images/icons/twitter.svg'

function Profile(props) {
  return (
    <div className='card flex sm:flex-row flex-col justify-center sm:justify-start'>
        <div className='rounded-md overflow-hidden sm:w-1/4 self-center '>
        <img src={props.img} alt="profile-img"/>
        </div>

        <div className='flex flex-col p-4 sm:w-3/4 justify-between'>
          <div className='flex flex-col sm:flex-row items-baseline'>
            <div className=' text-3xl font-semibold text-left text-zinc-700 dark:text-white pt-4'> Meghana Varanasi</div>
            <div className='text-lg p-1 italic font-semibold text-zinc-700 dark:text-white'> (she/her)</div>
            </div>
            <div className='flex flex-row justify-between'>
            <div className='title text-left text-zinc-600 dark:text-zinc-300 italic'> Frontend Developer</div>
            {/* add graduation and recent work */}
            <div className='text-lg text-left text-zinc-600 dark:text-zinc-300 font-semibold'> IIT Bhilai CSE '22 | CGPA: 8.1</div>
            </div>
            <div className='text-left text-zinc-500 dark:text-zinc-400 font-semibold'>
              Hi Amigos! I build apps, listen to music and currently, tryin to figure things out. 
             </div>
             <br/>
             <div className='text-left text-zinc-400 text-sm'>
              Over past few years, I explored different web dev techs like react, redux and saga, 
              dynamic css, component css and ofc vanilla css and handling apis. I've done few internships in the same field as well.
              Also, I had the opportunity to be part of various events and play different roles. 
              I’ve been a <i><b>General Secretary of Cultural Affairs(2019-2020)</b></i>, I’ve participated in hackathons, 
              I’ve been a mentor, a mentee, core member, lead, a sports person and part of cultural clubs, 
              helped build a few websites for clubs and a an open source contributer. And if you think tech dev 
              is the only thing I do, darling, you got me all wrong, I play guitar, make art and more importantly have fun :D  <br/>
              <b>Thanks for stopping by! I hope you have a Wonderful day!</b>
              </div>
        <a className='btn self-center place-end' href='./assets/Meghana_Resume.pdf' download target="_blank">Take a look at my resume!</a>
        </div>
        <div className='flex sm:flex-col sm:justify-start justify-center'>
              <a className='icon-button' href='mailto:meghana.cosmos@gmail.com' target='_blank' rel="noreferrer">
                  <img src={Mail} alt='mail'/>
              </a>
              <a className='icon-button' href='https://www.linkedin.com/in/meghana100/' target='_blank' rel="noreferrer">
                  <img src={Linkedin} alt='linkedin'/>
              </a>
              <a className='icon-button' href='https://github.com/Meghana-12' target='_blank' rel="noreferrer">
                  <img src={Github} alt='github' className='dark:bg-white dark:rounded'/>
              </a>
              <a className='icon-button' href='https://twitter.com/meghana_cosmos' target='_blank' rel="noreferrer">
                  <img src={Twitter} alt='twitter' cla/>
              </a>
          </div>
    </div>
  )
}

export default Profile