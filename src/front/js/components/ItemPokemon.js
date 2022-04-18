import React from 'react';
//styles
import '../../styles/ItemPokemon.css';


export const ItemPokemon = ({ img, name, price, quantity, btnAdd, btnRemove }) => {
    
    return (
        <div className="itempokemon-container">
            <img src={img} className="itempokemon-img" />
            <div className="itempokemon-title">{name}</div>
            <div className="itempokemon-buttons">
                <button className="remove" onClick={btnRemove}> - </button>
                <div className="quantity">{quantity}</div>
                <button className="add" onClick={btnAdd}> + </button>
            </div>
            <div className="itempokemon-price">USD {price}0</div>
        </div>
    )
}


