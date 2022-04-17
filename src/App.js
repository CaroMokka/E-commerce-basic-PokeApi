import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Styles
import './App.css';
//Pages
import { Home } from './front/js/pages/Home.js';
import { ShoppingBag } from './front/js/pages/ShoppingBag.js';



const App = () => {
  //State to 'ShoppingBag' and 'Navbar' > 'Bag'
  const [ bagPokemons, setBagPokemons ] = useState([])
  console.log(bagPokemons)
  
  const handleAddPokemon = (pokemon) => {
    setBagPokemons((currentList) => [ ...currentList, pokemon ])
  }

  return (


    <BrowserRouter>

      <Routes>
        <Route path='/' exact element={<Home bagPokemons={bagPokemons} handleAddPokemon={handleAddPokemon} />} />
        <Route path='/bag' exact element={<ShoppingBag bagPokemons={bagPokemons} />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
