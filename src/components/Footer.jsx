import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo} alt=''/>
                <p className='text-gray-800'>
                    Platform for discovering and celebrating the finest Malaysian local perfume brands.
                </p>
            </div>
            <div>
                <h3 className='text-gray-800 text-lg font-bold mb-4'>
                    Company
                </h3>
                <ul>
                    <li><a href='#Home' className='hover:text-gray-950'>Home</a></li>
                    <li><a href='#About' className='hover:text-gray-950'>About Us</a></li>
                    <li><a href='#Contact' className='hover:text-gray-950'>Contact Us</a></li>
                    <li><a href='#' className='hover:text-gray-950'>Privacy Policy</a></li>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-gray-800 text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                <p className='text-gray-950 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='flex gap-2 '>
                    <input type='email' placeholder='Enter your email' className='p-2 rounded-2xl bg-gray-500 text-white border focus:outline-none w-full md:w-auto' />
                    <button className='py-2 px-4 rounded-2xl bg-blue-400 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Copyright 2025 © RithCode. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer