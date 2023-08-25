import React from 'react'


function Blog(props) {
  return (
    <div className="flex flex-col w-full gap-4">
        <div className='flex flex-row justify-between'>
            <div className='secondary'>{props.title}</div>
            <div className='w-2/3'><img src={props.img} alt={props.title}/></div>
        </div>
        <div className='text-sm dark:text-zinc-400 text-zinc-600 text-left'>{props.children}</div>
        <a className="text-sm text-sky-600 text-left" href={props.url}>{props.url}</a>
    </div>
  )
}

export default Blog