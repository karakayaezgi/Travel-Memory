import React from 'react'
import { motion } from "framer-motion"
const BigCard = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 2,
                ease: [0.4, 1, 0.6, 1]
            }}
            viewport={{ once: false, amount: 0.3 }} className='relative overflow-hidden'>
            <img className='rounded-2xl object-cover w-full h-full' src="https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg" alt="" />
            <p className='text-white text-3xl md:text-4xl absolute left-3 bottom-3 font-semibold'>Thailand</p>

        </motion.div>
    )
}

export default BigCard
