import React, { useState } from 'react';
import CategoryList from './CategoryList';
import ProductsGrid from './ProductsGrid';
import './OfficeProducts.css';

const OfficeProducts = ({onAddToCart}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  console.log(onAddToCart);
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="makeup-store">
      <header>
        <h1>Maкияж</h1>
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