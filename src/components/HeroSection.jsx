import React from 'react'
import heroImage from '../assets/images/1.jpg'
import { PiLineVertical } from "react-icons/pi";
import { FiCalendar } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { useOutletContext } from 'react-router';




const HeroSection = () => {


    const {isTravelModal} = useOutletContext()


    return (
        <div className='relative h-screen'>
            <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }} />
            <div className="absolute inset-0 bg-black/50" />
            <div className='relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 place-items-center  h-full z-10 p-20 md:p-6 '>
                <div className='flex flex-col gap-2 md:gap-5'>
                    <h1 className="text-white text-4xl sm:text-6xl  md:text-7xl lg:text-8xl font-serif">Collect Your</h1>
                    <h1 className="text-[#c5a059] text-4xl sm:text-6xl italic md:text-7xl lg:text-8xl  font-serif ">World.</h1>
                    <div className='flex items-center gap-5 mt-2'>
                        <div className='flex flex-col'>
                            <p className='text-[#c5a059] text-lg md:text-2xl md:text-3xl'>24</p>
                            <p className='text-gray-400 uppercase text-xs'>Countries</p>
                        </div>
                        <PiLineVertical className='text-gray-400 text-3xl' />
                        <div className='flex flex-col'>
                            <p className='text-[#c5a059] text-lg md:text-2xl md:text-3xl'>58</p>
                            <p className='text-gray-400 uppercase text-xs'>Trips</p>
                        </div>
                        <PiLineVertical className='text-gray-400 text-3xl' />
                        <div className='flex flex-col'>
                            <p className='text-[#c5a059] text-lg md:text-2xl md:text-3xl'>134</p>
                            <p className='text-gray-400 uppercase text-xs'>Days</p>
                        </div>
                    </div>
                    <div onClick={() => isTravelModal(true)} className='cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 mt-5 mx-auto md:mx-0 w-[200px] border border-gray-400 px-6 py-2 rounded-3xl text-gray-300 text-sm'>Add New Adventure</div>
                </div>
                <div className='relative flex flex-col gap-4 md:gap-8 p-8 backdrop-blur rounded-2xl text-white border border-gray-600 w-[270px] sm:w-[300px] md:w-[350px] lg:w-[450px]'>
                    <h1 className='font-serif text-3xl'>Norway</h1>
                    <div className='flex items-center gap-2 text-xs text-gray-400'>
                        <FiCalendar />
                        <span>Oct 12 - Oct 24, 2023</span>
                    </div>
                    <img className='rounded-2xl object-cover w-full h-full' src="https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg" alt="" />
                    <p className='italic text-xs text-gray-400'>Norway kuzey ışıkları</p>
                    <div className='bg-white py-2 px-3 rounded-2xl flex items-center justify-center gap-2 text-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-105'>
                        <p className='text-sm'>View Journal</p>
                        <BsArrowRight />
                    </div>
                    <p className='bg-[#c5a059] py-1 px-3 rounded-2xl uppercase text-black text-xs absolute top-3 right-3 font-semibold'>Latest Adventure</p>
                </div>
            </div>


        </div>
    )
}

export default HeroSection
