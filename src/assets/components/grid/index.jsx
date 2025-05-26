import React from 'react';
import { useTranslation } from 'react-i18next';
import maps from '../../img/maps.svg'
import maps1 from '../../img/maps1.svg'
import maps2 from '../../img/maps2.svg'
import maps3 from '../../img/maps3.svg'
const PaytionGrid = () => {
  const { t } = useTranslation();


  const renderStars = (count) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(count)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z"/>
          </svg>
        ))}
      </div>
    );
  };

  const Card = ({ children, className = '' }) => (
    <div className={`bg-zinc-900 p-6 rounded-xl flex flex-col ${className}`}>
      {children}
    </div>
  );

  return (
<section className="leftn bg-black text-white py-16 px-4 md:px-8">
  <h1 className="text-4xl font-bold text-center mb-12">
    Paytion — ваш гарант безопасности
  </h1>
  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
    <Card className="items-start w-full lg:w-[60%]">
      <div className="flex items-center mb-4">
        <div>
          <img src={maps2} alt="License Icon" />
          <h3 className="text-2xl font-semibold mb-2">Лицензия на обмены</h3>
          <p className="text-gray-400">мы получили лицензию на обмен <br /> криптовалют от европейского регулятора</p>
        </div>
      </div>
    </Card>

    <Card className="items-end text-right w-full lg:w-[140%] lg:!ml-[-230px]">
      <div className="flex flex-col items-end mb-4">
        <img src={maps} alt="World Map Icon" className="" />
      </div>
    </Card>

    <Card className="w-full">
      <img src={maps1} alt="Financial Dashboard" className="w-full h-auto rounded-lg" />
      <div className='flex flex-col justify-between'>
        <h3 className="text-2xl font-semibold mb-4">Больше 700 довольных клиентов</h3>
        <p className="text-gray-400 mb-6">предоставляем клиентский сервис высшего <br /> уровня, о чем говорят отзывы наших клиентов</p>
        <div>
          <button>
            Смотреть отзывы
          </button>
        </div>
      </div>
    </Card>

    <Card className="">
      <div className='flex justify-center'>
        <img src={maps3} alt="Financial Dashboard" className="w-[318px] h-[200px] rounded-lg " />
      </div>
      <h3 className="text-2xl font-semibold mb-4">Репутация</h3>
      <p className="text-gray-400 mb-6">мы помогли реализовать транзакции общей суммой  <br />$30M для наших клиентов и дорожим репутацией</p>
    </Card>
  </div>
</section>

  );
};

export default PaytionGrid;