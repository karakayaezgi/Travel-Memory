import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { CiCalendar, CiClock1 } from "react-icons/ci";
import { RxDividerVertical } from "react-icons/rx";
import { getFormatDate } from '../utils/formatDate';
import { calculateTotalDaysOfTrip } from '../utils/totalDays'

const TripDetail = () => {

    const { id } = useParams()
    const { trips } = useSelector((store) => store.trip)
    const selectedTrip = trips?.find((trip) => trip.id == id)
    const { country, city, place, startDate, endDate, description, image } = selectedTrip || {}
    const formatDateStart = getFormatDate(startDate)
    const formatDateEnd = getFormatDate(endDate)

    const totalDays = calculateTotalDaysOfTrip(selectedTrip)

    return (
        <div>
            <div className='relative h-screen'>
                <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${image})` }} />
                <div className="absolute inset-0 bg-black/50" />
                <div className='relative h-full'>
                    <div className='absolute bottom-10 left-8'>
                        <p className='font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5'>{country} / {city},</p>
                        <p className='text-[#c5a059] font-serif italic text-3xl sm:text-4xl md:text-5xl'>{place}</p>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800 rounded-2xl mx-4 md:mx-8 my-8 text-white p-4 md:p-5 lg:p-6 flex items-center justify-center md:gap-5'>
                <div className='flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
                    <div className='bg-gray-600 rounded-full p-2'><CiClock1 className='md:size-6 lg:size-7' /></div>
                    <div className='flex flex-col md:gap-2'>
                        <p className='text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg'>Duration</p>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold'>{totalDays} days</p>
                    </div>
                </div>
                <div className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-300'><RxDividerVertical /></div>
                <div className='flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
                    <div className='bg-gray-600 rounded-full p-2'><CiCalendar className='md:size-6 lg:size-7' /></div>
                    <div className='flex flex-col md:gap-2'>
                        <p className='text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg'>Date</p>
                        <p className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold'>{formatDateStart} / {formatDateEnd}</p>
                    </div>
                </div>
            </div>
            <div className="flex w-[300px] sm:w-[350px] md:w-[400px] lg:w-[500px] mx-auto my-20">
                <div className="w-1 bg-gradient-to-b from-yellow-400 to-orange-500 mr-4"><p className='text-yellow-400'>.</p></div>
                <p className="text-gray-700 leading-relaxed">
                    {description}
                </p>
            </div>
            <div className='flex justify-center gap-5'>
                <p className='text-xs py-1 px-3 bg-red-200 text-red-600 rounded-2xl cursor-pointer transition-all ease-in-out duration-200 hover:scale-105'>Remove Trip</p>
                <p className='text-xs py-1 px-3 bg-amber-100 rounded-2xl cursor-pointer transition-all ease-in-out duration-200 hover:scale-105'>Update Trip</p>
            </div>
        </div>
    )
}

export default TripDetail
