import React from 'react'
import { RiCompassDiscoverFill } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { NavLink } from 'react-router';



const Navbar = ({setIsOpenMobileModal}) => {

    return (
       <div className="absolute atop-0 left-0 w-full z-50 flex items-center justify-between text-white p-6">
        <NavLink to="/" className='flex items-center gap-2'>
            <RiCompassDiscoverFill className='size-6 text-[#c5a059]'/>
            <strong>Travel Memory</strong>
        </NavLink>
        <CgMenuGridO onClick={() => setIsOpenMobileModal(true)} className='md:hidden block size-6 cursor-pointer'/>
        <div className='flex items-center gap-12 md:flex hidden tracking-widest'>
            <NavLink to="/trips">Experiences</NavLink>
            <NavLink to="favorites">Favorites</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        
       </div>





    )
}

export default Navbar
