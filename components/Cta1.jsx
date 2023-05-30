'use client';

import Image from 'next/image'
import couple from "../public/wedding-couple.jpg"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const Cta1 = () => {
  return (
    <section name="features" className="w-full mt-24">
      <div className="max-w-[1240px] mx-auto px-12">
        
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10">
              <div
                className="inline-block mb-5"
              >
                <div className="flex items-center justify-center w-12 h-12 ">
                <p className="text-center text-4xl">🔥</p>
                </div>
              </div>
              <h3 className="mb-4 text-3xl font-extrabold leading-none">
                Připravte pro své přetele a rodinu nezapomenutelný zážitek.
              </h3>
              <p className="mb-6 text-gray-900 text-justify">
              Objevte v sobě skrýté tanečníky a dejte vzniknout společné vášni.
<span className='font-bold'>Nenechte si ujít šanci proměnit Váš svatební den v nezapomenutelný zážitek plný zábavy a radosti a objednejte si svůj netradiční svatební tanec, o jakém jste vždy snili, ještě dnes!</span> 📲🤩
Stačí si domluvit schůzku (e-mail, tel.), sdělit nám vaše představy při prvotní konzultaci a poté už nic nebrání společnému nácviku.<br></br><br></br>
              </p>
              <hr className="mb-5 border-gray-300" />
              <div className="flex items-center space-x-4">
                <PhoneIcon className="text-h-color h-7 w-7 animate-pulse" />
                <p className="text-xl">+420732155725</p>
                <EnvelopeIcon className="text-h-color h-7 w-7 animate-pulse" />
                <a className="text-xl" href="mailto:svatebnitance@gmail.com">
                  svatebnitance@gmail.com
                </a>
              </div>
            </div>
            <div>
              <Image src={couple} className="rounded-lg" alt="svatba pár"/>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default Cta1