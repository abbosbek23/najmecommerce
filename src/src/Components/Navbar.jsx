import React, { useEffect, useState } from 'react';
import { Input, Modal, Checkbox, Button, Drawer } from 'antd';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/Логотип_PNG-04.png';
import homeicon from '../assets/home (1).png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navbar.css';

function Navbar({ cart, showCartDrawer }) {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isPasswordRecoveryModalVisible, setIsPasswordRecoveryModalVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
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

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  }

  return (
    <div className="navbar">
      <div className="top-bar">
        <div className="logo">
          <a href="/" className='desktop-logo'>
            <img src={logo} alt="femi Cosmetics" />
          </a>
       
        </div>
        <div className="search">
          <input type="text" placeholder="Поиск" />
          <SearchIcon />
        </div>
        <div className="icons">
        <a href="/" className='mobile'>
            <img src={homeicon} alt="home" />
          </a>
          <StarBorderIcon className="icon-button" onClick={() => navigate('/liked')} />
          <ShoppingCartIcon className="icon-button" onClick={showCartDrawer} />
          <AccountCircle className="icon-button" onClick={showLoginModal} />
          <MenuIcon className="icon-button" onClick={toggleDrawer} />
        </div>
      </div>
      <div className="bottom-bar">
        <a onClick={() => navigate('/products/makeup')}>Макияж</a>
        <a onClick={() => navigate('/products/care')}>Уход</a>
        <a onClick={() => navigate('/products/parfume')}>Парфюмерия</a>
        <a onClick={() => navigate('/products/accessories')}>Аксессуары</a>
        <a onClick={() => navigate('/products/new')}>Новинки</a>
        <a onClick={() => navigate('/products/contacts')}>Наши контакты</a>
      </div>

      <Drawer
        title="Меню"
        placement="left"
        onClose={toggleDrawer}
        visible={drawerVisible}
        className="mobile-bottom-menu"
      >
        
        <a onClick={() => { navigate('/'); toggleDrawer(); }}>ГЛАВНАЯ</a>
        <a onClick={() => { navigate('/products/makeup'); toggleDrawer(); }}>МАКИЯЖ</a>
        <a onClick={() => { navigate('/products/accessories'); toggleDrawer(); }}>АКСЕССУАРЫ</a>
        <a onClick={() => { navigate('/products/care'); toggleDrawer(); }}>УХОД</a>
        <a onClick={() => { navigate('/products/parfume'); toggleDrawer(); }}>ПАРФЮМЕРИЯ</a>
        <a onClick={() => { navigate('/products/new'); toggleDrawer(); }}>НОВИНКИ</a>
        <a onClick={() => { navigate('/products/contacts'); toggleDrawer(); }}>НАШИ КОНТАКТЫ</a>
        <div className="currency-info">Валюта на сайте: UZS (сум)</div>
      </Drawer>

      <Modal
        title={<div style={{ textAlign: 'center', width: '100%' }}>Личный кабинет</div>}
        centered
        open={isLoginModalVisible}
        onCancel={() => setIsLoginModalVisible(false)}
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
        onCancel={() => setIsRegisterModalVisible(false)}
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
        onCancel={() => setIsPasswordRecoveryModalVisible(false)}
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
    </div>
  );
}

export default Navbar;
