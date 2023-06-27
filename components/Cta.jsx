'use client';

import Image from 'next/image'
import couple from "../public/wedd6.png"
import { BsFillPhoneVibrateFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';


const Cta = () => {
  return (
    <section name="cta" className="w-full mt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10">
              <h3 className="mb-4 text-2xl font-extrabold leading-0 ">
                Připravte pro své přátele a rodinu <span className='text-h-color'>nezapomenutelný zážitek 😊</span>
              </h3>
              <p className="mb-6 text-gray-900 text-justify">
              Objevte v sobě skrýté tanečníky a dejte vzniknout společné vášni.
              <span className='font-bold'> Nenechte si ujít šanci proměnit Váš svatební den v nezapomenutelný zážitek plný zábavy a radosti a objednejte si svůj netradiční svatební tanec, o jakém jste vždy snili, ještě dnes! </span> 
              Stačí si domluvit schůzku (e-mail, tel.), sdělit vaše představy při prvotní konzultaci a poté už nic nebrání společnému nácviku.
              </p>
              <hr className="mb-6 border-gray-300" />
              <div className="flex flex-col sm:flex-row items-center space-x-2 space-y-1">
                <BsFillPhoneVibrateFill size={40} style={{ color: '#8BD6D6' }} />
                <p className="text-base font-semibold sm:text-xl pr-4">+420732155725</p>
                <MdAlternateEmail size={40} style={{ color: '#8BD6D6' }} />
                <a className="text-base font-semibold sm:text-xl" href="mailto:svatebnitance@gmail.com">
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