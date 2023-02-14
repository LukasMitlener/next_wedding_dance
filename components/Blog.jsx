'use client';
import Link from 'next/link'
import Image from 'next/image'
import pic1 from '../public/wedd2.jpg'

const Blog = () => {
  return (
    <div name='video' className='mt-24 max-w-[1240px] mx-auto'>
      <h2 class="pb-8 mb-12 text-2xl font-extrabold leading-tight text-gray-900 border-b border-gray-200 md:text-4xl">Blog</h2>
      <div class="w-full xl:w-4/6">
        <div class="flex flex-col space-y-16">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
            <Image src={pic1} class="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
            <div class="col-span-1 md:col-span-3">
              <p class="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
              <h2 class="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" class="text-gray-900 hover:text-purple-700">8 skvělých nápadů jak tancem oživit Vaší svatbu (videa)</a>
              </h2>
              <p class="mb-3 text-sm font-normal text-gray-500">
                Earlier RPA bots used to have some limitations like it would take structured data for processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
              </p>
              <Link href="/blog/Blog1" class="btn btn-light btn-sm">Pokračovat ve čtení</Link>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img src="/brand/og-white.png" class="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
            <div class="col-span-1 md:col-span-3">
              <p class="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
              <h2 class="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" class="text-gray-900 hover:text-purple-700">Nejlepší svatební párty songy</a>
              </h2>
              <p class="mb-3 text-sm font-normal text-gray-500">
                Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain the Dark Mode in Android Application. Don’t waste your time; just implement and
                enjoy Dark Mode.
              </p>
              <a href="#" class="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img src="/brand/og.png" class="object-cover w-full h-40 col-span-1 bg-center" alt="Kutty" loading="lazy" />
            <div class="col-span-1 md:col-span-3">
              <p class="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
              <h2 class="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" class="text-gray-900 hover:text-purple-700">Jak vytvořit svatební tanec, který každého překvapí</a>
              </h2>
              <p class="mb-3 text-sm font-normal text-gray-500">
                Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six months I realized that this is one of the important issues to address not only in
                the work sector but also in daily living.
              </p>
              <a href="#" class="btn btn-light btn-sm">Read More</a>
            </div>
          </div>
        </div>  

      </div>
    </div>
  )
}

export default Blog