'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import Link from 'next/link'
import Image from 'next/image'
import pic1 from '../public/wedd2.jpg'

const Blog = () => {
  return (
    <section name='blog' className='w-full mt-24'>
      <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="max-w-[1240px] mx-auto px-12"
      >

        <div className='px-4 py-12'>
          <h2>
              <span className="uppercase tracking-[20px] bg-clip-border font-black">blog</span>
          </h2>
        </div>

        <div class="w-full">
          <div class="flex flex-col space-y-16">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
              <Image src={pic1} class="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
              <div class="col-span-1 md:col-span-3">
                <h2 class="mb-2 text-2xl font-extrabold leading-snug text-gray-800 text-start">
                  <a href="#" class="text-gray-700 hover:text-h-color">8 skvělých nápadů jak tancem oživit Vaší svatbu (videa)</a>
                </h2>
                <p class="mb-3 text-gray-700">
                  Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                  Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                </p>
                <Link href="/blog/Blog1" class=" hover:text-h-color text-lg">Pokračovat ve čtení</Link>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Image src={pic1} class="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
              <div class="col-span-1 md:col-span-3">
                <h2 class="mb-2 text-2xl font-extrabold leading-snug text-gray-800 text-start">
                  <a href="#" class="text-gray-700 hover:text-h-color">Nejlepší svatební párty songy</a>
                </h2>
                <p class="mb-3 text-lg text-gray-700">
                  Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and
                  enjoy Dark Mode.
                </p>
                <Link href="/blog/Blog1" class=" hover:text-h-color text-lg">Pokračovat ve čtení</Link>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Image src={pic1} class="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
              <div class="col-span-1 md:col-span-3">
                  <h2 class="mb-2 text-2xl font-extrabold leading-snug text-gray-800 text-start">
                  <a href="#" class="text-gray-700 hover:text-h-color">Jak vytvořit svatební tanec, který každého překvapí</a>
                </h2>
                <p class="mb-3 text-lg text-gray-700">
                  Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in
                  the work sector but also in daily living.
                </p>
                <a href="#" class="text-lg hover:text-h-color">Pokračovat ve čtení</a>
              </div>
            </div>
          </div>  
        </div>
      </motion.div>
    </section>
  )
}

export default Blog