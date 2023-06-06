'use client';

import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="sm:px-16 px-6py-8 relative"
  >
    
    <div className="max-w-[1240px] mx-auto flex flex-col gap-8">
      

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-great-vibes font-extrabold text-[32px] text-h-color">
            Svatební tance
          </h4>
          <p className="font-normal text-[14px] text-grey-700 opacity-50">
            Copyright © 2023 Svatební tance. All rights reserved.
          </p>

          <div className="flex gap-2">
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
      </div>
    </div>
  </motion.footer>
);

export default Footer;
