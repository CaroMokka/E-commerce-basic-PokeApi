import React from 'react';
import { Link } from 'react-router-dom';
//Styles
import '../../styles/Bag.css';

export const Bag = () => {
    return (

        <div>
            <Link to='/bag'>

                <div className="notification">
                    <div className="count">6</div>
                    <div className="icon-bag"><i className="fa-solid fa-bag-shopping"></i></div>
                </div>

            </Link>
        </div>
    )
}


