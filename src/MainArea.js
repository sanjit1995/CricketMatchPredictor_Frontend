import React from 'react';
import './SubComponents.css';
import {MatchesArea} from "./MatchesArea.js";

export const MainArea = (props) => (
    <MatchesArea value={props.value}/>
);