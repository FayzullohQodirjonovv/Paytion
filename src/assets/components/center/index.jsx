import React from 'react';
import Oneimg from '../../img/oneimg.svg';
import Twoimg from '../../img/twoimg.svg';
import threimg from '../../img/threimg.svg';
import { useTranslation } from 'react-i18next';

const CurrencyExchange = () => {
  const { t } = useTranslation();

  return (
    <section className="text-white py-10 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      <h2 className="text-[26px] sm:text-[30px] text-center font-bold mb-10">{t('center')}</h2>
    
<div className="grid gap-10">
  {[{ img: Oneimg, title:'Обмен валют', text: 'center1' }, { img: Twoimg, title:'Консьерж сервис', text: 'center2' }, { img: threimg, title:'Кошелек', text: 'center1' }].map(
    (item, index) => (
      <div
        key={index}
        className="bg-[#0F0F0F] p-6 sm:p-10 rounded-xl flex flex-col md:flex-row items-center md:justify-between gap-8 min-h-[280px]" 
      >
        <div className="text-center md:text-left max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">{t(item.title)}</h3>
          <p className="text-gray-300 mb-6">{t(item.text)}</p>
          <button className="bg-white text-black font-medium py-2 px-5 rounded-md hover:bg-gray-200 transition">
            Обменять →
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src={item.img} alt={`Icon ${index}`} className="w-[300px] max-w-full h-auto" />
        </div>
      </div>
    )
  )}
</div>

    </section>
  );
};

export default CurrencyExchange;
