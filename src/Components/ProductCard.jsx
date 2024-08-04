import React, { useState } from 'react';
import './ProductCard.css';
import firstImage from '../assets/firstImage.jpg';
import secondImage from '../assets/SeconImage.jpg';
import thirdImage from '../assets/firstImage.jpg';
import fourthImage from '../assets/SeconImage.jpg';

const productsData = [
  {
    image: firstImage,
    price: '757 000 сум',
    description: 'Пудра Charlotte Tilbury Airbrush Flawless Finish Setting Powder - 1 Fair',
    availability: true,
  },
  {
    image: secondImage,
    price: '820 000 сум',
    description: 'Косметичка Charlotte Tilbury x Disney Beauty Wishes velvet',
    availability: false,
  },
  {
    image: thirdImage,
    price: '1 021 000 сум',
    description: 'Палетка теней Charlotte Tilbury Instant Eye Palette - Pillow Talk',
    availability: false,
  },
  {
    image: fourthImage,
    price: '618 000 сум',
    description: 'Фиксатор для макияжа Charlotte Tilbury Airbrush Flawless Setting Spray 100ml',
    availability: true,
  },
];

const ProductCard = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <h1 style={{ fontFamily: "sans-serif", fontSize: "2.5rem", marginTop: 200, textAlign: "center" }}>Рекомендуемые товары</h1>
      <div className="product-list">
        {productsData.map((product, index) => (
          <div className="card-product" key={index}>
            <img src={product.image} alt={product.description} />
            <p className="price">{product.price}</p>
            <p className={`description ${expandedIndex === index ? 'expanded' : 'collapsed'}`} onClick={() => handleExpandClick(index)}>
              {product.description}
            </p>
            <p className={`availability ${product.availability ? 'in-stock' : 'out-of-stock'}`}>
              {product.availability ? 'В наличии' : 'Нет в наличии'}
            </p>
            <div className="card-buttons">
              <a href="#" className="details-btn">Подробнее</a>
              <a href="#" className="order-btn">Заказать</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
