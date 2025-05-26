import React from 'react';
import { useTranslation } from 'react-i18next';
import image_1 from '../../img/video1.svg';
import image_2 from '../../img/video2.svg';
import image_3 from '../../img/video3.svg';

const TrustUsSection = () => {
  const { t } = useTranslation();

  const images = [
    {
      id: 1,
      src: image_1,
      alt: "Image 1"
    },
    {
      id: 2,
      src: image_2,
      alt: "Image 2"
    },
    {
      id: 3,
      src: image_3,
      alt: "Image 3"
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        {t('trust_us_heading')}
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="flex justify-center items-center overflow-hidden space-x-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="flex-shrink-0 w-72 h-[400px] bg-zinc-800 rounded-xl p-4 transition-all duration-300 ease-in-out border border-zinc-700 hover:border-blue-600"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            ></button>
          ))}
        </div>

        <div className="absolute bottom-0 right-0 flex items-center space-x-8 mr-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-zinc-700 hover:bg-zinc-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-zinc-700 hover:bg-zinc-600 text-white rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustUsSection;
