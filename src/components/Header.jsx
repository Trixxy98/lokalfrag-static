import React from 'react'
import Navbar from './Navbar.jsx'
import { motion } from 'framer-motion'
import bg from '../assets/bg.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {

  useGSAP(() => {
    gsap.set('#image-frame', {
      clipPath: 'polygon(30% 0%, 75% 0%, 90% 100%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    })

    gsap.from('#image-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#image-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
  })

  return (
    <div className="relative h-screen w-screen overflow-x-hidden bg-gray-100" id='Home'>
      <div id="image-frame" className="relative z-10 h-screen w-screen overflow-hidden rounded-lg">
        {/* Main background image */}
        <img
          src={bg}
          className="absolute opacity-85 left-0 top-0 w-full h-full object-cover object-center"
          alt="Background"
        />



        {/* Content */}
        <div className="absolute inset-0 z-50 flex flex-col">
          <Navbar/>
          
          <motion.div
            initial={{opacity:0, y:100}}
            transition={{duration:2.5}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}} 
            className='flex-1 flex flex-col items-center justify-center px-6 md:px-20 lg:px-32'
          >
            <p className="quote-text text-center text-3xl md:text-5xl mb-8 text-white drop-shadow-lg">
              Explore the local hub scent of <span className='bg-black text-white font-mono px-2 bg-opacity-80'>fragrances</span> in Malaysia
            </p>
            
            <div className='flex gap-6 mt-8'>
              <a 
                href='#Brand' 
                className='hidden 
    md:block 
    bg-white
    px-10 
    py-3 
    text-black
    transition-all 
    duration-300 
    rounded-2xl
    hover:bg-blue-400
    hover:text-white
    hover:scale-105
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-amber-600/30
    active:scale-95'
              >
                Brand
              </a>
              <a 
                href='#ContactUs' 
                className='hidden 
    md:block 
    bg-white
    px-10 
    py-3 
    text-black
    transition-all 
    duration-300 
    rounded-2xl
    hover:bg-blue-400
    hover:text-white
    hover:scale-105
    hover:-translate-y-1
    hover:shadow-lg
    hover:shadow-amber-600/30
    active:scale-95'
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header