import React, { useEffect } from 'react'
import SmallCard from './SmallCard'
import BigCard from './BigCard'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { getTrip } from '../redux/slices/tripSlice'

const LatestAdventures = () => {

    
    const dispatch = useDispatch()
    const { trips } = useSelector((store) => store.trip)



    useEffect(() => {
        dispatch(getTrip())
    },[])
    
    const latestAdventures = trips.slice(-5) || []



    return (
        <div className='bg-gray-100 rounded-2xl p-8 m-5'>
            <h1 className='text-3xl md:text-4xl my-10 text-center font-semibold'>Latest Adventures</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 '>
                <motion.div initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 2,
                        ease: [0.4, 1, 0.6, 1]
                    }}
                    viewport={{ once: false, amount: 0.3 }} className='grid grid-cols-2 md:grid-cols-1 gap-3'>
                    { 
                        latestAdventures.slice(0,2).map((trip) => (
                            <SmallCard key={trip.id} trip={trip}/>
                        ))
                    }

                </motion.div>
                {
                    latestAdventures && <BigCard trip={latestAdventures[2]}/>
                }
                <motion.div initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 2,
                        ease: [0.4, 1, 0.6, 1]
                    }}
                    viewport={{ once: false, amount: 0.3 }} className='grid grid-cols-2 md:grid-cols-1 gap-3'>
                    {
                        latestAdventures.slice(3,5).map((trip) => (
                            <SmallCard key={trip.id} trip={trip}/>
                        ))
                    }

                </motion.div>
            </div>
        </div >
    )
}

export default LatestAdventures
