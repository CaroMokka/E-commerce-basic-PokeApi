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
  
  //handleAddPokemons function -------------------------------------------->
  const handleAddPokemon = (pokemon) => {
    const pokemonExist = bagPokemons.find( item => item.id === pokemon.id);
    if(pokemonExist){
      setBagPokemons(bagPokemons.map( item => item.id === pokemon.id ? {...pokemonExist, quantity: pokemonExist.quantity + 1} : item))
    } else {
      setBagPokemons([...bagPokemons, {...pokemon, quantity:1}])
    }
    /* setBagPokemons((currentList) => [ ...currentList, pokemon ]) */
  }


  //handleRemovePokemon function -------------------------------------------->
  const handleRemovePokemon = (pokemon) => {
    const pokemonExist = bagPokemons.find( item => item.id === pokemon.id);
    if(pokemonExist.quantity === 1){
      setBagPokemons(bagPokemons.filter( item => item.id !== pokemon.id))
    } else {
      setBagPokemons(
        bagPokemons.map( (item) => item.id === pokemon.id ? {...pokemonExist, quantity: pokemonExist.quantity -1 } : item)
      )
    }
  }

  
  return (


    <BrowserRouter>

      <Routes>
        <Route path='/' exact element={<Home bagPokemons={bagPokemons} handleAddPokemon={handleAddPokemon} />} />
        <Route path='/bag' exact element={<ShoppingBag bagPokemons={bagPokemons} handleAddPokemon={handleAddPokemon} handleRemovePokemon={handleRemovePokemon} />} />
      </Routes>

    </BrowserRouter>


  );
}

export default App;
