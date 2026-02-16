import React from 'react'

const SmallCard = () => {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
      <img
        src="https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <p className="absolute bottom-3 left-3 text-white font-semibold text-xl md:text-2xl">
        Thailand
      </p>
    </div>
  )
}

export default SmallCard
