import React from 'react';
import { Link } from 'react-router-dom';
//Components
import { ItemPokemon } from '../components/ItemPokemon.js';
//styles
import '../../styles/ShoppingBag.css';


export const ShoppingBag = ({ bagPokemons, handleAddPokemon, handleRemovePokemon, handleClearbag }) => {


    return (
        <div className="shoppingbag-container">
            <div className="shoppingbag-header">
                <Link to='/' ><button>Home</button></Link>
                <h1>SHOPPING BAG</h1>
            </div>
            <div className="shoppingbag-body">
                <div className="bodyleft" >
                    <h1>Pokemon Bag</h1>
                    {
                        bagPokemons.length >= 1 && (<button className="clearbag" onClick={handleClearbag}>Clear Bag</button>)
                    }
                    {bagPokemons.length === 0 && (<div className="shoppingbag-empty">Your Pokemon Bag is empty</div>)}
                    <div className="shoppingbag-items">
                        {
                            bagPokemons.map((pokemon, index) => {
                                return (
                                    <ItemPokemon
                                        key={index}
                                        name={pokemon.name}
                                        img={pokemon.sprites.other.dream_world.front_default}
                                        price={pokemon.base_experience}
                                        btnAdd={() => handleAddPokemon(pokemon)}
                                        btnRemove={() => handleRemovePokemon(pokemon)}
                                        quantity={pokemon.quantity}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="bodyright" >
                    <h1>Total Bag</h1>
                    <div className="shoppingbag-total">
                        <div className="shoppingbag-paymentmethods">
                            <h1>Payment Methods</h1>
                            <div className="icons-pay">
                                <i className="fa-brands fa-cc-visa"></i>
                                <i className="fa-brands fa-cc-paypal"></i>
                                <i className="fa-solid fa-credit-card"></i>
                            </div>
                        </div>
                        <div className="total-items">Total Items: {bagPokemons.length}</div>
                        <div className="total-price">Total Price: $0</div>
                    </div>
                    <button>Buy now</button>
                </div>
            </div>
        </div>
    )
}


