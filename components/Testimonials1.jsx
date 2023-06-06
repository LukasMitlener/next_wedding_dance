'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';


const Testimonials = () => {
  return (
    <section className="w-full mt-24 bg-h-color/30">
        
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-[1240px] mx-auto px-12 py-20 text-center"
        >

            <motion.h1 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-3 mb-10 text-xl font-extrabold text-black md:leading-snug md:text-3xl"
            >
                "Páju bychom chtěli doporučit všem, kteří by rádi převapili své svatební hosty originálním tancem. 
                Je velká profesionálka, pomohla nám s výběrem hudby a "ušila" nám tanec přímo na míru. 
                Byla jsem těhotná a manžel není pohybově úplně nadaný a i přesto byl výsledek skvělý. 
                Hosté po ukončení tance skandovali "opakovat...opakovat..." 😃
                Tréninkové hodiny pro nás byly krásným únikem z předsvatebního shonu."
            </motion.h1>

            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
            >
                <p className="text-base font-medium text-gray-200">Kamila&Filip</p>
                <p className="text-xs font-medium text-gray-400">Účastníci kurzu</p>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Testimonials