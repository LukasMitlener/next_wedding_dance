'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import foto from '../public/wedd.png'

const About = () => {
  return (
    <div name='about' className='w-full mt-12 md:mt-24'>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='max-w-[1440px] mx-auto px-6 md:px-12 space-y-36'
      >
        


        <div className='grid md:grid-cols-2 space-y-6 md:space-y-0'>
          <div className='px-0 md:px-10 my-auto'>
            <p className='text-justify mb-3'><span className='font-bold'>Udělejte svojí svatbu ještě více jedinečnou.</span> Překvapte svatebčany originálním tanečním vystoupením, které rozproudí svatební atmosféru!</p>
            <p className='text-justify mb-3'>Chcete vytvořit svatební tanec <span className='font-bold'>ušitý Vám dvěma na míru?</span></p>
            <p className='text-justify mb-3'>Nevěsty, chcete překvapit svého nastávajícho <span className='font-bold'>půlnočním tanečním překvapením</span>, třeba i v obklopení družiček?</p>
            <p className='text-justify mb-3'>Máte radši <span className='font-bold'>netradiční, zábavné a moderní tance</span>, které udělají z vašeho svatebního dne jedinečný zážitek nejen pro vás dva, ale i pro vaše hosty?</p>
            <p className='text-justify mb-3'><span className='font-bold'>Pak jste na správném místě!</span></p>
            <p className='text-justify mb-3'><span className='font-bold'>Co nabízíme?</span></p>
            <ul className='list-disc ml-5'>
              <li className='text-gray-700 text-justify mb-3'>Svatební tance na míru vytvořené z <span className='font-bold'>různých tanečních stylů</span> (od hip-hopu až po lidové tance)</li>
              <li className='text-gray-700 text-justify mb-3'><span className='font-bold'>Vytvoření hudebního mixu dle Vašich představ</span>, případně můžeme playlist navrhnout sami</li>
              <li className='text-gray-700 text-justify mb-3'><span className='font-bold'>Zkušenou taneční lektorku</span>, která vás naučí nejen nové kroky, ale také jak tancovat s radostí a sebevědomím a přizpůsobí tanec vaší taneční úrovni.</li>
            </ul>
            
          </div>
          <div className='flex flex-col justify-center md:items-start w-full'>
            <motion.img
              initial={{
                x: +200,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src={foto.src}
              alt="profile picture"
              className="rounded-lg object-cover md:h-full lg:h-[600px]"
              
            ></motion.img>
          </div>
        </div>
      </motion.div>  
    </div>
  );
};

export default About;