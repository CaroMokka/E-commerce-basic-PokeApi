import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import injectContext from './front/js/store/appContext.js';
//Components
//Pages

//styles
import './App.css';
import { Home } from './front/js/pages/Home.js';

const App = () => {
  return (


    <BrowserRouter>

      <Routes>
        <Route path='/' exact element={<Home/>} />
       {/*  <Route path='/bag' exact element={<ShoppingBag/>} /> */}
      </Routes>

    </BrowserRouter>


  );
}

export default injectContext(App);
