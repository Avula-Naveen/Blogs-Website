import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {

  return (
    <div>
      <div className='py-20 bg-black text-white text-center px-4'>
        <h2 className='text-5xl md:text-7xl font-bold leading-snug mb-5'>Blogs Page</h2>
      </div>

       {/* all blogs */}
       <div>
        <BlogPage/>
        </div>
    </div>

    

  )
}

export default Blogs