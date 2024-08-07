import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";


const Banner = () => {
  return (
    <div className='px-2 py-32 mx-auto bg-black'>
        <div className='text-white text-center'>
            <h1 className=' text-5xl md:text-7xl font-bold leading-snug mb-5'>Welcome to our  <span className='text-orange-500 '>Blog.BG</span></h1>
            <p className='text-grey-500 lg:w-3/5 mx-auto mb-5 font-primary'>
            We're thrilled to have you here. Whether you're a seasoned blogger, an avid reader, or just starting your journey, Blog.bg is your go-to destination for sharing stories, ideas, and inspiration. Dive into our diverse community, discover engaging content, and join the conversation. Happy blogging!
            </p>
        </div>
        <div  className='flex justify-center items-center'>
            <Link to="/Services" className='text-white font-medium hover:text-orange-500 inline-flex items-center py-1'>Learn More <FaArrowRightLong className='mt-2 ml-2'/></Link>
        </div>
    </div>
  )
}

export default Banner