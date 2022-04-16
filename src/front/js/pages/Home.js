import React from 'react';
//Components
import { Navbar } from '../components/Navbar.js';
import { Search } from '../components/Search.js';
import { Slider } from '../components/Slider.js';
import { Card }   from '../components/Card.js';


export const Home = () => {
    return (
        <div>
            <Navbar />
            <Search />
            <Slider />
            <Card />
        </div>
    );
};


