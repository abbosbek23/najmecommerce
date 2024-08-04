import React, { useEffect, useState } from 'react';
import { Drawer, Input, Button, Checkbox, Modal } from 'antd';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../assets/Логотип_PNG-04.png';
import cartvideo from "../assets/cartvideo.mp4";
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isPasswordRecoveryModalVisible, setIsPasswordRecoveryModalVisible] = useState(false);
  const [isCartDrawerVisible, setIsCartDrawerVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get('https://najm.pythonanywhere.com/products/categories/');
        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getCategory();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const showLoginModal = () => {
    setIsLoginModalVisible(true);
    setIsRegisterModalVisible(false);
    setIsPasswordRecoveryModalVisible(false);
  };

  const showRegisterModal = () => {
    setIsRegisterModalVisible(true);
    setIsLoginModalVisible(false);
    setIsPasswordRecoveryModalVisible(false);
  };

  const showPasswordRecoveryModal = () => {
    setIsPasswordRecoveryModalVisible(true);
    setIsLoginModalVisible(false);
    setIsRegisterModalVisible(false);
  };

  const showCartDrawer = () => {
    setIsCartDrawerVisible(true);
  };

  const handleCancel = () => {
    setIsLoginModalVisible(false);
    setIsRegisterModalVisible(false);
    setIsPasswordRecoveryModalVisible(false);
    setIsCartDrawerVisible(false);
  };

  const goToLikedProducts = () => {
    navigate('/liked');
  };

  return (
    <div className="navbar">
      <div className="top-bar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="femi Cosmetics" />
          </a>
        </div>
        <div className="search">
          <input type="text" placeholder="Поиск" />
          <SearchIcon />
        </div>
        <div className="icons">
          <span>UZS (сум)</span>
          <StarBorderIcon className="icon-button" onClick={goToLikedProducts} />
          <ShoppingCartIcon className="icon-button" onClick={showCartDrawer} />
          <AccountCircle className="icon-button" onClick={showLoginModal} />
        </div>
      </div>
      <div className="bottom-bar">
        <a href="#brands">Бренды</a>
        <a href="#makeup">Макияж</a>
        <a href="#care">Уход</a>
        <a href="#perfume">Парфюмерия</a>
        <a href="#accessories">Аксессуары</a>
        <a href="#giftcards">Подарочные сертификаты</a>
        <a href="#news">Новинки</a>
        <a href="#family">femiLY</a>
        <a href="#blog">Блог</a>
        <a href="#contacts">Наши контакты</a>
      </div>

      <Modal
        title={<div style={{ textAlign: 'center', width: '100%' }}>Личный кабинет</div>}
        centered
        open={isLoginModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ textAlign: 'center' }}>
          <Input
            placeholder="Номер телефона"
            style={{ marginBottom: '10px', padding: '10px' }}
          />
          <Input.Password
            placeholder="Пароль"
            style={{ marginBottom: '10px', padding: '10px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <Checkbox>Запомнить меня</Checkbox>
            <a href="#" onClick={showPasswordRecoveryModal}>Забыли пароль?</a>
          </div>
          <Button
            type="primary"
            style={{ width: '100%', marginBottom: '10px' }}
          >
            Войти
          </Button>
          <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></div>
            <span style={{ padding: '0 10px' }}>ИЛИ</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></div>
          </div>
          <Button
            type="default"
            style={{ width: '100%', border: '1px solid #000' }}
            onClick={showRegisterModal}
          >
            Создать аккаунт
          </Button>
        </div>
      </Modal>
      <Modal
        title={<div style={{ textAlign: 'center', width: '100%' }}>Регистрация</div>}
        centered
        open={isRegisterModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ textAlign: 'center' }}>
          <p>Уже есть аккаунт? <a href="#" onClick={showLoginModal}>Войдите в свой аккаунт</a></p>
          <Input
            placeholder="Номер телефона"
            style={{ marginBottom: '10px', padding: '10px' }}
          />
          <Button
            type="primary"
            style={{ width: '100%', marginBottom: '10px' }}
          >
            Далее
          </Button>
        </div>
      </Modal>
      <Modal
        title={<div style={{ textAlign: 'center', width: '100%' }}>Восстановление пароля</div>}
        centered
        open={isPasswordRecoveryModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div style={{ textAlign: 'center' }}>
          <p>Вспомнили пароль? <a href="#" onClick={showLoginModal}>Войдите в свой аккаунт</a></p>
          <Input
            placeholder="Номер телефона"
            style={{ marginBottom: '10px', padding: '10px' }}
          />
          <Button
            type="primary"
            style={{ width: '100%', marginBottom: '10px' }}
          >
            Далее
          </Button>
        </div>
      </Modal>
      <Drawer style={{ backgroundColor: "#f5f4f6" }}
        title="Корзина"
        placement="right"
        closable={true}
        onClose={handleCancel}
        open={isCartDrawerVisible}
      >
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
      </Drawer>
    </div>
  );
}

export default Navbar;
