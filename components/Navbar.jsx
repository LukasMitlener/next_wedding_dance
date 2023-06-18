'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { Link, animateScroll as scroll } from 'react-scroll'
import { FaFacebookSquare } from 'react-icons/fa';
import { BsFillEnvelopeFill } from 'react-icons/bs';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="absolute w-full z-30 sm:px-16 px-6 py-8"
  >
    
    <div
      className="mx-auto  flex justify-between gap-8"
    > <div className='relative flex flex-row w-60'>

        <h2 className="font-parisienne text-bg-color text-[40px] md:text-[60px] flex items-center">
          Svatební tance
        </h2>
      </div>
      <ul className="font-bold flex items-center mt-4 space-x-6 sm:mt-0">
        <li className='text-bg-color text-2xl hover:text-gray-200'><Link to="lektorka" smooth={true} duration={500}>Lektorka</Link></li>
        <li className='text-bg-color text-2xl hover:text-gray-200'><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
        <li className='text-bg-color text-2xl hover:text-gray-200'><Link to="pricing" smooth={true} duration={500}>Ceník</Link></li>
        <li className='text-bg-color text-2xl hover:text-gray-200'><Link to="pricing" smooth={true} duration={500}>Kontakt</Link></li>
        <a className="text-lg" href="mailto:svatebnitance@gmail.com">
          <BsFillEnvelopeFill size={34} style={{ color: 'white' }} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100092820558697" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare size={32} style={{ color: '#fffff8' }} />
        </a>
      </ul>

    </div>
  </motion.nav>
);

export default Navbar;