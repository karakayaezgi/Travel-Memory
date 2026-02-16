import React, {useEffect, useState} from 'react'
import { Outlet } from "react-router"
import Navbar from './Navbar'
import Footer from './Footer'
import MobileModal from './MobileModal';
import AddModal from './AddModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/slices/locationSlice';


const Layout = () => {

    const [isOpenMobileModal, setIsOpenMobileModal] = useState(false)
    const [isTravelModal, setIsTravelModal] = useState(false)
    const dispatch = useDispatch()
    const {countries} = useSelector((store) => store.location)

    useEffect(() => {
        dispatch(fetchCountries())
        
    },[])
    
    

    return (
        <div className="flex flex-col relative" >
            <Navbar setIsOpenMobileModal={setIsOpenMobileModal} />
            <main>
                <Outlet context={{isTravelModal: setIsTravelModal}}/>
            </main>
            <Footer />
            {
                isOpenMobileModal && <div className='fixed inset-0 backdrop-blur-sm bg-black/20 z-50'>
                    <MobileModal closeModal={() => setIsOpenMobileModal(false)}/>
                </div>
            }
            {
                isTravelModal && 
                    <div className='fixed inset-0 backdrop-blur-sm bg-black/20 z-50 grid place-items-center'>
                        <AddModal countries={countries} setIsTravelModal={setIsTravelModal} />
                    </div>
                
            }
        </div>
    )
}

export default Layout
