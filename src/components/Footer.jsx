import React from 'react'
import { RiCompassDiscoverFill } from "react-icons/ri";
import { BsInstagram, BsTwitterX, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className='bg-black text-white p-8 mt-40'>
      <h1 className='flex items-center gap-2'>
        <RiCompassDiscoverFill className='size-6 text-[#c5a059]' />
        <strong>Travel Memory</strong>
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 my-10 gap-8'>
        <div className='flex flex-col gap-6'>
          <p>Company</p>
          <p className='text-xs text-gray-400'>About</p>
          <p className='text-xs text-gray-400'>Contact</p>
          <p className='text-xs text-gray-400'>Trips</p>
          <p className='text-xs text-gray-400'>Reviews</p>
          <p className='text-xs text-gray-400'>Resources</p>
        </div>
        <div className='flex flex-col gap-6'>
          <p>Policies</p>
          <p className='text-xs text-gray-400'>Privacy</p>
          <p className='text-xs text-gray-400'>Cookies</p>
          <p className='text-xs text-gray-400'>Terms of use</p>
          <p className='text-xs text-gray-400'>Terms & Conditions</p>
        </div>
        <div className='flex flex-col gap-6'>
          <p>Help</p>
          <p className='text-xs text-gray-400'>Support</p>
          <p className='text-xs text-gray-400'>Contact</p>
        </div>
        <div className='flex flex-col gap-6'>
          <p>Policies</p>
          <p className='text-xs text-gray-400'>Privacy</p>
          <p className='text-xs text-gray-400'>Cookies</p>
          <p className='text-xs text-gray-400'>Terms of use</p>
          <p className='text-xs text-gray-400'>Terms & Conditions</p>
        </div>
      </div>
      <hr className='text-gray-600' />
      <div className='flex justify-evenly text-gray-400 mt-8'>
        <div className='flex gap-4 '>
          <BsInstagram />
          <BsTwitterX />
          <BsLinkedin />
        </div>
        <div className='text-xs'>
          All rights reserved by Ezgi.2026
        </div>
      </div>
    </div>
  )
}

export default Footer
