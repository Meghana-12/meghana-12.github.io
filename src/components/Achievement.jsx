import React from 'react'

function Achievement(props) {
  return (
    <div className='flex flex-row items-center '>
        <div className='w-1/5'>
            <img src={props.img} alt={props.company}/>
        </div>
        <div className='flex flex-col p-4 text-left justify-center w-4/5 '>
           
            <div className='text-zinc-800 dark:text-zinc-300 text-md font-semibold'>{props.role + ' '}</div>
            <div className='text-zinc-400 text-xs pb-2 '>
                {props.duration}
            </div>
            <div className='text-zinc-400 text-sm'>{props.children}</div>
           
        </div>
    </div>
  )
}

export default Achievement




