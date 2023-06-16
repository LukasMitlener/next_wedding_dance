'use client';

import Image from 'next/image';
import wedding from "../public/wedd2.png"
import Navbar1 from './Navbar1';


const Hero = () => (
  <div className='relative'>
    <Navbar1 />
    <div className="top-0 left-0 w-full h-full bg-cover bg-center">
      <Image
        src={wedding}
        alt="hero_cover"
        className="relative w-full h-[500px] lg:h-screen object-cover z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-20"></div>
      <div className="flex justify-center items-center flex-col relative z-30">
        <h1 className="absolute bottom-1 parisienne font-parisienne font-bold lg:text-[96px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] text-bg-color">
          Tančete svou lásku!
        </h1>
      </div>
    </div>
  </div>
);

export default Hero;