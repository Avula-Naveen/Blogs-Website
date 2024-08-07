
import React from 'react'
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
const BlogCards = ({blogs,currentPage,selectedCategory,pageSize}) => {
    const filterData=blogs
    .filter((blogs)=>!selectedCategory || blogs.category===selectedCategory)
    .slice((currentPage-1)*pageSize,currentPage*pageSize)
    console.log(filterData);
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
            filterData.map(eachBlog=> <Link to={`/blogs/${eachBlog.id}`} key={eachBlog.id} className='p-5 shadow-lg rounded cursor-pointer'>
            <div>
                <img src={eachBlog.image} alt=""  className='w-full'/>
            </div>
            <h3 className='mt-4 mb-2 cursor-pointer hover:text-blue-500 font-bold'>{eachBlog.title}</h3>
            <p className='mb-2 text-gray-600 '> <FaUserAlt className='inline-flex items-center mr-2'/> {eachBlog.author}</p>
            <p  className='text-gray-500 text-sm'>Published:{eachBlog.published_date}</p>
            </Link>)
        }
    </div>
  )
}

export default BlogCards