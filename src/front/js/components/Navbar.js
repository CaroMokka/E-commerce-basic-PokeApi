import React, { useState } from 'react';

//styles
import '../../styles/Navbar.css';

//components
import { Bag } from '../components/Bag.js';



export const Navbar = ({ bagPokemons }) => {
    const [toggleMenu, setToggleMenu] = useState(false);


    const handleClick = (e) => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav>
            <div className="mobile">
                <div className="header">
                    <a href="..." className="logo" />
                    <Bag bagPokemons={bagPokemons} />
                    <div className="more"><button onClick={handleClick}><i className="fa-solid fa-bars"></i></button></div>
                </div>
                {
                    toggleMenu && (
                        <div className="links">
                            <a href="...">Champions Pokemon</a>
                            <a href="...">Sign up</a>
                            <a href="...">Login</a>
                        </div>
                    )
                }
            </div>
            <div className="desktop">
                <a href="..." className="logo" />
                <div className="primary">
                    <a href="...">Champions Pokemon</a>
                </div>
                <div className="secondary full">
                    <a href="...">Sign up</a>
                    <a href="...">Login</a>
                    <Bag bagPokemons={bagPokemons} />
                </div>
                <div className="secondary mini">
                    <a href="..." className="more">More</a>
                    <div className="submenu">
                        <a href="...">Sign up</a>
                        <a href="...">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
