'use client';

import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { Link, animateScroll as scroll } from 'react-scroll'
import { FaFacebookSquare } from 'react-icons/fa';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';


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

          <div className='hidden md:flex'>
            <ul className='hidden md:flex font-semibold items-center text-2xl'>
              <li className='text-xl pr-4 hover:text-main-blue'><Link to="lektorka" smooth={true} duration={500}>Lektorka</Link></li>
              <li className='text-xl pr-4 hover:text-main-blue'><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
              <li className='text-xl pr-4 hover:text-main-blue'><Link to="pricing" smooth={true} duration={500}>Ceník</Link></li>
              <li className='text-xl pr-8 hover:text-main-blue'><Link to="cta" smooth={true} duration={500}>Kontakt</Link></li>
              <a className="pr-4" href="mailto:svatebnitance@gmail.com">
                <BsFillEnvelopeFill size={29} style={{ color: '#fffff8' }} />
              </a>
              <a className="pr-4" href="https://www.facebook.com/profile.php?id=100092820558697" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare size={26} style={{ color: '#fffff8' }} />
              </a>
              <a href="https://www.instagram.com/svatebni.tance/" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram size={31} style={{ color: '#fffff8' }} />
              </a>
            </ul>
          </div>

          <div className='md:hidden' onClick={handleClick}>
          {!nav ? <FiMenu className='w-12 h-12 text-bg-color' /> : <AiOutlineClose className='w-12 h-12 text-bg-color bg-[#070506]' />}
          </div>
        </div>

        <ul className={!nav ? 'hidden' : 'bg-main-light w-full px-8'}>
          <li className='text-bg-color text-2xl hover:text-gray-200'><Link onClick={handleClose} to="lektorka" smooth={true} duration={500}>Lektorka</Link></li>
          <li className='text-bg-color text-2xl hover:text-gray-200'><Link onClick={handleClose} to="blog" smooth={true} duration={500}>Blog</Link></li>
          <li className='text-bg-color text-2xl hover:text-gray-200'><Link onClick={handleClose} to="pricing" smooth={true} duration={500}>Ceník</Link></li>
          <li className='text-bg-color text-2xl hover:text-gray-200'><Link onClick={handleClose} to="cta" smooth={true} duration={500}>Kontakt</Link></li>
          <div className='flex flex-row space-x-4 mt-2'>
            <a href="https://www.facebook.com/profile.php?id=100092820558697" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare size={31} style={{ color: '#fffff8' }} />
            </a>

            <a href="https://www.instagram.com/svatebni.tance/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size={32} style={{ color: '#fffff8' }} />
            </a>
          </div>
        </ul>
      
    </motion.nav>
  );
};

export default Navbar;