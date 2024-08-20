import React from 'react';
import {  Route, Routes as Switch } from 'react-router-dom';
import Home from '../Home';
import LikedProducts from '../Components/LikedProducts';
import OfficeProducts from '../Components/OfficeProducts';

const Routes = () => {
  return (
    <Switch>
            <Route path="/" element={<Home />} />
			<Route path='/liked' element={<LikedProducts/>}/>
      <Route path='/products' element={<OfficeProducts/>}/>
    </Switch>
  )
}

export default Routes