'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import Image from 'next/image'
import paja from '../public/pajamin.jpg'

const About = () => {
  return (
    <div name='about' className='w-full mt-24'>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className='max-w-[1240px] mx-auto px-12'
      >
        <div className='px-4 py-12'>
          <h2>
              <span className="bg-transparent bg-clip-border font-bold xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r from-teal-400 to-rose-300">CO NABÍZÍM</span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 space-y-12'>
            <div className='flex flex-col justify-center md:items-start w-full'>
              <motion.img 
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className='w-full object-cover rounded-lg' src={paja} alt="lyže Jove u Baltu" >

              </motion.img>
            </div>
            <motion.div 
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className='px-0 md:px-10'
            >
              
                <p>Mou snahou a cílem bylo vyrobit kolečkové lyže pro skate, 
                  které odpovídají pocitově lyžování na sněhu a dá se na nich 
                  jezdit kdekoliv při bezúdržbovém provozu.  
                  Především je to výhoda ježdění na špatných cestách 
                  s využitím brzd. Toto je také zákazníky oceňováno.
                </p>
                <br />

                <p>Kolečkové lyže s volnoběžkovými ložisky umožňující odraz. 
                  Přední kolečka se točí pouze dopředu, jsou to vlastně 
                  kolečkové lyže kombi. Simulace bruslařské techniky na klasických
                  kolečkových lyžích je možná a vzhledem k případné montáži brzd 
                  prakticky umožňují přejezdy všech profilů a kvality cest bez 
                  nutného svážení lyžaře z kopce dolů autem atd. Na těchto lyžích, 
                  i když jsou delší je možné i bruslit. Vzhledem k 100% odrazu 
                  z předního kolečka, se může vytvářet u lyžařů syndrom pozdního 
                  odrazu a kazit se technika na klasiku na sněhu. Proto raději 
                  doporučuji kolečkové lyže na skate, kde je technika běhu téměř 
                  totožná s jízdou na lyžích v zimě
                </p>
                <br />

                <p>
                  Lyže prošli zátěžovou zkoužkou, když se mnou ujeli 500Km k Baltu a zpět. <br /> <br /><a href="https://www.youtube.com/watch?v=av3Dsnsy-3s&ab_channel=lyzeJOVE" className="text-main-blue" title='500km k Baltu na kolečkových lyžích JOVE'>Více ve videu</a>
                </p>
              
            </motion.div>
        </div>

        
      </motion.div>  
    </div>
  );
};

export default About;