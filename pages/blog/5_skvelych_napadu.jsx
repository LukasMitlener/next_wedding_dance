'use client';

import Image from 'next/image'
import pic from '../../public/wedd3.png'

const Blog1 = () => {
  return (
    <article class="px-4 py-24 mx-auto max-w-7xl" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
      <div class="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2">
        <div class="pb-6 mb-6 border-b border-gray-200">
          <h1 class="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl" itemprop="headline" title="Rise of Tailwind - A Utility First CSS Framework">
            5 skvělých nápadů jak tancem oživit Vaší svatbu
          </h1>
          <p class="text-base text-gray-500">18. března, 2023 — Pája Vejnarová</p>
        </div>
        <div class="flex items-center mb-6 space-x-2">
          <p class="text-gray-600">Sdílet článek</p>
          <a href="https://www.facebook.com/profile.php?id=100092820558697" class="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5" fill="currentColor">
              <path
                d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
              />
            </svg>
          </a>
          
        </div>
        <Image src={pic} class="object-cover w-full h-full bg-center rounded" alt="Kutty" />
      </div>

      <div class="w-full mx-auto prose md:w-3/4 lg:w-1/2">
        <p className="mt-3 text-justify">
        Svatba je jedinečný a osobní výraz lásky a odevzdání, který se nese 
        na vlnách radosti a oslav. Tento den je naplněný nezapomenutelnými 
        chvílemi, a proto je jen přirozené, že chcete, aby byl co nejvíce výjimečný 
        a nezapomenutelný. Jedním ze způsobů, jak tomu dosáhnout, je zapojení tance. 
        Tanec je univerzální jazyk radosti a slavení, který lze využít k oživení 
        jakékoli svatební oslavy.
        </p>
        <p className="mt-3 text-justify">
        V tomto článku vám představíme pět skvělých nápadů, jak do svatby zapojit 
        tanec tak, aby vytvořil nejen báječnou podívanou pro hosty, ale také aby tento 
        den pro vás a vašeho partnera učinil ještě více speciálním. Od překvapivých 
        tanečních vstupů přes romantické valčíky až po zábavné taneční bitvy - připravili 
        jsme pro vás řadu inspirativních videí, která vám pomohou učinit váš velký den 
        ještě významnějším. Vydáme se společně na cestu plnou hudby, radosti a mnoha 
        tanečních kroků.
        </p>


        <p className="mt-12 text-justify">
          “Hmmm nudnej ploužák,” říkají si někteří svatebčané. "On ten Tonda byl vždycky takovej trochu suchar”...”Zííív 🥱”... A PAK TO PŘIJDE!🤩🤩🤩... A Tonda všem vytře zrak 😎
        </p>

        <div className="mt-5 mb-20">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Gx6_LorZRNQ"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="mt-6">
          Chcete překvapit svého nastávajícího tancem s družičkami? 💃
        </p>

        <div className="mt-5 mb-20">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/09WbvRtAQUY"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="mt-6">
          Když nechce tančit na svatbě váš nastávající, můžete to zkusit roztočit na parketu třeba s taťkou 😜
        </p>

        <div className="mt-5 mb-10">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/t-BHDpP5opA"

            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

    </article>
  )
}

export default Blog1