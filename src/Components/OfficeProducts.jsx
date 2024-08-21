import React, { useState } from 'react';
import CategoryList from './CategoryList';
import ProductsGrid from './ProductsGrid';
import './OfficeProducts.css';
import { useLocation } from 'react-router-dom';

const OfficeProducts = ({onAddToCart}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  console.log(onAddToCart);
  const location = useLocation();
  const category = location.state?.category;
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="makeup-store">
      <header>
        <h1>{category}</h1> 
        <p>Мы нашли 248 товаров доступных для вас</p>
      </header>
      <main>
        <CategoryList onSelectCategory={handleCategorySelect} />
        <ProductsGrid onAddToCart={onAddToCart} selectedCategory={selectedCategory} />
      </main>
    </div>
  );
};

export default OfficeProducts;