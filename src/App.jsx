import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home';
import LikedProducts from './Components/LikedProducts';
import OfficeProducts from './Components/OfficeProducts';
import Cart from './Components/Cart';
// import products from './productsData'; // Assuming you have a productsData.js file with product information

function App() {
  const [cart, setCart] = useState([]);
  const [isCartDrawerVisible, setIsCartDrawerVisible] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCancel = () => {
    setIsCartDrawerVisible(false);
  };

  const showCartDrawer = () => {
    setIsCartDrawerVisible(true);
  };

  return (
    <div>
      <Navbar cart={cart} showCartDrawer={showCartDrawer} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<LikedProducts />} />
        <Route path="/products/:category" element={<OfficeProducts onAddToCart={handleAddToCart} />} />
      </Routes>
      <Cart cart={cart} isCartDrawerVisible={isCartDrawerVisible} handleCancel={handleCancel} />
    </div>
  );
}

export default App;
