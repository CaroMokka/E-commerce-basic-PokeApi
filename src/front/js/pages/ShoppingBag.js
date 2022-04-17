import React from 'react';
//Components
import { ItemPokemon } from '../components/ItemPokemon.js';
//styles
import '../../styles/ShoppingBag.css';


export const ShoppingBag = ({ bagPokemons }) => {
    return (
        <div className="shoppingbag-container">
            <div className="shoppingbag-header">
                <h1>SHOPPING BAG</h1>
            </div>
            <div className="shoppingbag-body">
                <div className="bodyleft" >
                    <h1>Pokemon Bag</h1>
                    <button className="clearbag">Clear Bag</button>
                    { bagPokemons.length === 0 && (<div className="shoppingbag-empty">No items are added.</div>) }
                    <div className="shoppingbag-items">
                        {
                            bagPokemons.map((pokemon, index) => {
                                return (
                                    <ItemPokemon key={index} name={pokemon.name} img={pokemon.sprites.other.dream_world.front_default}  price={pokemon.base_experience}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="bodyright" >
                    <h1>Total Bag</h1>
                    <div className="shoppingbag-total">
                        <div className="shoppingbag-paymentmethods">Payment Methods</div>
                        <div className="shoppingbag-total">Total a Pagar:</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


