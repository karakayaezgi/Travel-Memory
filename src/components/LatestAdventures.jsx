import React from 'react'
import SmallCard from './SmallCard'
import BigCard from './BigCard'
import { motion } from 'framer-motion'

const LatestAdventures = () => {



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
                    <SmallCard />
                    <SmallCard />

                </motion.div>
                <BigCard />
                <motion.div initial={{ opacity: 0, x: 120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 2,
                        ease: [0.4, 1, 0.6, 1]
                    }}
                    viewport={{ once: false, amount: 0.3 }} className='grid grid-cols-2 md:grid-cols-1 gap-3'>
                    <SmallCard />
                    <SmallCard />

                </motion.div>
            </div>
        </div >
    )
}

export default LatestAdventures
