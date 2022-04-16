import React from 'react';
//styles
import '../../styles/CardNews.css';

export const CardNews = ({ title, text }) => {
    return (
        <div className="cardnews-container">
            <div className="cardnews-body-left">
                <div className="cardnews-img">
                    <img src="..." alt="imagen" />
                </div>

            </div>
            <div className="cardnews-body-right">
                <div className="cardnews-title">
                    <span>{title}</span>
                </div>
                <div className="cardnews-text">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}


