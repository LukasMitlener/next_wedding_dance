'use client';

import Image from 'next/image'
import pic from '../../public/wedd4.png'

const Blog2 = () => {
  return (
    <article class="px-4 py-24 mx-auto max-w-7xl" itemid="#" itemscope itemtype="http://schema.org/BlogPosting">
      <div class="w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2">
        <div class="pb-6 mb-6 border-b border-gray-200">
          <h1 class="mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl" itemprop="headline" title="Rise of Tailwind - A Utility First CSS Framework">
          Jak vytvořit svatební tanec, který každého překvapí
          </h1>
          <p class="text-base text-gray-500">18. března, 2023 — Pája Vejnarová</p>
        </div>
        <div class="flex items-center mb-6 space-x-2">
          <p class="text-gray-600">Share this article</p>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5" fill="currentColor">
              <path
                d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
              />
            </svg>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5" fill="currentColor">
              <path
                d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"
              />
            </svg>
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5" fill="currentColor">
              <circle cx="4.983" cy="5.009" r="2.188" />
              <path
                d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z"
              />
            </svg>
          </a>
        </div>
        <Image src={pic} class="object-cover w-full h-full bg-center rounded" alt="Kutty" />
      </div>

      <div class="w-full mx-auto prose md:w-3/4 lg:w-1/2">
        <h1 className="text-3xl font-bold mb-4">Jak vytvořit překvapivý svatební tanec</h1>
        
        <p className="mb-4">Překvapivé svatební tance se stávají stále populárnějšími...</p>

        <h2 className="text-2xl font-bold my-4">Vyberte si píseň</h2>
        
        <p className="mb-4">Nejlepší začátek je najít zábavnou a vzrušující píseň, kterou si všichni užijí. Podívejte se na náš seznam nejlepších svatebních tanečních písní</p>

        <h2 className="text-2xl font-bold my-4">Hledejte inspiraci</h2>
        
        <p className="mb-4">Je skvělý nápad podívat se, co jiné páry předvedly na svých svatbách, a rozhodnout se, co byste chtěli udělat se svým partnerem nebo svou svatební party. Najdete spoustu nápadů na YouTube. </p>

        <h2 className="text-2xl font-bold my-4">Naučte se nějaké kroky</h2>
        
        <p className="mb-4">Jakmile se rozhodnete pro píseň a nápady pro váš překvapivý tanec, je čas začít s nějakými skvělými tanečními kroky. Nevíte, kde začít? Začněte těmito 3 přátelskými hip hopovými pohyby pro začátečníky</p>

        <h2 className="text-2xl font-bold my-4">Najměte choreografa</h2>
        
        <p className="mb-4">Vytvoření taneční choreografie není jednoduchý úkol, obzvláště pro ty z vás, kteří jsou v tanci úplně noví. Místo toho, abyste se snažili napodobit to, co jste viděli na YouTube, proč si nenajmout profesionálního choreografa, který může vytvořit rutinu na základě vaší volby písně, osobnosti a tanečních zkušeností? Naši taneční odborníci v Duet Dance Studio vám rádi pomohou. </p>

        <h2 className="text-2xl font-bold my-4">Trénujte a bavte se</h2>
        
        <p className="mb-4">Vystoupení s choreografií překvapivého svatebního tance s důvěrou vyžaduje trénink! Doporučujeme si dát alespoň 3 měsíce na přípravu choreografie svatebního tance. Je dobré nastavit si týdenní tréninky až do svatby. Tím nejenže budete schopni vystoupit s důvěrou na své svatbě, ale skutečně si užijete proces učení tance s vaším budoucím manželem/manželkou nebo svatební party. Bude to úžasný zážitek a odreagování před vaším velkým dnem. Užijte si to </p>

        <h2 className="text-2xl font-bold my-4">Další tipy:</h2>
        
        <ul className="list-disc list-inside mb-4">
          <li>Můžete zahrnout několik různých stylů tance do vašeho překvapivého svatebního tance, abyste dodali různorodost a drámu.</li>
          <li>Pokud máte s tancem menší zkušenosti, zaměřte se na jednoduché, ale efektivní pohyby.</li>
          <li>Vytvořte video svého tance během tréninků. To vám pomůže vidět, jak vypadáte při tanci a co byste mohli vylepšit.</li>
          <li>Pokud je to možné, trénujte v prostoru, který je podobný tomu, kde budete na svatbě tančit. To vám pomůže lépe se připravit na skutečné prostředí.</li>
          <li>Nezapomeňte na důležitost vyjadřování - váš obličej a způsob, jakým se pohybujete, může přidat mnoho k celkovému dojmu vašeho tance.</li>
          <li>Pamatujte, že nejdůležitější je, abyste se během tance bavili a užívali si to. I když nejste perfektní, vaši hosté si všimnou a ocení, když vidí, že se bavíte.</li>
        </ul>
        <p>...</p>
      </div>
    </article>
  )
}

export default Blog2