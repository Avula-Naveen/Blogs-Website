import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5000/blogs")
            .then(response => {
                setPopularBlogs(response.data.slice(0, 15))
                setLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    const handleLinkClick = (id) => {
        window.scrollTo(0, 0)
        navigate(`/blogs/${id}`)
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <div>
                <h3 className='text-2xl font-semibold px-4'>Latest Blogs</h3>
                <div>
                    {
                        popularBlogs.slice(0, 5).map(blog => (
                            <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                                <h3 className='font-medium mb-2'>{blog.title}</h3>
                                <div
                                    onClick={() => handleLinkClick(blog.id)}
                                    className='text-black text-base pb-2 hover:text-orange-500 inline-flex items-center py-1 cursor-pointer'
                                >
                                    Read More <FaArrowRightLong className='mt-2 ml-2' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* popular blogs */}
            <div>
                <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
                <div>
                    {
                        popularBlogs.slice(5, 10).map(blog => (
                            <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                                <h3 className='font-medium mb-2'>{blog.title}</h3>
                                <div
                                    onClick={() => handleLinkClick(blog.id)}
                                    className='text-black text-base pb-2 hover:text-orange-500 inline-flex items-center py-1 cursor-pointer'
                                >
                                    Read More <FaArrowRightLong className='mt-2 ml-2' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar
