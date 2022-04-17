import React, { useState, useEffect } from 'react';


//styles
import '../../styles/Lastests.css';
//comaponents
import { Card } from '../components/Card.js';

export const Lastests = () => {
    const [ allPokemons, setAllPokemons ] = useState([])
    const [ loading, setLoading] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const res = await fetch(loading)
        const data = await res.json()

        setLoading(data.next)
        
        function createPokemonObject(result) {
            result.map( async ( pokemon ) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

            setAllPokemons( currentList => [...currentList, data] )
                //allPokemons.push(data)
                
            })
        }

        createPokemonObject(data.results)
        await console.log(allPokemons)
    }

    useEffect(()=>{
        getAllPokemons()
    },[])









    return (
        <div className="lastests-container">
            <h1 className="lastests-title">NEW ARRIVAL!</h1>
            <div className="lastests-body">
                <Card/>
            </div>
            <button>Load More...</button>
        </div>
    )
}

