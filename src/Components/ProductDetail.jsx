import React from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css";

const ProductDetail = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.price} сум</p>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
    </div>
  );
};

export default ProductDetail;
