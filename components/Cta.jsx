'use client';

import Image from 'next/image'
import couple from "../public/wedd6.png"


const Cta = () => {
  return (
    <section name="cta" className="w-full mt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10">

              <h3 className="mb-4 text-3xl font-extrabold leading-0 ">
                Připravte pro své přetele a rodinu <span className='text-h-color'>nezapomenutelný zážitek 😊</span>
              </h3>
              <p className="mb-6 text-gray-900 text-justify">
              Objevte v sobě skrýté tanečníky a dejte vzniknout společné vášni.
<span className='font-bold'> Nenechte si ujít šanci proměnit Váš svatební den v nezapomenutelný zážitek plný zábavy a radosti a objednejte si svůj netradiční svatební tanec, o jakém jste vždy snili, ještě dnes! </span> 
Stačí si domluvit schůzku (e-mail, tel.), sdělit vaše představy při prvotní konzultaci a poté už nic nebrání společnému nácviku.
              </p>
              <hr className="mb-6 border-gray-300" />
              <div className="flex items-center space-x-4">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path>
              </svg>
              <p className="text-xl">+420732155725</p>
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    	          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
              </svg>
              <a className="text-xl" href="mailto:svatebnitance@gmail.com">
                svatebnitance@gmail.com
              </a>
            </div>
            </div>
            <div>
              <Image src={couple} className="rounded-lg" alt="svatební pár tančí"/>
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default Cta