'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';


const Testimonials = () => {
  return (
    <section className="w-full mt-24 ">
        
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full mx-auto px-6 md:px-6 py-12 text-center bg-h-color/30"
        >

            <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="max-w-[980px] mx-auto flex flex-col items-center mt-4 mb-6 font-semibold"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-20 h-20 text-bg-color mb-4">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
                <p className='text-lg md:text-xl font-semibold text-gray-800'>
                Pavlínku můžeme doporučit všema deseti! Připravila nám krásnou choreografii, kdy jsme se na každý trénink s ní moc těšili! Dokonce připravila i tajnou choreografii pro nás jako překvapení od našich hostů 🥳 Je flexibilní a domluva s ní je bez problému. Pokud chcete pomoci s přípravou na váš první tanec, tak Pavlínka je tou správnou volbou
                </p>
                <p className="text-2xl py-4 font-medium text-gray-800">Anička & Valentýn ❤️</p>
            </motion.div>
        </motion.div>

        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-[980px] mx-auto px-12 md:px-12 py-12 text-center "
        >

            <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="flex flex-col items-center mt-4 mb-6 font-semibold"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-20 h-20 mb-4 text-h-color/30">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
                <p className='text-lg md:text-xl font-semibold text-gray-800'>
                Pokud máte v plánu věnovat svému svatebnímu tanci více úsilí a času, abyste se vyhnuli případnému nepopulárnímu "medvědímu" tanci, kdy se kymácíte jen ze strany na stranu, tak Pája je ta nejlepší osoba, která vám s tanečními kroky pomůže. Chtěli jsme netradiční tanec, hodně zábavný a ne příliš romantický. Pája vymyslela na naši hudbu choreografii, která přesně vyhovovala naší taneční zručnosti a zkušenosti. Byl to příjemně strávený čas, protože Pája je nejen velmi zkušená tanečnice a choreografka, ale také velmi empatická a bezvadná osoba. Nutno dodat, že partnerovi se do svatebního tance na začátku vůbec nechtělo, ale po skončení lekcí uznal, že ho to velmi bavilo a že by rád s tancováním pokračoval. Děkujeme Páje za skvělý tanec, který přizpůsobila nám a že se nám tak svědomitě věnovala!
                </p>
                <p className="text-2xl py-4 font-medium text-gray-800">Bára & Karel ❤️</p>
            </motion.div>


        </motion.div>


        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full mx-auto px-6 md:px-6 py-12 text-center bg-h-color/30"
        >
            <motion.div 
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="max-w-[980px] mx-auto flex flex-col items-center mt-4 mb-6 font-semibold"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-20 h-20 text-bg-color mb-4">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
                <p className='text-lg md:text-xl font-semibold text-gray-800'>
                    Páju bychom chtěli doporučit všem, kteří by rádi převapili své svatební hosty originálním tancem. 
                    Je velká profesionálka, pomohla nám s výběrem hudby a "ušila" nám tanec přímo na míru. 
                    Byla jsem těhotná a manžel není pohybově úplně nadaný a i přesto byl výsledek skvělý. 
                    Hosté po ukončení tance skandovali "opakovat!... opakovat!" 😃
                    Tréninkové hodiny pro nás byly krásným únikem z předsvatebního shonu.
                </p>
                <p className="text-2xl py-4 font-medium text-gray-800">Kamila & Filip ❤️</p>
            </motion.div>
        </motion.div>
        
    </section>
    
  )
}

export default Testimonials