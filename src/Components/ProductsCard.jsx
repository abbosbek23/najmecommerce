import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image[0]} alt={product.name} />
      </Link>
      <div className="product-info">
        <p>{product.price} сум</p>
        <p>{product.name}</p>
        <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductsCard;
