import React from 'react'
import { useTranslation } from 'react-i18next'
import depozit from './../../img/deposit.svg'
import orta from './../../img/orta.svg'
import ohiri from './../../img/ohiri.svg'

const Showcae = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="select p-10 bg-gray-900 text-white text-center">
        <h1 className="text-4xl font-bold mb-10">
          Moliyaviy masalalarga oid yechimlar
        </h1>
        <div className="overflow-x-auto">
          <div className="flex justify-center gap-6  px-4">
            <div className="select min-w-[280px] p-6 rounded-lg shadow-lg">
              <img src={depozit} className="w-[260px] h-[162px]" alt="" />
              <h2 className="w-[259px] h-[50px] text-start mt-2">
                {t('service_card_1_description')}
              </h2>
            </div>
            <div className="select min-w-[280px] p-6 rounded-lg shadow-lg">
              <img src={orta} className="w-[260px] h-[162px]" alt="" />
              <h2 className="w-[259px] h-[50px] text-start mt-2">
                {t('service_card_2_description')}
              </h2>
            </div>
            <div className="select min-w-[280px] p-6 rounded-lg shadow-lg">
              <img src={ohiri} className="w-[260px] h-[162px]" alt="" />
              <h2 className="w-[259px] h-[50px] text-start mt-2">
                {t('service_card_3_description')}
              </h2>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Showcae;
