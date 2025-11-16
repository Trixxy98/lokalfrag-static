import React from 'react'
import { testimonialsData } from '../assets/assets'
import { assets } from '../assets/assets'

const Review = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Review'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
            Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Reviews</span>
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
            Real Stories from Those Who Found Fragrances with Us
        </p>

        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial, index)=>(
                <div key={index} className='max-w-[340px] border shadow-lg rounded-4xl px-8 py-12 text-center bg-gray-100'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt}/>
                    <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                    <div className='flex justify-center p-2'> 
                        {Array.from({length: testimonial.rating}, (item, index)=>(
                            <img key={index} src={assets.star_icon} alt=''/>
                        ))}
                    </div>
                    <p className='text-gray-600'>{testimonial.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Review