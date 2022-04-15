import React from 'react';
//styles
import '../../styles/Slider.css';

export const Slider = () => {
    return (
        <div className="slider-container">
            <div className="slider-viewport">
                <div className="slide" id="slide1">Slide 1</div>
                <div className="slide" id="slide2">Slide 2</div>
                <div className="slide" id="slide3">Slide 3</div>
            </div>
            <div className="links">
                <a href="#slide1">1</a>
                <a href="#slide2">2</a>
                <a href="#slide3">3</a>
            </div>
        </div>
    )
}


