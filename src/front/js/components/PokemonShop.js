import React, { useState, useEffect } from 'react';
//styles
import '../../styles/PokemonShop.css';
//comaponents
import { Card } from './Card.js';

export const PokemonShop = () => {
    const [allPokemons, setAllPokemons] = useState([])
    const [loading, setLoading] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const res = await fetch(loading)
        const data = await res.json()

        setLoading(data.next)

        function createPokemonObject(result) {
            result.map(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

                setAllPokemons(currentList => [...currentList, data])
                //allPokemons.push(data)

            })
        }

        createPokemonObject(data.results)
        await console.log(allPokemons)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])




    return (
        <div className="pokemonshop-container">
            <h1 className="pokemonshop-title">POKEMON'S SHOP</h1>
            <div className="pokemonshop-body">
                {
                    allPokemons.map((pokemon, index) => {
                        return (
                            <Card
                                key={index}
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.sprites.other.dream_world.front_default}
                                type={pokemon.types[0].type.name}
                                experience={pokemon.base_experience} />
                        )
                    })
                }
            </div>
            <button className="load-more" onClick={() => getAllPokemons()}>Load More...</button>
        </div>
    )
}

