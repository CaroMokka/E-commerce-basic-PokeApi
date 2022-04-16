import React from 'react';
//styles
import '../../styles/News.css';
//components
import { CardNews } from '../components/CardNews.js';


export const News = () => {
    return (
        <div className="news-container">
            <h1>News</h1>
            <div className="news-body">
                <CardNews
                    title="HOla soy un pojemom"
                    text="lm,asncnsancnanclwsmncls"
                />
                <CardNews
                    title="Soy un noticia de pokemones"
                    text="mmmmmmnjnj"
                />
            </div>
        </div>
    )
}


