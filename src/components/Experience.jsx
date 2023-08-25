import React from 'react'

function Experience(props) {
  return (
    <div className='flex sm:flex-row flex-col pt-2 pb-2 items-center'>
        <div className='sm:w-1/5 w-1/3 flex justify-center'>
            <img src={props.img} alt={props.company}/>
        </div>
        <div className='flex flex-col p-2 sm:p-4 text-left items-center sm:items-start justify-center sm:w-4/5'>
            <div className='text-zinc-400 text-xs pb-2'>
                {props.duration}
            </div>
            <div className='text-zinc-800 dark:text-zinc-300 text-md font-semibold'>{props.role + ' '}</div>
            <div className='text-zinc-600 dark:text-zinc-400 text-md italic pb-2'>{props.company}</div>
            <div className='text-zinc-400 dark:text-zinc-300 text-sm pb-4'>{props.children}</div>
            {/* <div></div> tech stack */}   
        </div>
        
    </div>
  )
}

export default Experience