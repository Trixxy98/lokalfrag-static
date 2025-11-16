import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    };
  },[showMobileMenu])


  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="Logo"/>
            <ul className='hidden md:flex gap-7 text-gray-500 font-medium'>
                <a href="#Home" class="relative group inline-block px-4">
                <span>Home</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
                </a>
                <a href="#About" class="relative group inline-block px-4">
                <span>About</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
                </a>
                <a href="#Brand" class="relative group inline-block px-4">
                <span>Brand</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
                </a>
                <a href="#Review" class="relative group inline-block px-4">
                <span>Review</span>
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
                </a>
            </ul> 
            <button className='
    hidden 
    md:block 
    bg-gray-700 
    px-10 
    py-1 
    text-gray-200 
    transition-all 
    duration-300 
    hover:bg-blue-400
    hover:text-white
    hover:scale-105
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-amber-600/30
    active:scale-95
'>
    Sign Up
</button> 
            <img onClick ={() => setShowMobileMenu(true)}src ={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt= 'menuIcon'/>       
        </div>
        {/* --------mobile menu----- */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' :'h-0 w-0'}right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt='crossIcon'/>
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-normal'>
          <a onClick={() => setShowMobileMenu(false)} href="#Home" class="relative group inline-block px-4 py-2">
  <span>Home</span>
  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
</a>
<a onClick={() => setShowMobileMenu(false)} href="#About" class="relative group inline-block px-4 py-2">
  <span>About</span>
  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
</a>
<a onClick={() => setShowMobileMenu(false)} href="#Brand" class="relative group inline-block px-4 py-2">
  <span>Brand</span>
  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
</a>
<a onClick={() => setShowMobileMenu(false)} href="#Review" class="relative group inline-block px-4 py-2">
  <span>Review</span>
  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar