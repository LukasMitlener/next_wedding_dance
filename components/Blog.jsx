'use client';

import Link from 'next/link'
import Image from 'next/image'
import pic1 from '../public/wedd3.webp'
import pic2 from '../public/wedd4.webp'

const Blog = () => {
  return (
    <section name='blog' className='w-full mt-12 md:mt-24'>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      
        <div className='px-4 py-12'>
          <h2>
              <span className="uppercase font-black"><span className='text-h-color'>můj</span> blog</span>
          </h2>
        </div>

        <div class="w-full">
          <div class="flex flex-col space-y-16 py-4 md:py-16">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
              <Image src={pic1} class="object-cover rounded-lg w-full h-full col-span-1 bg-center" alt="Kutty" loading="lazy" />
              <div class="col-span-1 md:col-span-3">
                <h2 class="mb-2 text-2xl font-extrabold leading-snug text-gray-800 text-start">
                <Link href="https://svatebnitance.cz/blog/5_skvelych_napadu" class="text-gray-700 hover:text-h-color">5 skvělých nápadů, jak tancem oživit vaši svatbu (videa)</Link>
                </h2>
                <p class="text-justify mb-3 text-gray-700">
                V tomto článku vám představíme pět skvělých nápadů, jak do svatby zapojit tanec tak, 
                aby vytvořil nejen báječnou podívanou pro hosty, ale také aby tento den pro vás a vašeho 
                partnera učinil ještě více speciálním. 
                </p>
                <Link href="https://svatebnitance.cz/blog/5_skvelych_napadu" class=" hover:text-h-color font-semibold  text-lg">Pokračovat ve čtení</Link>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Image src={pic2} class="object-cover rounded-lg w-full h-full col-span-1 bg-center" alt="Kutty" loading="lazy" />
              <div class="col-span-1 md:col-span-3">
                <h2 class="mb-2 text-2xl font-extrabold leading-snug text-gray-800 text-start">
                <Link href="https://svatebnitance.cz/blog/jak_vytvorit_svatebni_tanec" class="text-gray-700 hover:text-h-color">Jak vytvořit svatební tanec, který každého překvapí </Link>
                </h2>
                <p class="text-justify mb-3 text-lg text-gray-700">
                Svatební tance plné překvapení zažívají v současné době obrovský nárůst popularity. 
                Mnoho párů se rozhoduje odklonit od klasického prvního tance a místo toho se vydává 
                na cestu svatebních choreografií za doprovodu různých hudbeních stylů, jako je hip-hop nebo pop. 
                </p>
                <Link href="https://svatebnitance.cz/blog/jak_vytvorit_svatebni_tanec" class=" hover:text-h-color font-semibold text-lg">Pokračovat ve čtení</Link>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Blog