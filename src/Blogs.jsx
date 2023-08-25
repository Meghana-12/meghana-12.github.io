import React from 'react'
import Blog from './components/Blog'
import First from './assets/images/blogs/first.jpeg'

function Blogs() {
  return (
    <div className="card w-fill gap-4">
        <div className='title'> Blogs</div>
        <Blog title='First Blog' img={First} url='https://hashnode.com/@meghanacosmos' > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam hic aperiam nulla consequatur ad voluptates veritatis minus? Praesentium, omnis tempora, minima eius, eos deserunt ab repellendus distinctio placeat asperiores cupiditate! </Blog>
    </div>
  )
}

export default Blogs