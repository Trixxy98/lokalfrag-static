// ...existing code...
import React, { useMemo } from 'react'
import { assets } from '../assets/assets.js'

const About = () => {
  // ...existing code...
  const imgs = useMemo(() => {
    const list = [
      assets?.blueswim,
      assets?.cola,
      assets?.rirana,
      assets?.rainforest,
      assets?.brand_img,
    ].filter(Boolean)

    // shuffle
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[list[i], list[j]] = [list[j], list[i]]
    }
    return list
  }, []) // shuffle once per mount

  const spanOptions = [
    'row-span-1 col-span-1',
    'row-span-2 col-span-1',
    'row-span-1 col-span-2',
    'row-span-2 col-span-2',
    'row-span-1 col-span-1',
  ]

  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl mb-2'>About
        <span className='bg-black text-white px-2'>
          Our Passion
        </span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Fragrances, Dedicated to Your Scents</p>

      {/* grid with 5 images in random positions */}
      <div className='w-full'>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-fr'>
          {imgs.map((src, idx) => {
            const spanClass = spanOptions[idx % spanOptions.length]
            // map to responsive Tailwind spans for md breakpoint
            const classes = `col-span-1 ${spanClass.replace(/row-span-/g, 'md:row-span-').replace(/col-span-/g, 'md:col-span-')} overflow-hidden rounded-md`
            return (
              <div key={idx} className={classes}>
                <img
                  src={src || `https://via.placeholder.com/600x400?text=Image+${idx+1}`}
                  alt={`project-${idx}`}
                  className='w-full h-full object-cover block'
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
