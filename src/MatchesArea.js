import React from 'react';
import './SubComponents.css'
import {MatchDetails} from "./MatchDetails.js";

export const MatchesArea = (props) => (
    <div className="matches-area" key={props.key}>
        {props.value.map((row,idx) => (
            <MatchDetails value={row} key={idx}/>
        ))}
    </div>
);