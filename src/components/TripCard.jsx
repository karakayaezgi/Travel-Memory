import React from 'react'
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Link } from 'react-router';

const TripCard = ({ trip }) => {
    return (
        <Link to={`/trips/${trip.id}`} className='relative h-[400px] rounded-2xl cursor-pointer transition-all ease-in-out duration-300 hover:scale-105'>
            <img className='w-full h-full object-cover rounded-2xl' src={trip.image} alt={trip.place} />
            <div className='absolute bottom-2 left-2 text-white'>
                <p className='text-2xl font-bold'>{trip.country}</p>
                <p className='text-[10px]'>{trip.place}</p>
            </div>
            <GoHeart className='absolute top-2 right-2 size-6 text-white' />
            <GoHeartFill className='absolute top-2 right-2 size-5 text-red-700 hidden' />
        </Link>
    )
}

export default TripCard
