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
            className="max-w-[980px] mx-auto px-6 md:px-12 py-6 text-center"
        >

            <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="flex flex-col items-center mt-3 mb-4 font-semibold"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-20 h-20 text-bg-color mb-4">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
                <p className='text-2xl font-semibold text-gray-800'>
                    Páju bychom chtěli doporučit všem, kteří by rádi převapili své svatební hosty originálním tancem. 
                    Je velká profesionálka, pomohla nám s výběrem hudby a "ušila" nám tanec přímo na míru. 
                    Byla jsem těhotná a manžel není pohybově úplně nadaný a i přesto byl výsledek skvělý. 
                    Hosté po ukončení tance skandovali "opakovat...opakovat..." 😃
                    Tréninkové hodiny pro nás byly krásným únikem z předsvatebního shonu.
                </p>
            </motion.div>

            <motion.div
                variants={fadeIn('up', 'tween', 0.3, 1)}
            >
                <p className="text-2xl pb-4 font-medium text-gray-800">Kamila & Filip ❤️</p>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Testimonials