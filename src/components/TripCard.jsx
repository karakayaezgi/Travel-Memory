import React from 'react'
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Link, useOutletContext } from 'react-router';

const TripCard = ({ trip }) => {

    const { favoriteTripIds, setFavoriteTripIds } = useOutletContext()

    const isFavorite = favoriteTripIds.includes(trip.id)

    const handleToggleFavorite = () => {
        setFavoriteTripIds((prev) =>
            prev.includes(trip.id) ? prev.filter(id => id !== trip.id) : [...prev, trip.id]
        )
    }


    return (
        <div className='relative rounded-2xl cursor-pointer transition-all ease-in-out duration-300 hover:scale-105 h-[400px]'>
            <Link to={`/trips/${trip.id}`}>
                <img className='w-full h-full object-cover rounded-2xl' src={trip.image} alt={trip.place} />
                <div className='absolute bottom-2 left-2 text-white'>
                    <p className='text-2xl font-bold'>{trip.country}</p>
                    <p className='text-[10px]'>{trip.place}</p>
                </div>
            </Link>
            {
                isFavorite
                    ? <GoHeartFill onClick={handleToggleFavorite} className='absolute top-2 right-2 size-6 text-red-700' />
                    : <GoHeart onClick={handleToggleFavorite} className='absolute top-2 right-2 size-6 text-white' />
            }
        </div>
    )
}

export default TripCard
