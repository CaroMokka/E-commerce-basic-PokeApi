import React from 'react';
import '../../styles/Search.css';

export const Search = () => {
    return (
        <div className="search-bar">
            <input type="text"></input>
            <div className="actions">
                <button>
                    <span className="lupa-icon">Lupa</span>
                </button>
            </div>
        </div>
    )
}


