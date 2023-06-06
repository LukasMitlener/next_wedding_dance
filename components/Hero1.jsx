'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import wedding from "../public/wedd.png"
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero1 = () => (
  <section className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="xl:max-w-[1280px] w-full mx-auto flex flex-col"
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className="font-great-vibes font-bold lg:text-[96px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] text-grey-700">
          Tančete svou lásku! ❤️
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        

        <Image
          src={wedding}
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />


      </motion.div>
    </motion.div>
  </section>
);

export default Hero1;