'use client';

import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { Link, animateScroll as scroll } from 'react-scroll'
import { FaFacebookSquare } from 'react-icons/fa';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleClose =()=> setNav(!nav)


  return(
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="absolute w-full z-30 px-6 py-6"
    >
      
        <div className="mx-auto flex justify-between items-center"> 
          <div className='flex flex-row w-100'>
            <h2 className="font-parisienne text-bg-color text-[40px] md:text-[44px]">
              Svatební tance
            </h2>
          </div>

          <div className='hidden md:flex font-semibold'>
            <ul className='font-bold flex items-center  text-2xl'>
              <li className='text-xl pr-4 hover:text-main-blue'><Link to="lektorka" smooth={true} duration={500}>Lektorka</Link></li>
              <li className='text-xl pr-4 hover:text-main-blue'><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
              <li className='text-xl pr-4 hover:text-main-blue'><Link to="pricing" smooth={true} duration={500}>Ceník</Link></li>
              <li className='text-xl pr-4 hover:text-main-blue'><Link to="kontakt" smooth={true} duration={500}>Kontakt</Link></li>
              <a className="pr-4" href="mailto:svatebnitance@gmail.com">
                <BsFillEnvelopeFill size={28} style={{ color: 'white' }} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100092820558697" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare size={25} style={{ color: '#fffff8' }} />
              </a>
            </ul>
          </div>

          <div className='md:hidden' onClick={handleClick}>
            <FiMenu className={`${!nav ? 'block' : 'hidden'} w-12 h-12 text-bg-color`} />
            <AiOutlineClose className={`${nav ? 'block' : 'hidden'} w-12 h-12 text-bg-color`} />
          </div>
        </div>

        <ul className={!nav ? 'hidden' : 'block'}>
          <li className='text-bg-color text-2xl hover:text-gray-200'><Link onClick={handleClose} to="lektorka" smooth={true} duration={500}>Lektorka</Link></li>
          <li className='text-bg-color text-2xl hover:text-gray-200'><Link onClick={handleClose} to="blog" smooth={true} duration={500}>Blog</Link></li>
          <li className='text-bg-color text-2xl hover:text-gray-200'><Link onClick={handleClose} to="pricing" smooth={true} duration={500}>Ceník</Link></li>
          <li className='text-bg-color text-2xl hover:text-gray-200'><Link onClick={handleClose} to="pricing" smooth={true} duration={500}>Kontakt</Link></li>
          <a className="text-lg" href="mailto:svatebnitance@gmail.com">
            <BsFillEnvelopeFill size={34} style={{ color: '#fffff8' }} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092820558697" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={32} style={{ color: '#fffff8' }} />
          </a>
        </ul>
      
    </motion.nav>
  );
};

export default Navbar;