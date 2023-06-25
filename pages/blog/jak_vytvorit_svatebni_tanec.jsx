'use client';

import Image from 'next/image'
import pic from '../../public/wedd4.png'
import { FaFacebookSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';


const Blog2 = () => {
  return (
    
    <div class="px-4 pt-6 mb-6 mx-auto max-w-3xl">
      <div className="mx-auto flex justify-between items-center"> 
        <div className='flex flex-row w-100'>
          <h2 className="font-parisienne text-h-color text-[40px] md:text-[44px]">
          <a href="https://svatebnitance.cz">Svatební tance</a>
          </h2>
        </div>


        <ul className='flex font-semibold items-center text-2xl'>
          <a className="pr-4" href="https://www.facebook.com/profile.php?id=100092820558697" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={25} style={{ color: '#8BD6D6' }} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092820558697" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill size={27} style={{ color: '#8BD6D6' }} />
          </a>
        </ul>
      </div>

      <div class="w-full mx-auto mt-12 mb-10 text-left">
        <div class="pb-6 mb-6 border-b border-gray-200">
          <h1 class="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl">
          Jak vytvořit svatební tanec, který překvapí
          </h1>
          <p class="text-base text-gray-500">20. června, 2023 — Pája Vejnarová</p>
        </div>
        <div class="flex items-center mb-6 space-x-2">
          <p class="text-gray-600">Sdílet článek</p>
          <a 
          href="https://www.facebook.com/sharer/sharer.php?u=https://www.svatebnitance.cz/blog/jak_vytvorit_svatebni_tanec" 
          target="_blank" 
          class="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5" fill="currentColor">
              <path
                d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
              />
            </svg>
          </a>
          
        </div>
        <Image src={pic} class="object-cover w-full h-full bg-center rounded" alt="svatební pár tančí" />
      </div>

      <div class="w-full mx-auto">
        <p className="mb-4 text-justify">Svatební tance plné překvapení zažívají v současné době obrovský nárůst popularity. 
        Mnoho párů se rozhoduje odklonit od klasického prvního tance a místo toho se vydává na cestu svatebních choreografií 
        za doprovodu různých hudbeních stylů, jako je hip-hop nebo pop.</p>
        <p className="mb-4 text-justify">V každém svatebním dni je jedním z vrcholů okamžik, kdy novomanželé poprvé tančí 
        jako manželský pár. Tradičně bylo očekáváno, že tento tanec bude romantický a vážný, ale moderní páry hledají způsoby, 
        jak přidat s trochou odvahy do svého svatebního dne více kreativity. A co by mohlo být lepší než vytvořit svatební tanec, 
        který každého překvapí a zanechá nezapomenutelný dojem? </p>
        <h2 className="text-2xl text-left font-bold my-4 mt-12">Vyberte si píseň</h2>
        
        <p className="mb-4 text-justify">Když začnete plánovat svůj svatební tanec, první krok, na který byste se měli soustředit, 
        je výběr té správné písně, s kterou budete souznít. Ještě lepší variantou je výběr více písní a následné sestříhání hudebního mixu, u kterého je prvořadý výběr vhodných částí písně, jejich uspořádání a plynulý přechod mezi nimi.</p> 
        <p className="mb-4 text-justify">Je důležité, aby hudební podklad nebyl pouze zábavný, ale také, aby dokázal vzbudit emoce a energii mezi 
        svatebními hosty. Vybrat písně, které jsou obecně oblíbené 
        a mají rytmus, který inspiruje k tanci, může být skvělým začátkem. Pokud si nejste jisti, které písně vybrat, nebojte se vyhledat 
        inspiraci online. </p>

        <h2 className="text-2xl text-left font-bold my-4 mt-12">Hledejte inspiraci</h2>
        
        <p className="mb-4 text-justify">Může být velmi inspirativní podívat se na to, jaké taneční kreace předvedly jiné páry 
        na svých svatbách. To vám může poskytnout nejen inspiraci, ale také jasnější představu o tom, co je v současné době 
        populární a co by mohlo oslnit vaše svatební hosty. Díky sledování videí můžete také zjistit, jaké prvky tance vás 
        nejvíce oslovují a co byste chtěli začlenit do své vlastní choreografie. V neposlední řadě je to také skvělá příležitost, 
        jak se poradit se svým partnerem nebo členy svatební party a společně vybrat, jaký styl tance byste chtěli předvést. 
        YouTube je jedním z nejlepších míst, kde začít s hledáním.  </p>

        <h2 className="text-2xl text-left font-bold my-4 mt-12">Naučte se nějaké kroky</h2>
        
        <p className="mb-4 text-justify">Po tom, co jste pečlivě vybrali píseň a shromáždili inspirativní nápady pro váš svatební tanec, 
        nastává další klíčová fáze - začít pracovat na tanečních krocích. Je důležité uvědomit si, že taneční kroky by měly být v souladu 
        s vybranou písní a s vaším celkovým konceptem tance. Chcete-li dosáhnout plynulosti a synchronizace, je dobré začít trénovat 
        s dostatečným předstihem před svatebním dnem.</p>
        <p className="mb-4 text-justify">Internet je plný online tanečních tutoriálů a videí, které vás mohou naučit různým tanečním 
        stylům a krokům.</p>

        <h2 className="text-2xl text-left font-bold my-4 mt-12">Najměte choreografa</h2>
        
        <p className="mb-4 text-justify">Vytvoření taneční choreografie není jednoduchý úkol, obzvláště pro ty z vás, 
        kteří jste v tanci úplní začátečníci. Místo toho, abyste se snažili napodobit to, co jste viděli na YouTube, proč si 
        nenajmout profesionálního choreografa, který může vytvořit choreografii na základě vaší volby písně, osobnosti a 
        tanečních zkušeností? Profesionální choreograf má zkušenosti a znalosti potřebné k vytvoření taneční choreografie, 
        která je nejen vizuálně atraktivní, ale také přizpůsobená vašim schopnostem a preferencím. </p>
        <p className="mb-4 text-justify">Naše <a href="https://svatebnitance.cz" class="text-h-color font-bold hover:text-h-color/90">
        zkušená lektorka</a> je k dispozici, aby vám poskytla podporu a odborné vedení, 
        které potřebujete. S citlivým přístupem dle vašich potřeb a přání vám pomůže vytvořit taneční choreografii, 
        která bude jedním z vrcholů vašeho výjimečného dne. </p>

        <h2 className="text-2xl text-left font-bold my-4 mt-12">Trénujte a bavte se</h2>
        
        <p className="mb-4 text-justify">Svatební tanec vyžaduje trénink! 
        Doporučujeme si dát alespoň 3 lekce svatebního tance a pečlivou domácí přípravu. Je dobré nastavit si pravidelné tréninky 
        až do svatby. Tím nejenže budete schopni vystoupit se sebevědomím na své svatbě, ale skutečně si užijete proces učení tance 
        s vaším budoucím manželem/manželkou. Bude to úžasný zážitek a odreagování před vaším velkým dnem. 
        Užijte si to! </p>
      </div>

      

      <div className="flex flex-col">
        <div className="mt-12 mb-6 h-[2px] bg-h-color" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-great-vibes font-extrabold text-[40px] text-h-color">
          <a href="https://svatebnitance.cz">Svatební tance</a>
          </h4>
          <p className="font-normal text-[14px] text-gray-700 opacity-50">
          COPYRIGHT © 2023 SVATEBNÍ TANCE
          </p>

          <div className='flex flex-row space-x-4'>
            <a href="https://www.facebook.com/profile.php?id=100092820558697" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={40} style={{ color: '#8BD6D6' }}/>
            </a>
            <a href="https://www.instagram.com/svatebni.tance/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size={40} style={{ color: '#8BD6D6' }} />
            </a>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Blog2