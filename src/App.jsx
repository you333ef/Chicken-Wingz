import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import CATEGORY from './CATEGORY'
import Simple from './Simple'
import EveryOne from './EveryOne'
import Cart from './Cart';

import Check from './Check'
import Try from './Try'
import Delicious from './Delicious'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from './HomeMain'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
      <Route path='/' element={<HomeMain/>}/>
      <Route path="/Cart" element={<Cart />} />

      
    
      
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App