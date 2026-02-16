import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router';
const MobileModal = ({closeModal}) => {
    return (
        <div className='bg-white top-0 right-0 absolute h-screen w-[250px] sm:w-[400px] p-5'>
            <div className='flex items-center justify-between'>
                <strong className='text-2xl'>Menu</strong>
                <IoCloseOutline onClick={closeModal} className='size-6 cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-5 my-10'>
                <NavLink to="/trips">Experiences</NavLink>
                <NavLink to="favorites">Favorites</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    )
}

export default MobileModal
