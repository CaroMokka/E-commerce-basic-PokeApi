import React from 'react';
//styles
import '../../styles/Lastests.css';
//comaponents
import { Card } from '../components/Card.js';

export const Lastests = () => {
    return (
        <div className="lastests-container">
            <div className="lastests-title">NEW ARRIVAL!</div>
            <div className="lastests-body">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}


