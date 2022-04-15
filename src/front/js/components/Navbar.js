import React, { useState } from 'react';
//Styles
import '../../styles/Navbar.css';

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    const handleClick = (e) => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav>
            <div className="mobile">
                <div className="header">
                    <div className="logo">Logo</div>
                    <div className="more"><button onClick={handleClick}><i className="fa-solid fa-bars"></i></button></div>
                </div>
                {
                    toggleMenu && (
                        <div className="links">
                            <a href="...">Services</a>
                            <a href="...">About</a>
                            <a href="...">Contact</a>
                            <a href="...">Search</a>
                            <a href="...">Sign up</a>
                            <a href="...">Login</a>
                        </div>
                    )
                }
            </div>
            <div className="desktop">
                <div className="logo">Logo</div>
                <div className="primary">
                    <a href="...">Services</a>
                    <a href="...">About</a>
                    <a href="...">Contact</a>
                </div>
                <div className="secondary full">
                    <a href="...">Search</a>
                    <a href="...">Sign up</a>
                    <a href="...">Login</a>
                </div>
                <div className="secondary mini">
                    <a href="..." className="more">More</a>
                    <div className="submenu">
                        <a href="...">Search</a>
                        <a href="...">Sign up</a>
                        <a href="...">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
