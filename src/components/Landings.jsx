import React from 'react'

const Landings = ({backgroundImage, title, description}) => {
    return (
        <div>
            <div className='relative h-screen'>
                <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }} />
                <div className="absolute inset-0 bg-black/50" />
                <div className='relative text-center h-full grid place-items-center'>
                    <div className='px-10 flex flex-col gap-5'>
                        <strong className="text-[#c5a059] tracking-widest text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif ">{title}</strong>
                        <p className='text-gray-300 italic text-lg sm:text-xl  md:text-2xl lg:text-3xl'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landings
