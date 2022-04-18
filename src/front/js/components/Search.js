import React, { useState } from 'react';
import '../../styles/Search.css';
import { Card } from '../components/Card.js';

export const Search = ({ allPokemons, handleAddPokemon }) => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        setSearchText(event.target.value)
    }


    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" placeholder="Search a pokemon..." onChange={handleChange}></input>
                <div className="actions">
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <div className="search-body">
                {
                    allPokemons.filter((element) => {
                        if (searchText == '') {
                            return;
                        } else if (element.name.toLowerCase().includes(searchText.toLowerCase())) {
                            return element
                        }
                    }).map((pokemon, index) => {
                        return (
                            <Card
                                key={index}
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.sprites.other.dream_world.front_default}
                                type={pokemon.types[0].type.name}
                                experience={pokemon.base_experience}
                                btnAdd={() => { handleAddPokemon(pokemon) }}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}


