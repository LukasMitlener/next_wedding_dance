'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const Lektorka = () => {
  return (
    <div name='lektorka' className='w-full mt-12 md:mt-28'>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='max-w-[900px] mx-auto px-6 md:px-12'
      >
        
        <div className='px-4 py-12'>
          <h2>
              <span className="uppercase tracking-[20px] bg-clip-border font-black"><span className='text-h-color'>naše</span> lektorka</span>
          </h2>
        </div>

        
        <div className='px-0 md:px-10'>
          <p className='text-justify mb-3'>"Jmenuji se Pavlína Vejnarová, je mi 34 let, jsem taneční lektorka z Prahy a moc ráda se budu podílet na Vašem jedinečném svatebním dnu ❤️</p>
          <p className='text-justify mb-3'>Ke každému páru přistupuji individuálně dle Vašich požadavků a přání a věřím, že společně natrénujeme svatební tanec, s kterým budete spokojeni a který si dokážete na svatbě užít. </p>
          <p className='text-justify mb-3'>Aktuálně účinkuji v pražských muzikálech v divadle Kalich (Krysař), Hybernia (Galileo, Mefisto), v Kongresovém centru (Děti ráje), kde jsem byla též asistentkou choreografky. </p>
          <p className='text-justify mb-3'>Tancuji od svého raného dětství. Během svého života jsem prošla snad vsemi tanečním styly. Nejvíce mě oslovuje contemporary a street dance. Od svých 14 let jsem taneční lektorkou, a tedy mám bohaté zkušenosti s výukou tance.</p>
          <p className='text-justify mb-3'>Mám za sebou velkolepé show a taneční reklamy. Tancovala jsem po boku např. Evy Farné, Janka Ledeckého, Jiřího Korna, Pepy Vojtka, Ilony Csákové a dalších.</p>
          <p className='text-justify mb-6'>Těším se na vás ❤️"</p>
          <div className="pt-[56.25%] embed-responsive-16by9 relative w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full "
              src="https://www.youtube.com/embed/7EdZehz4T0E"
              allowFullScreen>
            </iframe>
          </div>
        </div>

      </motion.div>  
    </div>
  );
};

export default Lektorka;