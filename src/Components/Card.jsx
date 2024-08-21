import React from 'react';
import './Card.css';
import firstImage from "../assets/ezhednevnik-na-zakaz.jpg";
import secondImage from "../assets/2578881285.jpg";
import thirdImage from "../assets/rBVaVl1o62KASHqyAAKsToXLxsg530.jpg";
import fourImage from "../assets/1678934152_bogatyr-club-p-kantstovari-fon-foni-krasivo-1.jpg";
import rightArrow from "../assets/right-arrow.png";
import { useNavigate } from 'react-router-dom';

const cardsData = [
  {
    title: 'Ежедневники',
    description: '',
    image: firstImage,
  },
  {
    title: 'Тетради',
    description: '',
    image: secondImage,
  },
  {
    title: 'Ручки и карандаши',
    description: '',
    image: thirdImage,
  },
  {
    title: 'Новинки',
    description: '',
    image: fourImage,
  },
];

const Card = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    navigate(`/products/${title}`, { state: { category: title } });
  };

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div
          className="card"
          key={index}
          style={{ backgroundImage: `url(${card.image})`, cursor: "pointer" }}
          onClick={() => handleCardClick(card.title)}
        >
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className='card-btns' style={{ display: "flex", alignItems: "center", justifyContent: "start", gap: "10px", marginLeft: "0px" }}>
              <a href="#" style={{ textDecoration: "none" }}>Подробнее </a>
              <img src={rightArrow} alt="icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
