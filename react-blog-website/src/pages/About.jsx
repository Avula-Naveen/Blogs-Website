import React from 'react'
import { PiArticleNyTimesFill } from "react-icons/pi";

const About = () => {
  return (
    <div>
      <div className='py-20 bg-black text-white text-center px-4'>
        <h2 className='text-5xl lg:text-7xl font-bold leading-snug mb-5'>About Us</h2>
      </div>

      {/* add image */}
      <div >

        <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 ' >
        
        <div className='m-6'> 
        <img src=".\src\assets\about.png" alt="About page image"  />
        </div>

        <div className='m-6'>
        <p className='text-orange-500 text-3xl '><span>Who we are</span></p>
        <h2 className='text-5xl bold font-bold'>We provide high quality Articles & Blogs</h2>
        <p className='pt-10'>Blog.bg is a popular Bulgarian blogging platform that offers users a space to create and share their personal blogs. The site caters to a variety of interests and topics, making it a versatile hub for content creators and readers alike. Here are some key aspects of Blog.bg Whether you are a seasoned blogger or a newcomer, Blog.bg offers a welcoming and supportive environment to share your voice and connect with others.
          <br />
          Our mission is to empower bloggers with the tools, knowledge, and support they need to create, grow, and monetize their blogs. We are dedicated to fostering a vibrant community where ideas flourish and creativity knows no bounds.
    
        </p>

        </div>

        </div>
        
        {/* Authors section */}

        <div className=' w-100%' >
          <h2 className='text-3xl font-bold px-5'>Top Authors</h2>

          <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 px-20'>

            {/* user one */}
          <div className="card my-8 ">
  <img src=".\src\assets\user1M.jpg" alt="John" style={{ height:"150px",width: "150px",borderRadius:'50%' }} className='mt-4'/>
  <h1>Andrew</h1>
  <p className="title">Director of Operations</p>
  <p className='display: inline-flex'><PiArticleNyTimesFill/> 20 Articles Published</p>
</div>
{/* user two */}
<div className="card my-8" >
  <img src=".\src\assets\user2F.jpg" alt="John" style={{ height:"150px",width: "150px",borderRadius:'50%' }} className='mt-4'/>
  <h1>Rayna Mario</h1>
  <p className="title">Content Writer</p>
  <p className='display: inline-flex'><PiArticleNyTimesFill/> 8 Articles Published</p>
</div>
{/* user three */}
<div className="card my-8" >
  <img src=".\src\assets\user-03.avif" alt="John" style={{ height:"150px",width: "150px",borderRadius:'50%' }} className='mt-4'/>
  <h1>David Tac</h1>
  <p className="title">Head of Marketing</p>
  <p className='display: inline-flex'><PiArticleNyTimesFill/> 5 Articles Published</p>
</div>
{/* user four */}
<div className="card my-8">
  <img src=".\src\assets\user4M.jpg" alt="John" style={{ height:"150px",width: "150px",borderRadius:'50%' }} className='mt-4'/>
  <h1>Mark Jacob</h1>
  <p className="title">Head of Services</p>
  <p className='display: inline-flex '><PiArticleNyTimesFill/> 10 Articles Published</p>
</div>

          </div>

          



        </div>


      </div>

     
    </div>
  )
}

export default About