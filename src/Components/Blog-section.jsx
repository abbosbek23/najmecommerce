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
      <h1>Наш блог</h1>
      <p>В нашем блоге вы найдете вдохновляющие статьи о красоте, трендах макияжа, секретах ухода, текущих акциях и специальных предложениях.</p>
      <button>Посмотреть все статьи</button>
      <div className="features">
        <div className="feature">
          <img src={icon1} alt="Icon 1" />
          <h2>Быстрая доставка красоты</h2>
          <p>Мы осуществляем доставку наших товаров по всей территории Узбекистана</p>
        </div>
        <div className="feature">
          <img src={icon2} alt="Icon 2" />
          <h2>Разнообразие косметики</h2>
          <p>Мы предлагаем широкий ассортимент качественной косметики от лучших брендов</p>
        </div>
        <div className="feature">
          <img src={icon3} alt="Icon 3" />
          <h2>Онлайн консультации</h2>
          <p>Наши эксперты готовы предоставить Вам персональную помощь и консультации онлайн</p>
        </div>
        <div className="feature">
          <img src={icon4} alt="Icon 4" />
          <h2>Удобные платежи</h2>
          <p>Оплачивайте свои покупки удобным для Вас способом</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
