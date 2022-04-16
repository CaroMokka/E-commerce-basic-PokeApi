import React from 'react';
//styles
import '../../styles/Home.css';
//Components
import { Navbar } from '../components/Navbar.js';
import { Search } from '../components/Search.js';
import { Slider } from '../components/Slider.js';
import { Lastests } from '../components/Lastests.js';
import { Card }   from '../components/Card.js';


export const Home = () => {
    return (
        <div className="home-container">
            <div className="home-header">
                <Navbar />
            </div>
            <div className="home-search">
                <Search />
            </div>
            <div className="home-slider">
                <Slider />
            </div>
            <div className="home-sponsors">
                <Card />
            </div>
            <div className="home-lastests">
                <Lastests />
            </div>
        </div>
    );
};


