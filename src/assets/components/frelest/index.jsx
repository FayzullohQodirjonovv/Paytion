import React from 'react';
import img from '../../img/img.svg';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[90%] max-w-6xl mx-auto bg-zinc-800 text-white flex flex-col md:flex-row justify-between items-center p-6 md:p-8 rounded-lg shadow-md space-y-6 md:space-y-0 md:space-x-8">
      <div className="text-center md:text-left md:max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('frelest')}</h2>
        <p className="text-base md:text-lg">{t('fretext')}</p>
      </div>
      <img
        src={img}
        alt="Safe"
        className="w-60 h-auto md:w-72"
      />
    </div>
  );
};

export default Index;
