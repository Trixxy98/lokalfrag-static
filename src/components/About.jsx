import React, { useMemo, useRef, useState } from 'react'
import { assets } from '../assets/assets.js'
import { motion } from 'framer-motion'

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('')
  const itemRef = useRef()

  const handleMouseMove = (e) => {
    if (!itemRef.current) return

    const { left, top, width, height } = itemRef.current.getBoundingClientRect()

    const relativeX = (e.clientX - left) / width
    const relativeY = (e.clientY - top) / height

    const tiltX = (relativeY - 1) * 5
    const tiltY = (relativeX - 1) * -5

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`

    setTransformStyle(newTransform)
  }

  const handleMouseLeave = () => {
    setTransformStyle('')
  }

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: 'transform 0.3s ease-out' }}
    >
      {children}
    </div>
  )
}

const About = () => {
  const imgs = useMemo(() => {
    const list = [
      assets?.about1,
      assets?.about2,
      assets?.about3,
      assets?.about4,
      assets?.about5,
      assets?.about6,
      assets?.about7,
      assets?.about8,
    ].filter(Boolean)
    return list
  }, [])

  const spans = [
    'col-span-2 row-span-2',
    'col-span-1 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-2 row-span-2',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'
    >
      <h1 className='text-2xl sm:text-4xl mb-2'>
        About
        <span className='bg-black text-white px-2'>Our Passion</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>
        Passionate About Fragrances, Dedicated to Your Scents
      </p>

      {/* Masonry Grid with Tilt Effect */}
      <div className='w-full mb-8'>
        <div className='grid grid-cols-4 gap-4 auto-rows-[200px]'>
          {imgs.map((src, idx) => (
            <BentoTilt
              key={idx}
              className={`${spans[idx]} overflow-hidden rounded-md bg-gray-200`}
            >
              <img
                src={src || `https://via.placeholder.com/400x400?text=Image+${idx + 1}`}
                alt={`project-${idx}`}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </BentoTilt>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
        <div>
          <p className='text-4xl font-medium text-gray-800'>10+</p>
          <p>Brand</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-gray-800'>50+</p>
          <p>Product</p>
        </div>
      </div>

      <p className='my-10 max-w-lg'>
        LokalFrag is a dedicated platform created to be the premier destination for Malaysian
        local perfume brands. We connect you directly with the passionate artisans and unique
        scents that define the Malaysian fragrance landscape.
      </p>

      <button className='bg-white text-black px-8 py-2 border hover:bg-blue-400 hover:text-white transition-all duration-300'>
        Learn More
      </button>
    </motion.div>
  )
}

export default About