'use client';

import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar1 = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-secondary-color">
        SVATEBNÍ TANCE
      </h2>
      {/* 💑 ❤️💒 🤵 👰 💐 😊 😂 🥰 */}
      
      <div className="flex items-center mt-4 space-x-2 sm:mt-0">
              <SocialIcon 
                        url="https://www.facebook.com"
                        fgColor="#8D5CC7"
                        bgColor="transparent" />
              <SocialIcon 
                        url="https://www.youtube.com/"
                        fgColor="#8D5CC7"
                        bgColor="transparent" />
              <SocialIcon 
                        url="https://www.instagram.com/lukas.mitlener/"
                        fgColor="#8D5CC7"
                        bgColor="transparent" />
      </div>
    </div>
  </motion.nav>
);

export default Navbar1;