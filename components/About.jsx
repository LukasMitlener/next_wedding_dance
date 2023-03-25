'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import paja from '../public/pajamin.jpg'

const About = () => {
  return (
    <div name='about' className='w-full mt-24'>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='max-w-[1240px] mx-auto px-12'
      >
        <div className='px-4 py-12'>
          <h2>
              <span className="uppercase bg-transparent bg-clip-border font-black xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r from-green-400 to-purple-500">Co nabízím?</span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 space-y-12'>
            <div className='flex flex-col justify-center md:items-start w-full'>
              <motion.img 
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className='w-full object-cover rounded-lg' 
                src="https://scontent.fprg4-1.fna.fbcdn.net/v/t31.18172-8/17854704_10208702283216248_1090032344822088610_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=iDVopEwqeq8AX_OjLrE&_nc_ht=scontent.fprg4-1.fna&oh=00_AfDUXuObRoJ2HqQj6qDatmi4TBTye6x8fKbS2Hukp5dxvg&oe=6425682C"
                alt="profilové foto" >
              </motion.img>
            </div>
            <div className='px-0 md:px-10'>
              <p>
                Už žádné nudné, předvídatelné svatební tance! Naše originální kurzy nabízejí zábavné taneční rutiny, které svatebčany nejen zaujmou, ale také roztancují. 💃
              </p>
              
              <br />
              <p>
                Hledáte něco, co překvapí vaše hosty a roztancuje celou svatební společnost? Pak jste na správném místě! Přinášíme kurzy na netradiční, zábavné a moderní svatební tance, které udělají z vašeho svatebního dne ten nejlepší zážitek. 🕺💃
              </p>
              <br />
              <p>
                💥 Co nabízíme? 💥
                <br />
                Svatební tance na míru: Vyberte si z našeho širokého repertoáru tanečních stylů, od hip-hopu a elektronické hudby až po pop, nebo nám navrhněte vlastní taneční směs!
                Profesionální taneční lektorka: Naši zkušení tanečníci vás a vaše hosty naučí nejen nové kroky, ale také jak tancovat s radostí a sebevědomím.
                Taneční scénky: Překvapte svatebčany originálními tanečními vystoupeními, které rozproudí atmosféru a vtáhnou i ty nejzdráhavější hosty do tance!
                🌟 Proč si zvolit náš kurz? 🌟

                Nezapomenutelný zážitek: Zajistíme, že váš svatební den bude skutečně jedinečný a neopakovatelný.
                Flexibilita: Nabízíme kurzy pro různé úrovně zkušeností, od začátečníků až po pokročilé tanečníky.
                Personalizace: Vytváříme taneční program přesně podle vašich přání a potřeb.
                Spokojenost zákazníků: Naše reference a ohlasy zákazníků hovoří samy za sebe.
                Nenechte si ujít šanci proměnit váš svatební den v nezapomenutelný zážitek plný zábavy a radosti! 🎊
              </p>
            </div>
        </div>

        
      </motion.div>  
    </div>
  );
};

export default About;