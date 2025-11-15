import React from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="Logo"/>
            <ul className='hidden md:flex gap-7 text-gray-400 underline-offset-4 font-medium'>
                <a href='#Home ' className='cursor-pointer hover:text-gray-700 underline'>Home</a>
                <a href='#About ' className='cursor-pointer hover:text-gray-700 underline'>About</a>
                <a href='#Brand ' className='cursor-pointer hover:text-gray-700 underline'>Brand</a>
                <a href='#Review ' className='cursor-pointer hover:text-gray-700 underline'>Review</a>
            </ul> 
            <button className='hidden md:block bg-gray-700 px-8 py-2 text-gray-200 hover:bg-amber-600'>Sign Up</button> 
            <img src ={assets.menu_icon} className='md:hidden w-7 ' alt= ''/>       
        </div>
        {/* --------mobile menu----- */}
        <div className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all'>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-normal'>
          <a href='' className='px-4 py-2'>Home</a>
          <a href='' className='px-4 py-2'>About</a>
          <a href='' className='px-4 py-2'>Brand</a>
          <a href='' className='px-4 py-2'>Review</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar