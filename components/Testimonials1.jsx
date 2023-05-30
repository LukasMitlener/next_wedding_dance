'use client';
import Image from 'next/image'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import kamca from '../public/kamca.jpg'

const Testimonials = () => {
  return (
    <section className="w-full mt-24 bg-h-color/30">
        
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="max-w-[1240px] mx-auto px-12 py-20 text-center"
        >

            <motion.h1 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-3 mb-10 text-xl font-extrabold text-black md:leading-snug md:text-3xl"
            >
                “Implementation is a breeze, particularly because the team at Hellonext is
                <span className="bg-transparent bg-clip-border xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r from-green-400 to-purple-500"> very fast to respond and help </span>
                where needed, even if it means rolling out new features on their platform.  We're super happy and are loving how Hellonext brings us closer to the members of our community“
            </motion.h1>

            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
            >
                <Image className='mx-auto mb-3 h-24 w-24 rounded-full object-cover shadow-lg'  src={kamca} alt="Kamila" />
                <p className="text-base font-medium text-gray-200">Kamča</p>
                <p className="text-xs font-medium text-gray-400">Účastnice kurzu</p>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Testimonials