import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./ProductDetail.css";

const ProductDetail = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const { image, name, price, description } = product;

  return (
    <div style={{backgroundColor:"white",height:"82.5VH"}}>
    <div className="product-detail">
      {image && image.length > 1 ? (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="product-images-swiper"
        >
          {image.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <img src={imgSrc} alt={`${name} image ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        image && image.length === 1 && (
          <img src={image[0]} alt={name} className="single-product-image" />
        )
      )}

      <div className="product-info">
        <h1>{name}</h1>
        <p className="product-price">{price} UZS</p>
        <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
        <p>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;
