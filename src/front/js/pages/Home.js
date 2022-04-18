import React from 'react';

//styles
import '../../styles/Home.css';

//Components
import { Navbar } from '../components/Navbar.js';
import { Slider } from '../components/Slider.js';
import { News } from '../components/News.js';
import { PokemonShop } from '../components/PokemonShop.js';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer.js'; 


export const Home = ({ handleAddPokemon, bagPokemons }) => {


    return (
        <div className="home-container">
            <div className="home-header">
                <Navbar bagPokemons={bagPokemons} />
            </div>
            <div className="home-slider">
                <Slider />
            </div>
            <div className="home-news">
                <News />
            </div>
            <div className="home-pokemonshop">
                <PokemonShop handleAddPokemon={handleAddPokemon}/>
            </div>
            <div className="home-contact">
                <Contact />
            </div>
            <div className="home-footer">
                <Footer />
            </div>
        </div>
    );
};


