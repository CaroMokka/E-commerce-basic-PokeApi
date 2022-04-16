import React from 'react';
//styles
import '../../styles/CardNews.css';

export const CardNews = () => {
    return (
        <div className="cardnews-container">
            <div className="cardnews-body">
                <div className="cardnews-img">
                    <img src="..." alt="imagen"/>
                </div>
                <div className="cardnews-title">
                    <span>Title</span>
                </div>
                <div className="cardnews-text">
                    <p>lorem ipsusm sflep tolerium</p>
                </div>
            </div>
        </div>
    )
}


