import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './CategoryList.css';

const defaultCategories = [
  "ВСЁ ДЛЯ МАКИЯЖА",
  "ГУБЫ",
  "ГЛАЗА",
  "ЛИЦО",
  "НАБОРЫ",
  "АКСЕССУАРЫ",
  "БРОВИ",
  "УХОД",
  "ПОДАРОЧНЫЕ СЕРТИФИКАТЫ"
];

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://najm.pythonanywhere.com/products/categories/')
      .then(response => {
        const categoryNames = response.data.map(category => category.name);
        setCategories(categoryNames.length > 0 ? categoryNames : defaultCategories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setCategories(defaultCategories);
      });
  }, []);

  return (
    <div className="category-list">
      <h2>Категория</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
