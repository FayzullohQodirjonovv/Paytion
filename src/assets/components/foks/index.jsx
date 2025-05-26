import React from 'react';
import { useTranslation } from 'react-i18next';
import romot1 from '../../img/romot1.svg'
import romot from '../../img/romot.svg'
const OlegKurchenkoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-zinc-900 text-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start flex-shrink-0">
          <div className="w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden mb-6 border border-zinc-700">
            <img
              src={romot1}
              alt={t('ceo_name')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between text-center md:text-left">
          <p className="text-xl md:text-2xl italic font-serif  mb-6">
      {t('rumut')}
          </p>
          <div className='flex justify-between'>
         <div>
             <h3 className="text-2xl font-bold mb-1">{t('rumut1')}</h3>
            <p className="text-gray-400 mb-6">{t('rumut2')}</p>
                 <button className="bg-white text-zinc-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            {t('rumutbt')}
          </button>
         </div>
              <img
              src={romot}
              alt="Oleg Kurchenko Signature"
              className="h-23 md:h-28 object-cover md:ml-0" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OlegKurchenkoSection;