import React from 'react';
import { useTranslation } from 'react-i18next';
import pont1 from '../../img/paytcard1.svg'
import pont2 from '../../img/paytioncard.svg'
import Iphone from '../../img/iphone.svg'

import One from '../../img/1.svg'
import two from '../../img/2.svg'
import thre from '../../img/3.svg'

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className=" bg-[#262626]  items-center div">
      <div className='w-[90%] m-auto  grid md:grid-cols-2'>
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-[#F1F1F1]">Paytion</h1>
        <p className="text-gray-300 text-xl max-w-lg w-[358px] h-[62px]">{t('title')}</p>
        <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded">
          {t('hero.cta')} →
        </button>
       <div className='howmt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className="bg-[#1F2024] rounded-lg p-6">
              <div className="">
                <img src={One} alt="Briefcase Icon" className="mb-[20px]" />
              </div>
              <p className="text-gray-300 text-base sm:text-lg">
             {t('feature.1')}
              </p>
            </div>
            <div className="bg-[#1F2024] rounded-lg p-6">
              <div className="">
                <img src={two} alt="Crypto Icon" className="mb-[20px]" />
              </div>
              <p className="text-gray-300 text-base sm:text-lg">
                   {t('feature.2')}
              </p>
            </div>
            <div className="bg-[#1F2024] rounded-lg p-6">
              <div className="">
                <img src={thre} alt="Thumbs Up Icon" className="mb-[20px]" />
              </div>
              <p className="text-gray-300 text-base sm:text-lg">
                {t('feature.3')}
              </p>
            </div>
          </div>
      </div>
   
   <div className="mt-10 md:mt-0 flex justify-between">
      
 <div>
  <img  src={pont2} alt="app preview 2" className="jossa" />
   <img  src={pont1} alt="app preview 1" className="jossa" />
 </div>
  <img src={Iphone} alt="app preview 3" className="w-1/3 max-w-xs" />
</div>


      </div>
    </section>
  );
}
