'use client';

import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { navVariants } from '../utils/motion';
import Image from 'next/image'
import logo from "../public/logo.png"

const Navbar1 = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="sm:px-16 px-6 py-8 relative"
  >
    
    <div
      className="lg:w-[80%] w-[100%] mx-auto flex justify-between gap-8"
    > <div className='relative flex flex-row w-60'>
        <div className='absolute  flex items-center top-0'>
          <Image src={logo} alt='/' style={{ width: '54px'}} />
        </div>
        <h2 className="absolute right-8 top-3 font-great-vibes font-extrabold text-grey-900 text-[40px] flex items-center leading-[-10px] ">
          Svatební tance
        </h2>
      </div>
      {/* 💑 ❤️💒 🤵 👰 💐 😊 😂 🥰 */}
      
      <div className="flex items-center mt-4 space-x-2 sm:mt-0">
              <SocialIcon 
                        url="https://www.facebook.com"
                        fgColor="#8BD6D6"
                        bgColor="transparent" />
              <SocialIcon 
                        url="https://www.youtube.com/"
                        fgColor="#8BD6D6"
                        bgColor="transparent" />
              <SocialIcon 
                        url="https://www.instagram.com/lukas.mitlener/"
                        fgColor="#8BD6D6"
                        bgColor="transparent" />
      </div>
    </div>
  </motion.nav>
);

export default Navbar1;