import React from 'react';
//styles
import '../../styles/Lastests.css';
//comaponents
import { Card } from '../components/Card.js';

export const Lastests = () => {
    return (
        <div className="lastests-container">
            <h1 className="lastests-title">NEW ARRIVAL!</h1>
            <div className="lastests-body">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}


