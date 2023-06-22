import React from 'react'

const Pricing = () => {
  return (
    <div name='pricing' className='w-full mt-12 md:mt-24'>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className='px-4 pt-12 pb-16'>
          <h2>
              <span className="uppercase tracking-[20px] bg-clip-border font-black"><span className='text-h-color'>náš</span> ceník</span>
          </h2>
        </div>
        <table className="w-full">
          <caption className="sr-only">Pricing plan comparison</caption>
          
          <tbody className="space-y-6 text-center divide-y divide-gray-700">
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Počet lekcí (1,5h)</h3>
              </th>
              <td>
                <span className="font-bold text-2xl text-gray-700">3</span>
              </td>
              <td>
                <span className="font-bold text-2xl text-gray-700">5</span>
              </td>
              <td>
                <span className="font-bold text-2xl text-gray-700">7</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Konzultace</h3>
              </th>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-8 h-8 mx-auto text-h-color">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-8 h-8 mx-auto text-h-color">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-8 h-8 mx-auto text-h-color">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Tvorba choreografie</h3>
              </th>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-8 h-8 mx-auto text-h-color">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-8 h-8 mx-auto text-h-color">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-8 h-8 mx-auto text-h-color">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Sestřih hudby</h3>
              </th>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-8 h-8 mx-auto text-h-color">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-8 h-8 mx-auto text-h-color">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-8 h-8 mx-auto text-h-color">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Cena</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-bold text-lg md:text-2xl text-gray-700">
                  5 000 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-bold text-lg md:text-2xl text-gray-700">
                  7 500 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-bold text-lg md:text-2xl text-gray-700">
                  10 000 Kč
                </p>
              </th>
            </tr>
          </tbody>
        </table>
        <p>* Každá další lekce je za 1500 Kč</p>
        <p className='mb-40'>* Samostatná konzultace je za 500 Kč</p>
      </div>
    </div>
  )
}

export default Pricing