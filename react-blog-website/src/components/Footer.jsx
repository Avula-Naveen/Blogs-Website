
import React, { useState } from 'react'
import { FaTwitter,FaInstagram,FaFacebookF } from "react-icons/fa";



const Footer = () => {


    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Email:", email);

        // Clear the input after submission
        setEmail('');
    };

    



  return (
    <div className='bg-gray-900 text-white'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='grid mb-8 lg:grid-cols-6'>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    <div>
                        <p className='font-medium tracking-wide text-grey-300'>Category</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Reference</a>
                        </li>
                    </ul>
                    </div>

                    {/* category 2 */}
                    <div>
                        <p className='font-medium tracking-wide text-grey-300'>Apps</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>E-comerce</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertinment</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                        </li>
                    </ul>
                    </div>

                    {/* category 3 */}
                    <div>
                        <p className='font-medium tracking-wide text-grey-300'>Business</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>customer</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Larg-Scale</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Small-Scale</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Non-tech</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Tech</a>
                        </li>
                    </ul>
                    </div>

                    {/* category 4 */}
                    <div>
                        <p className='font-medium tracking-wide text-grey-300'>Social</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Twitter</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>FaceBook</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Yahoo</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>G-mail</a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Mails</a>
                        </li>
                    </ul>
                    </div>
                </div>

                {/* subcriptions */}

                <div className='md:max-w-md lg:col-span-2 '>
                        <p className='font-medium tracking-wide text-grey-300'>Subscribe for Updates</p>
                        <form className='footerForm   mt-4 flex flex-col md:flex-row' >
                        <input
                type="email"
                name='email'
                id='email'
                className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none'
                placeholder='examplemail@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
                            <button onClick={handleSubmit} className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border'>Subscribe</button>

                        </form>
                        {/* <p className='mt-4 text-sm text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut magni ipsa voluptatem nisi facilis? Exercitationem esse, nemo sed expedita perspiciatis facere perferendis mollitia, cum facilis neque, accusamus est vitae nihil?</p> */}
                    </div>
               
            </div>


            {/* copy Rights */}
            <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                <p className='text-sm text-gray-500'>© Copyrights-2024 All copy Rights Reserved</p>
                <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaTwitter size={25} /></a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaInstagram size={25} /></a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaFacebookF size={25} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer