'use client';

const Features = () => {
  return (
    <section name="features" className="w-full mt-24 bg-h-color/30">
      <div className="max-w-[2000px] mx-auto px-6 md:px-12">
        <div className="text-center grid grid-cols-1 gap-20 px-12 py-24 mx-auto max-w-[500px] lg:max-w-full lg:px-16 xl:px-24 lg:grid-cols-3">
          <div>
            <p className="text-center text-4xl">💑</p>
            <h3 class="mb-3 text-2xl font-extrabold leading-tight text-gray-800">Tanec je zábava!</h3>
            <p class="font-semibold text-gray-700">
              Jako pár nebo skupina svatebčanů či družiček se při tréninku společně zasmějete a určitě se i více sblížíte. 
            </p>
          </div>
          <div>
            <p className="text-center text-4xl">🤩</p>
            <h3 class="mb-3 text-2xl font-extrabold leading-tight text-gray-800">Překvapte!</h3>
            <p class="text-gray-700 font-semibold">
              Rozjeďte svatební párty nečekáným dynamickým tancem. Možná se dokonce přídá i věčně nevrlý strejda Karel.
            </p>
          </div>
          <div>
            <p className="text-center text-4xl">💪</p>
            <h3 class="mb-3 text-2xl font-extrabold leading-tight text-gray-800">Boostněte si sebevědomí!</h3>
            <p class="text-gray-700 font-semibold">
            Naučím vás plynule a sebevědomě tančit pro ten nejdůležitější tanec ve vašem životě. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features