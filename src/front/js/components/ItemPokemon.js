import React from 'react';
//styles
import '../../styles/ItemPokemon.css';


export const ItemPokemon = ({ img, name, price }) => {
    return (
        <div className="itempokemon-container">
            <img src={img} className="itempokemon-img"/>
            <div className="itempokemon-title">{name}</div>
            <div className="itempokemon-price">USD {price}0</div>
            <button className="itempokemon-remove"><i className="fa-solid fa-trash-can"></i></button>
        </div>
    )
}


