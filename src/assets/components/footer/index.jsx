import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import sho from '../../img/SHO.svg'
const Footer = () => {
  return (
    <footer className="mt-[100px] text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-[90%] m-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/3 lg:w-1/4 mb-10 md:mb-0 pr-4">
          <h2 className="text-4xl font-bold mb-4">Paytion</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Финансовые услуги и продукты <br /> для жизни и бизнеса
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-gray-700 rounded-full text-white hover:bg-gray-800 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-lg" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-gray-700 rounded-full text-white hover:bg-gray-800 transition-colors duration-300"
              aria-label="Telegram"
            >
              <FontAwesomeIcon icon={faTelegramPlane} className="text-lg" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 border border-gray-700 rounded-full text-white hover:bg-gray-800 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-lg" />
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-wrap justify-between gap-y-10">
          <div className="w-1/2 sm:w-1/3 lg:w-auto mb-6 sm:mb-0">
            <h3 className="text-lg font-bold mb-5 uppercase">Компания</h3>
            <ul>
              <li className="mb-3">
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-auto mb-6 sm:mb-0">
            <h3 className="text-lg font-bold mb-5 uppercase">Продукты</h3>
            <ul>
              <li className="mb-3">
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  Обмен валют
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  Консьерж сервис
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  Банковская карта <span className="text-gray-500 text-xs">(Скоро)</span>
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  Персональный счет <span className="text-gray-500 text-xs">(Скоро)</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  Web3 кошелек <span className="text-gray-500 text-xs">(Скоро)</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 lg:w-auto">
            <h3 className="text-lg font-bold mb-5 uppercase">Контакты</h3>
            <ul>
              <li className="mb-3">
                <a href="mailto:info@paytion.com" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  info@paytion.com
                </a>
              </li>
              <li className="mb-3">
                <a href="tel:+79999999999" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  +7 (999) 999-99-99
                </a>
              </li>
              <li className="mt-4">
                <div className="relative inline-flex items-center bg-[#2c2c2c] rounded-md py-2 px-3 pr-8 text-white text-sm cursor-pointer border border-gray-700">
                  <FontAwesomeIcon icon={faGlobe} className="mr-2 text-gray-400" />
                  <select
                    className="appearance-none bg-transparent border-none text-white focus:outline-none cursor-pointer"
                    defaultValue="English"
                  >
                    <option value="English" className="bg-[#2c2c2c] text-white">English</option>
                    <option value="Русский" className="bg-[#2c2c2c] text-white">Русский</option>
                    <option value="O'zbek" className="bg-[#2c2c2c] text-white">O'zbek</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.57 4.57z" />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-16 pt-8 flex flex-wrap justify-between items-center text-gray-400 text-xs sm:text-sm px-4 sm:px-0">
        <p className="mb-2 sm:mb-0">&copy; 2023 «Paytion»</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#" className="hover:text-white transition-colors duration-300">
            Договор оферты
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            Политика конфиденциальности
          </a>
        </div>
        <div className="mt-4 sm:mt-0">
          <img src={sho} alt="SHO?" className="h-6 filter brightness-0 invert" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;