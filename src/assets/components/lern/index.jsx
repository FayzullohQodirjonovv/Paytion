import React from "react";
import bak1 from '../../img/bak1.svg'
import bak2 from '../../img/bak2.svg'
import bak3 from '../../img/bak3.svg'
import { useTranslation } from "react-i18next";
import { FaCreditCard, FaUserAlt, FaWallet } from "react-icons/fa";

const products = [
  {
    img:bak1,
    titleKey: "product_card_1_title",
    descriptionKey: "product_card_1_description",
  },
  {
    img:bak2,
    titleKey: "product_card_2_title",
    descriptionKey: "product_card_2_description",
  },
  {
    img:bak3,
    titleKey: "product_card_3_title",
    descriptionKey: "product_card_3_description",
  },
];

const ProductsSection = () => {
  const { t } = useTranslation();

  return (
    <section className=" text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="kelller rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
              <img
              src={product.img}
              alt={`Product ${index + 1}`}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{t(product.titleKey)}</h3>
            <p className="text-sm text-gray-300">{t(product.descriptionKey)}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
