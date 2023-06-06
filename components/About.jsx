'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import foto from '../public/wedd5.png'

const About = () => {
  return (
    <div name='about' className='w-full mt-24'>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='max-w-[1240px] mx-auto px-12'
      >
        
        <div className='px-4 py-12'>
          <h2>
              <span className="uppercase tracking-[20px] bg-clip-border font-black ">Co nabízíme?</span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 space-y-12'>
            <div className='flex flex-col justify-center md:items-start w-full'>
              <motion.img
                initial={{
                  x: -200,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={foto.src}
                alt="profile picture"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
              ></motion.img>
            </div>
            <div className='px-0 md:px-10'>
              <p className='text-justify mb-3'><span className='font-bold'>Tančete svou lásku! 💃🕺</span></p>
              <p className='text-justify mb-3'><span className='font-bold'>Udělejte svojí svatbu ještě více jedinečnou.</span> Překvapte svatebčany originálním tanečním vystoupením, které rozproudí svatební atmosféru!</p>
              <p className='text-justify mb-3'>Chcete vytvořit svatební tanec <span className='font-bold'>ušitý Vám dvěma na míru?</span></p>
              <p className='text-justify mb-3'>Nevěsty, chcete překvapit svého nastávajícho <span className='font-bold'>půlnočním tanečním překvapením</span>, třeba i v obklopení družiček?</p>
              <p className='text-justify mb-3'>Máte radši <span className='font-bold'>netradiční, zábavné a moderní tance</span>, které udělají z vašeho svatebního dne jedinečný zážitek nejen pro vás dva, ale i pro vaše hosty?</p>
              <p className='text-justify mb-3'><span className='font-bold'>Pak jste na správném místě!</span></p>
              <p className='text-justify mb-3'><span className='font-bold'>Doporučujeme alespoň 3 individuální lekce. Cena jedné 1,5 hod. lekce je 1500 Kč.</span></p>
              <p className='text-justify mb-3'><span className='font-bold'>Co nabízíme?</span></p>
              <ul className='list-disc ml-5'>
                <li className='text-justify mb-3'>Svatební tance na míru vytvořené z <span className='font-bold'>různých tanečních stylů</span> (od hip-hopu až po lidové tance)</li>
                <li className='text-justify mb-3'><span className='font-bold'>Vytvoření hudebního mixu dle Vašich představ</span>, případně můžeme playlist navrhnout sami</li>
                <li className='text-justify mb-3'><span className='font-bold'>Zkušenou taneční lektorku</span>, která vás naučí nejen nové kroky, ale také jak tancovat s radostí a sebevědomím a přizpůsobí tanec vaší taneční úrovni.</li>
              </ul>
              <p className='text-justify mb-3'>Neostýchejte se, i pokud jste úplní taneční začátečníci. Lektorka má široké profesionální zkušenosti nejen z muzikálů, jako jsou Krysař, <span className='font-bold'>Děti ráje, Ples upírů, Galileo</span> aj., z velkolepých show nebo i z lektorování tance v největší taneční škole v Praze. Tančila po boku např. <span className='font-bold'>Evy Farné, Pepy Vojtka, Janka Ledeckého nebo Jiřího Korna</span> a dalších.</p>
            </div>
        </div>
      </motion.div>  
    </div>
  );
};

export default About;