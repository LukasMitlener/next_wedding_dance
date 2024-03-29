'use client';

import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="py-12 relative"
  >
    
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-8">
      

      <div className="flex flex-col">
        <div className="my-12 h-[2px] bg-h-color" />

        <div className="flex justify-center items-center md:justify-between flex-wrap gap-4">
          <h4 className="font-great-vibes font-extrabold text-[40px] text-h-color">
            Svatební tance
          </h4>
          <p className="font-normal text-[14px] text-gray-700 opacity-50">
          COPYRIGHT © 2023 SVATEBNÍ TANCE
          </p>
          <div className='flex flex-row space-x-4'>
            <a href="https://www.facebook.com/profile.php?id=100092820558697" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={40} style={{ color: '#8BD6D6' }}/>
            </a>
            <a href="https://www.instagram.com/svatebni.tance/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size={40} style={{ color: '#8BD6D6' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
