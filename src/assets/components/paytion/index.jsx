import React from 'react';
import { useTranslation } from 'react-i18next';
import iphone from '../../img/iphones.svg';
import glosy1 from '../../img/glossy.svg';
import card from '../../img/card.svg';
import qr from '../../img/qr.svg';
import googleplay from '../../img/google play.svg';
import app from '../../img/app store.svg';

const PaytionAppSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-black px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto bg-zinc-900 rounded-2xl h-[70vh] shadow-lg p-7 min-h-[70vh] flex flex-col md:flex-row items-center justify-between relative z-10">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left text-white max-w-lg md:pr-8 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Paytion
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-8">
            {t('py')}
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex flex-col items-center">
              <img src={qr} alt="Google Play QR" className="w-24 h-24 p-1 rounded" />
            </div>

            <div className="flex flex-col items-center gap-3">
              <img src={app} alt="App Store" className="h-12 object-contain" />
              <a href="#" className="inline-block">
                <img src={googleplay} alt="Google Play" className="h-12 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center h-72 sm:h-96 md:h-[500px] lg:h-[550px] min-w-[200px] relative">
          <img
            src={card}
            alt="Card Background"
            className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-48 opacity-40 rotate-6 z-0"
          />
          <img
            src={iphone}
            alt="Paytion App"
            className="relative z-10 h-[] object-cover rotate-6"
          />
        </div>
      </div>
    </section>
  );
};

export default PaytionAppSection;
