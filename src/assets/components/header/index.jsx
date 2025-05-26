import React from 'react';
import { useTranslation } from 'react-i18next';
import Pon from '../../img/pon.svg'
export default function Header() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <header className="header px-6 py-4 border-b border-gray-700">
      <div className='w-[90%] m-auto flex justify-between items-center'>
      <div className="flex items-center gap-8">
        <div className="text-2xl font-bold"><img src={Pon} alt="" /></div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#"> {t('nav.products')} </a>
          <a href="#"> {t('nav.reviews')} </a>
          <a href="#"> {t('nav.about')} </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggleLang} className="text-sm border border-gray-500 px-3 py-1 rounded text-white">
          {i18n.language === 'ru' ? 'Русский' : 'English'}
        </button>
        <button className="bg-white text-black px-4 py-2 rounded font-semibold">
          {t('cta.button')}
        </button>
      </div>
      </div>
    </header>
  );
}
