import React from 'react';
import { Drawer } from 'antd';
import cartvideo from "../assets/cartvideo.mp4";

const Cart = ({ cart, isCartDrawerVisible, handleCancel }) => {
  return (
    <Drawer
      style={{ backgroundColor: "#f5f4f6" }}
      title="Корзина"
      placement="right"
      closable={true}
      onClose={handleCancel}
      open={isCartDrawerVisible}
    >
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <video
            src={cartvideo}
            loop
            autoPlay
            muted
            style={{ width: '100%', height: 'auto' }}
          ></video>
          <p>Ваша корзина пуста</p>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <p>{item.name}</p>
                <p>{item.price} сум</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Drawer>
  );
};

export default Cart;
