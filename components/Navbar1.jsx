'use client';

import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { FaFacebookSquare } from 'react-icons/fa';

const Navbar1 = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="absolute w-full z-20 sm:px-16 px-6 py-8"
  >
    
    <div
      className="lg:w-[80%] w-[100%] mx-auto flex justify-between gap-8"
    > <div className='relative flex flex-row w-60'>
        {/* <div className='absolute  flex items-center top-0'>
          <Image src={logo} alt='/' style={{ width: '54px'}} />
        </div> */}
        <h2 className="font-parisienne font-extrabold text-white text-[40px] flex items-center leading-[-10px] ">
          Svatební tance
        </h2>
      </div>
      {/* 💑 ❤️💒 🤵 👰 💐 😊 😂 🥰 */}
      
      
      <div className="flex items-center mt-4 space-x-2 sm:mt-0">
        <div>
          <a className="text-white hover:text-gray-700 mx-3" href="#">Nabídka</a>
          <a className="text-white hover:text-gray-700 mx-3" href="#">Blog</a>
          <a className="text-white hover:text-gray-700 mx-3" href="#">Ceník</a>
        </div>
        <a href="https://www.facebook.com/profile.php?id=100092820558697" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare size={32} />
        </a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar1;