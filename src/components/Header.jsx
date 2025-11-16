import React from 'react'
import { assets } from '../assets/assets.js'
import Navbar from './Navbar.jsx'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col w-full overflow-hidden' id='Home'>
      <Navbar/>
      <motion.div
      initial={{opacity:0, y:100}}
      transition={{duration:2.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}} 
      className='flex-1 flex flex-col items-center justify-center px-6 md:px-20 lg:px-32 py-20'>
        <div>
            <img src=''></img>
            <img src=''></img>
            <img src=''></img>       
        </div>
        <p className="quote-text">
          Explore the local hub scent of <span className='bg-black text-white px-2'>fragrances</span> in Malaysia
        </p>
        <div className='space-x-6 mt-16'>
    <a href='#Brand' className='border px-8 py-3 transition-all duration-400 hover:bg-black hover:text-white hover:px-10 hover:py-4'>
        Brand
    </a>
    <a href='#ContactUs' className='border px-8 py-3 bg-black text-white transition-all duration-00 hover:bg-white hover:text-black hover:px-10 hover:py-4'>
        Contact Us
    </a>
</div>
      </motion.div>
    </div>
  )
}

export default Header