import React from 'react';

//styles
import '../../styles/Card.css';

export const Card = ({ id, name, image, type, experience, btnAdd }) => {


    return (
        <div className="card-container">
            <div className="card-body">
                <div className="card-img">
                    <img src={image} alt={name}/>
                </div>
                <div className="card-id"><span>#{id}</span></div>
                <div className="card-title"><span>{name}</span></div>
                <div className="card-type"><span>Type: {type}</span></div>
                <div className="card-experience"><span>Exp: {experience}</span></div>
                <div className="card-price">
                    <span>$USD {experience}0</span>
                </div>
            </div>
            <div className="card-buttons">
                <button onClick={btnAdd} >Add a Bag</button>
            </div>
        </div>
    )
}


