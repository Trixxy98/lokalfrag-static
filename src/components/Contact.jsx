import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "6ed10991-2d4b-4300-a16c-132fcd850cb3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if(data.success) {
        setResult("")
        toast.success("Form Submitted Successfully!")
        event.target.reset()
    } else {
        console.log("Error", data)
        toast.error(data.message)
        setResult("")
    }
  };


  return (
    <div className=' bg-gray-100 text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='ContactUs'>
        <h1 className='text-2xl sm:text-4xl mb-2'>
            Contact <span className='bg-black text-white px-2'>With Us</span>
        </h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
            Ready to Explore Your Scent? Let's Dive Into Our Future Together
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Name:
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='text' name='name' placeholder='Your Name' required />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Email:
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='text' name='email' placeholder='Your Email' required />
                </div>
            </div>
            <div className='my-6 text-left'>
                Message:
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none ' name='message' placeholder='Message ' required/>
            </div>
            <button className=' border text-black py-2 px-12 mb-10 hover:bg-blue-300 hover:text-white'>{result ? result : "Send Message"}</button>
        </form>
    </div>
  )
}

export default Contact