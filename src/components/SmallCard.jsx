import React from 'react'

const SmallCard = ({trip}) => {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
      <img
        src={trip.image}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <p className="absolute bottom-3 left-3 text-white font-semibold text-xl md:text-2xl">
        {trip.country}
      </p>
    </div>
  )
}

export default SmallCard
