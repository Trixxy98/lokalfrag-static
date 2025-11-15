import React from 'react'
import { assets } from '../assets/assets.js'
import Navbar from './Navbar.jsx'

const Header = () => {
  return (
    <div className='min-h-screen bg-gray-250 flex flex-col w-full overflow-hidden'>
      <Navbar/>
      <div className='flex-1 flex flex-col items-center justify-center px-6 md:px-20 lg:px-32 py-20'>
        <div>
            <img src=''></img>
            <img src=''></img>
            <img src=''></img>       
        </div>
        <p className="quote-text">
          Explore the local hub scent of <span className='bg-black text-white px-2'>fragrences</span> in Malaysia
        </p>
        <div className='space-x-6 mt-16'>
            <a href='#Brand' className='border px-8 py-3 hover:bg-gray-500'>Brand</a>
            <a href='#ContactUs' className='border px-8 py-3 bg-black text-white hover:bg-white hover:text-black'>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header