import React from 'react'
import tripImage from '../assets/images/3.jpg'

const TripCard = ({trip}) => {
    return (
        
            <div className='relative h-[400px] rounded-2xl cursor-pointer transition-all ease-in-out duration-300 hover:scale-105'>
                <img className='w-full h-full object-cover rounded-2xl' src={trip.image} alt={trip.place} />
                <div className='absolute bottom-2 left-2 text-white'>
                    <p className='text-2xl font-bold'>{trip.country}</p>
                    <p className='text-[10px]'>{trip.place}</p>
                </div>
            </div>
       
    )
}

export default TripCard
