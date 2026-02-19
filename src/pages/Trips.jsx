import React from 'react'
import TripList from '../components/TripList'
import experiencesBg from '../assets/images/2.jpg'


const Trips = () => {





  return (
    <div>
      <div className='relative h-screen'>
        <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${experiencesBg})` }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className='relative text-center h-full grid place-items-center'>
          <div className='px-10 flex flex-col gap-5'>
            <strong className="text-[#c5a059] tracking-widest text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif ">Moments That Became Memories.</strong>
            <p className='text-gray-300 italic text-lg sm:text-xl  md:text-2xl lg:text-3xl'>From small escapes to grand adventures, each experience holds a piece of your story.</p>
          </div>
        </div>
      </div>
      <TripList />
    </div>
  )
}

export default Trips
