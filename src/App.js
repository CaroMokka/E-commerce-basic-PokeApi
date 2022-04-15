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
        <Route path='/about' element={<h1>About</h1>} />


      </Routes>

    </BrowserRouter>


  );
}

export default injectContext(App);
