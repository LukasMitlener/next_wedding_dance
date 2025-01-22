import React from 'react'

const Pricing = () => {
  return (
    <div name='pricing' className='w-full mt-12 md:mt-24'>
      <div className="max-w-[1440px] mx-auto px-6 md:pt-12 md:pb-18 md:px-12">
        <div className='px-4 py-12'>
          <h2>
              <span className="uppercase font-black"><span className='text-h-color'>ceník</span> 2025</span>
          </h2>
        </div>
        <table className="w-full">
          <caption className="sr-only">Pricing plan comparison</caption>
          
          <tbody className="space-y-6 text-center divide-y divide-gray-700">
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Konzultace</h3>
              </th>
              <td>
                <span className="font-bold text-lg md:text-2xl text-gray-700">500 Kč</span>
              </td>

            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">1, 5 hod. lekce*</h3>
              </th>
              <td>
                <span className="font-bold text-lg md:text-2xl text-gray-700">1 800 Kč</span>
              </td>
              
            </tr>
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3">Tvorba choreografie**</h3>
              </th>
              <td>
                <span className="font-bold text-lg md:text-2xl text-gray-700">1 500 - 3 000 Kč</span>
              </td>
              
            </tr>
            
          </tbody>
        </table>
        <p className='text-sm md:text-lg'>* včetně pronájmu prostoru</p>
        <p className='text-sm md:text-lg md:mb-40'>** cena choreografie se odvíjí od její náročnosti, je včetně střihu hudby</p>
      </div>
    </div>
  )
}

export default Pricing