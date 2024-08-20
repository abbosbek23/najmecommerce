import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home';
import LikedProducts from './Components/LikedProducts';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<LikedProducts />} />
      </Routes>
    </div>
  );
}

export default App;