import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard';
import defaultProducts from './ProductData';

const ProductsGrid = ({ selectedCategory, onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      axios.get(`https://najm.pythonanywhere.com/products/categories/${selectedCategory}`)
        .then(response => {
          const fetchedProducts = response.data;
          setProducts(fetchedProducts.length > 0 ? fetchedProducts : defaultProducts);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setProducts(defaultProducts);
        });
    } else {
      setProducts(defaultProducts);
    }
  }, [selectedCategory]);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductsCard key={product.id} onAddToCart={onAddToCart} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
