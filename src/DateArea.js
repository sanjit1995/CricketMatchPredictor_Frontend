import React from 'react';
import './SubComponents.css';

export const DateArea = (props) => (
    <div className={"date-area"}>
        <div className={"arrow-left"}/>
        <div className={"date-val"}>{props.value}</div>
        <div className={"arrow-right"}/>
    </div>
);