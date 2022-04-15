import React from 'react';
import '../../styles/Search.css';

export const Search = () => {
    return (
        <div className="search-bar">
            <input type="text"></input>
            <div className="actions">
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    )
}


