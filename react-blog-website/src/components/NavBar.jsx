import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaFacebookF ,FaDribbble,FaTwitter,FaBars  } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';
import Modal from './Modal';

const NavBar = () => {
    const[isMenuOpen,setIsMenuOpen]=useState(false)

    const[isModalOpen,setIsModalOpen]=useState(false)




    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)

    }
    const navitems=[
        {path:'/',link:"Home"},
        {path:'/blogs',link:"Blogs"},
        {path:'/about',link:"About"},
        {path:'/contact',link:"Contact"},
        {path:'/services',link:"Services"}
    ]

    // modals
    const openModal=()=>{
        setIsModalOpen(true)
    }

    const closeModal=()=>{
        setIsModalOpen(false)
    }

  return (
   

    <header className='bg-black text-white top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white'>Blog<span className='text-orange-500'>.BG</span></a>
            <ul className='md:flex gap-12 text-lg hidden'>

                {
                    navitems.map(({path,link})=><li className='text-white ' key={path}>
                        <NavLink
                        className={({isActive,isPending})=>
                            isActive?"active":isPending?"pending":""

                    } 
                         to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* //menu icons */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="/" className='hover:text-orange-500'><FaFacebookF /></a>
                <a href="/" className='hover:text-orange-500'><FaDribbble/></a>
                <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
                <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in  '>Log in</button>
            </div>


            {/* modal */}
            
            <Modal isOpen={isModalOpen} onClose={closeModal}/>


            {/* mobile icons */}
            <div className='md:hidden'>
                <button className='cursor-pointer' onClick={toggleMenu}>
                    {
                        isMenuOpen?<FaXmark className='h-5 w-5'/>:<FaBars className='h-5 w-5'/>
                    }
                    
                

                    </button>
            </div>

        </nav>

        {/* menu items for mobile */}
        <div>
            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150":"hidden"}`}>

                {
                    navitems.map(({path,link})=><li className='text-black ' key={path}>
                        <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

        </div>
    </header>
  )
}

export default NavBar