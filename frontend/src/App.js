import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Cart from './Cart';
import Faqs from './Faqs';
import Ourservices from './Ourservices';
import Ourstory from './Ourstory';
import Plants from './Plants';
import Profile from './Profile';
import ProductDetails from './ProductDetails';
import Registration from './Registration';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path = '/cart' element = {<Cart/>}/>
        <Route exact path = '/faqs' element = {<Faqs/>}/>
        <Route exact path = '/ourservice' element = {<Ourservices/>}/>
        <Route exact path = '/ourstory' element = {<Ourstory/>}/>
        <Route exact path = '/' element = {<Plants/>}/>
        <Route exact path='/product/:id' element = {<ProductDetails/>}/>
        <Route exact path = '/profile' element = {<Profile/>}/> 
        <Route exact path='/registration' element = {<Registration/>}/>       
      </Routes>
    </div>
  );
}

export default App;
