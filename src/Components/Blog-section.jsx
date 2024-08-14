// BlogSection.js
// import React from 'react';
import './BlogSection.css';
import icon1 from '../assets/delivery.png'; // Tegishli ikonalar uchun tasvir yo'lini kiriting
import icon2 from '../assets/assortment.png';
import icon3 from '../assets/consulting.png';
import icon4 from '../assets/wallet.png';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <h1>О нас</h1>
      <div className="features">
        <div className="feature">
          <img src={icon1} alt="Icon 1" />
          <h2>Быстрая доставка вашего заказа</h2>
          <p>У нас имеется так и доставка по городу, так и по всей территории Узбекистана</p>
        </div>
        <div className="feature">
          <img src={icon2} alt="Icon 2" />
          <h2>Разнообразие канцелярских товаров</h2>
          <p>Мы предлагаем широкий ассортимент качественной премиальной канцелярии собственного производства</p>
        </div>
        <div className="feature">
          <img src={icon3} alt="Icon 3" />
          <h2>Онлайн консультации</h2>
          <p>Наши эксперты готовы предоставить Вам персональную помощь и консультации онлайн</p>
        </div>
        <div className="feature">
          <img src={icon4} alt="Icon 4" />
          <h2>Удобные платежи</h2>
          <p>Оплачивайте свои покупки удобным образом</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
