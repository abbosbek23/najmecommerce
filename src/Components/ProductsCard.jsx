import React from 'react';

const ProductsCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <p>{product.price} сум</p>
        <p>{product.name}</p>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductsCard;