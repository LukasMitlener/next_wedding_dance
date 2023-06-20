'use client';

import Image from 'next/image'
import pic from '../../public/wedd4.png'

const Blog2 = () => {
  return (
    <article class="px-4 py-24 mx-auto max-w-3xl">
      <div class="w-full mx-auto mb-10 text-left">
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
        jak přidat do svého svatebního dne trochu odvahy a kreativity. A co by mohlo být lepší než vytvořit svatební tanec, 
        který každého překvapí a zanechá nezapomenutelný dojem? </p>
        <h2 className="text-2xl text-left font-bold my-4 mt-12">Vyberte si píseň</h2>
        
        <p className="mb-4 text-justify">Když začnete plánovat svůj svatební tanec, prvním krokem, na kterém byste se měli soustředit, 
        je výběr té správné písně. Je důležité, aby píseň nebyla pouze zábavná, ale také aby dokázala vzbudit emoce a energii mezi 
        svatebními hosty. Cílem je, aby se každý cítil zapojen a užíval si tanec spolu s vámi. Vybrat píseň, která je obecně oblíbená 
        a má rytmus, který inspiruje k tanci, může být skvělým začátkem. Pokud si nejste jisti, kterou píseň vybrat, nebojte se vyhledat 
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
        kteří jsou v tanci úplně noví. Místo toho, abyste se snažili napodobit to, co jste viděli na YouTube, proč si 
        nenajmout profesionálního choreografa, který může vytvořit rutinu na základě vaší volby písně, osobnosti a 
        tanečních zkušeností? Profesionální choreograf má zkušenosti a znalosti potřebné k vytvoření taneční rutiny, 
        která je nejen vizuálně atraktivní, ale také přizpůsobená vašim schopnostem a preferencím. Může vám pomoci vybrat 
        kroky a pohyby, které skvěle ladí s vaší vybranou písní, a také vám poradit, jak nejlépe vyjádřit vaši osobnost 
        prostřednictvím tance. </p>
        <p className="mb-4 text-justify">Naše zkušená lektorka je k dispozici, aby vám poskytla podporu a odborné vedení, 
        které potřebujete. S citlivým přístupem k vašim potřebám a přáním, vám ráda pomůže vytvořit taneční choreografii, 
        která bude nejen okouzlující, ale také vyjadřovat vaše pocity a radost z tohoto výjimečného dne. </p>

        <h2 className="text-2xl text-left font-bold my-4 mt-12">Trénujte a bavte se</h2>
        
        <p className="mb-4 text-justify">Vystoupení s choreografií překvapivého svatebního tance s důvěrou vyžaduje trénink! 
        Doporučujeme si dát alespoň 3 měsíce na přípravu choreografie svatebního tance. Je dobré nastavit si týdenní tréninky 
        až do svatby. Tím nejenže budete schopni vystoupit s důvěrou na své svatbě, ale skutečně si užijete proces učení tance 
        s vaším budoucím manželem/manželkou nebo svatební party. Bude to úžasný zážitek a odreagování před vaším velkým dnem. 
        Užijte si to! </p>
      </div>
    </article>
  )
}

export default Blog2