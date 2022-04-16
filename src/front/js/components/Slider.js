import React from 'react';
//styles
import '../../styles/Slider.css';

export const Slider = () => {
    return (
        <div className="slider-container">
            <div className="slider-viewport">
                <div className="slide" id="slide1">
                    <h1>Los Campeones de la Liga Johto</h1>
                    <span>Las aventuras de Ash y pikachu en la región de Johto continúan con la llegada de la cuarta temporada de la serie Pokémon</span>
                </div>
                <div className="slide" id="slide2">
                    <h1>Florece la primavera con el debut de Tapu Bulu Pokémon GO</h1>
                    <span>Brinca entre las flores y combates mientrás capturas, eclosionas y combates un ramillete de hermosos pokémon</span>
                </div>
                <div className="slide" id="slide3">
                <h1>Florece la primavera con el debut de Tapu Bulu Pokémon GO</h1>
                    <span>Brinca entre las flores y combates mientrás capturas, eclosionas y combates un ramillete de hermosos pokémon</span>
                </div>
            </div>
            <div className="links">
                <a href="#slide1">1</a>
                <a href="#slide2">2</a>
                <a href="#slide3">3</a>
            </div>
        </div>
    )
}


