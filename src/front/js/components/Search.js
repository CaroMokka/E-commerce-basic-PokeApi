import React, { useState } from 'react';
import '../../styles/Search.css';

export const Search = () => {
   /*  const [ searchText, setSearchText ] = useState("") */

    /* const handleChange = () => {
        return 
    } */


    return (
        <div className="search-bar">
            <input type="text" placeholder="Search a pokemon" ></input>
            <div className="actions">
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    )
}


