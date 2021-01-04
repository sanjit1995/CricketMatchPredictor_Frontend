import React from 'react';
import './SubComponents.css'
import ball_img from './ball.jpg'

export const BodyHeader = () => (
    <div className="header">
        <img className="header-item" src={ball_img}/>
        <div className="header-item">
            Cricket Match Winner Predictor
        </div>
    </div>
);