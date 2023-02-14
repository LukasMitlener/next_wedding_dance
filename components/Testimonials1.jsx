'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const Testimonials = () => {
  return (
    <section className="bg-gray-900">
        <div className="gradient-02 z-0" />
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="w-full px-4 py-20 mx-auto text-center max-w-7xl md:w-4/5 lg:w-4/6"
        >

            <motion.h1 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-3 mb-10 text-xl font-extrabold text-white md:leading-snug md:text-3xl"
            >
                “Implementation is a breeze, particularly because the team at Hellonext is
                <span className="bg-transparent bg-clip-border xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r from-green-400 to-purple-500"> very fast to respond and help </span>
                where needed, even if it means rolling out new features on their platform.  We're super happy and are loving how Hellonext brings us closer to the members of our community“
            </motion.h1>

            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
            >
                <div className="mx-auto mb-3 h-24 w-24 rounded-full object-cover shadow-lg"><img src="https://scontent.fprg4-1.fna.fbcdn.net/v/t39.30808-6/314716455_10227882831840304_8484623534451319056_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uzlJlZeLX1QAX8__bDT&_nc_ht=scontent.fprg4-1.fna&oh=00_AfBlKYs3lZENrIV1Qcim4tOadwF5xBhuuF4Ue6u-nG4_ag&oe=63EC93E6" alt="Kamila" /></div>
                <p className="text-base font-medium text-gray-200">Kamča</p>
                <p className="text-xs font-medium text-gray-400">CEO, Birds</p>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Testimonials