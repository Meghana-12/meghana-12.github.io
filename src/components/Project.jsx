import React from 'react'

function Project(props) {
  return (
    <div className='flex flex-col h-full' >
        <div className='rounded-md overflow-hidden'>
            <img src={props.img} alt={props.title} />
        </div>
        <div className='flex flex-col sm:p-4 justify-between flex-1'>
            <div className='flex flex-row flex-wrap gap-3'>
            {props.hashtags.map(hashtag => ( <div key={hashtag} className='text-zinc-700 dark:text-zinc-300 font-medium text-sm'> #{hashtag} {" "}</div> ))}
            </div>
            <div className='text-xl font-semibold text-left text-zinc-700 dark:text-zinc-300 pt-4 pb-6'>{props.title}</div>
            <div className='text-zinc-400 font-medium text-sm text-left'>{props.children || props.description}</div>
            <div className='flex-1 grow '></div>
            <div className='flex flex-col justify-center '>
              <a className='btn' href={props.project_link}>Check out the project!</a>
              <a className='btn-outlined' href={props.code_link}>Here's the Code</a>
              {/* use icons instead */}
            </div>
        </div>

    </div>
  )
}

export default Project