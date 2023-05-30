'use client';

const Features = () => {
  return (
    <section name="features" className="w-full mt-24">
      <div className="max-w-[2000px] mx-auto px-12">
        <div className="text-center grid grid-cols-1 gap-20 px-4 py-24 mx-auto max-w-8xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-center text-4xl">💑</p>
            <h3 class="mb-3 text-lg font-medium leading-tight text-gray-900">Tanec je zábava!</h3>
            <p class="text-base leading-relaxed text-gray-600">
              Jako pár nebo skupina svatebčanů či družiček &#128131;&#128131;&#128131; se společně zasmějete a určitě se i více sblížíte. Ručím za to :-)
            </p>
          </div>
          <div>
            <p className="text-center text-4xl">🤩</p>
            <h3 class="mb-3 text-lg font-medium leading-tight text-gray-900">Překvapte!</h3>
            <p class="text-base leading-relaxed text-gray-600">
              Rozjeďte svatební párty nečekáným dynamickým tancem. Možná se dokonce přídá i věčně nevrlý strejda Karel.
            </p>
          </div>
          <div>
            <p className="text-center text-4xl">💪</p>
            <h3 class="mb-3 text-lg font-medium leading-tight text-gray-900">Boostněte sebevědomí!</h3>
            <p class="text-base leading-relaxed text-gray-600">
              Naše lektorka Vás naučí....
            </p>
          </div>
          <div className="rounded-xl border border-h-color/50 shadow-xl hover:border-h-color hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
            <p className="text-center text-4xl">🤩</p>
            <h3 class="mb-3 text-lg font-medium leading-tight text-gray-900">Boostněte sebevědomí!</h3>
            <p class="text-base leading-relaxed text-gray-600">
              Naše lektorka Vás naučí....
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features