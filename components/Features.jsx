'use client';

const Features = () => {
  return (
    <section name="features" className="w-full mt-24">
      <div className="max-w-[1240px] mx-auto px-12">
        <div className="text-center grid grid-cols-1 gap-20 px-4 py-24 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-3">
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-12 h-12 mb-4 text-purple-700" aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
              />
            </svg>
            <h3 class="mb-3 text-lg font-medium leading-tight text-gray-900">Grow your platform’s revenue</h3>
            <p class="text-base leading-relaxed text-gray-600">
              Add in-person payments to your platform or marketplace. Using Terminal with Connect, you can onboard users for online and in-person payments, and unify their payouts across channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features