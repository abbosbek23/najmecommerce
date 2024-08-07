import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from './ProductsCard';
import firstImage from '../assets/firstImage.jpg';
import secondImage from '../assets/SeconImage.jpg';

const defaultProducts = [
  {
    name: 'Charlotte Tilbury K.I.S.S.I.N.G Lipstick and Lip Gloss Duos',
    price: '479 000',
    image: firstImage
  },
  {
    name: 'IT Cosmetics Крем CC+ SPF 50+, 12 мл, Fair',
    price: '378 000',
    image: secondImage
  },
  {
    name: 'IT Cosmetics Крем CC+ SPF 50+, 12 мл, Fair',
    price: '378 000',
    image: secondImage
  },
  {
    name: 'IT Cosmetics Крем CC+ SPF 50+, 12 мл, Fair',
    price: '378 000',
    image: secondImage
  },
  {
    name: 'IT Cosmetics Крем CC+ SPF 50+, 12 мл, Fair',
    price: '378 000',
    image: secondImage
  },
   {
    name: 'IT Cosmetics Крем CC+ SPF 50+, 12 мл, Fair',
    price: '378 000',
    image: secondImage
  },
  // Add more default products as needed
];

const ProductsGrid = ({ selectedCategory }) => {
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
      {products.map((product, index) => (
        <ProductsCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
