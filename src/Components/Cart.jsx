import React, { useState } from 'react';
import { Drawer, Modal, Input, Button } from 'antd';
import cartvideo from "../assets/cartvideo.mp4";

const Cart = ({ cart, isCartDrawerVisible, handleCancel }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: ''
  });

  // This function will handle the checkout process
  const handleCheckout = () => {
    setIsModalVisible(true);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = () => {
    console.log("Form submitted with data:", formData);
    setIsModalVisible(false); // Close the modal after submission
  };

  const handleRemoveItem = (index) => {
    console.log(`Removing item at index ${index}`);
  };

  // Utility to format the price without leading zeros
  const formatPrice = (price) => {
    return price.toString().replace(/^0+/, '');
  };

  return (
    <>
      <Drawer
        style={{ backgroundColor: "#f4f4f4" }}
        title="Корзина"
        placement="right"
        closable={true}
        onClose={handleCancel}
        open={isCartDrawerVisible}
        width={400}
        styles={{ body: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' } }}
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
          <>
            <div>
              {cart.map((item, index) => (
                <div key={index} className="cart-item" style={{ display: 'flex', marginBottom: '20px' }}>
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    style={{ width: '50px', height: '50px', marginRight: '10px' }}
                  />
                  <div className="cart-item-info" style={{ flex: '1' }}>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{item.name}</p>
                    <p style={{ margin: 0 }}>{formatPrice(item.price)} сум</p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: '#000',
                      fontSize: '20px'
                    }}
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 'auto' }}>
              <p style={{ fontSize: '18px', margin: '20px 0' }}>
                Итоговая цена: <strong>{formatPrice(cart.reduce((total, item) => total + item.price, 0))} сум</strong>
              </p>
              <button
                style={{
                  width: '100%',
                  padding: '10px 0',
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
                onClick={handleCheckout}
              >
                Оформить заказ
              </button>
            </div>
          </>
        )}
      </Drawer>

      <Modal
        title="Оформление заказа"
        visible={isModalVisible}
        onOk={handleFormSubmit}
        onCancel={() => setIsModalVisible(false)}
        okText="Подтвердить"
        cancelText="Отмена"
      >
        <div>
          <Input
            placeholder="Имя"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />
          <Input
            placeholder="Фамилия"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            style={{ marginBottom: '10px' }}
          />
          <Input
            placeholder="Телефон номер"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </Modal>
    </>
  );
};

export default Cart;
