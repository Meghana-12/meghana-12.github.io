import * as React from 'react'
import { CONTACT, DESCRIPTION, HEADER, RESUME, ROLE} from './consts/profile'

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
            <div className='title text-left text-zinc-600 dark:text-zinc-300 italic'> {ROLE}</div>
            {/* add graduation and recent work */}
            <div className='text-lg text-left text-zinc-600 dark:text-zinc-300 font-semibold'> IIT Bhilai CSE '22 | CGPA: 8.1</div>
            </div>
            <div className='text-left text-zinc-500 dark:text-zinc-400 font-semibold'>
             {HEADER}
             </div>
             <br/>
             <div className='text-left text-zinc-400 text-sm'>
            {DESCRIPTION}
              </div>
        <a className='btn self-center place-end' href={RESUME.HREF} download target="_blank" rel="noreferrer">{RESUME.BUTTON_TEXT}</a>
        </div>
        <div className='flex sm:flex-col sm:justify-start justify-center'>
              <a className='icon-button' href={CONTACT.MAIL.LINK} target='_blank' rel="noreferrer">
                  <img src={CONTACT.MAIL.ICON} alt='mail'/>
              </a>
              <a className='icon-button' href={CONTACT.LINKEDIN.LINK} target='_blank' rel="noreferrer">
                  <img src={CONTACT.LINKEDIN.ICON} alt='linkedin'/>
              </a>
              <a className='icon-button' href={CONTACT.GITHUB.LINK} target='_blank' rel="noreferrer">
                  <img src={CONTACT.GITHUB.ICON} alt='github' className='dark:bg-white dark:rounded'/>
              </a>
              <a className='icon-button' href={CONTACT.TWITTER.LINK} target='_blank' rel="noreferrer">
                  <img src={CONTACT.TWITTER.ICON} alt='twitter' cla/>
              </a>
          </div>
    </div>
  )
}

export default Profile