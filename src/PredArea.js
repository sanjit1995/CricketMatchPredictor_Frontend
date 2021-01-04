import React from 'react';
import './SubComponents.css';
import { PieChart } from 'react-minimal-pie-chart';
import { VictoryPie } from "victory-pie";

export const PredArea = (props) => (
    <div className="pred-area">
    {props.value.map((row,idx) => (
        <div className={"predictions"} key={idx}>
        {
        row.status === "pre" ?
                <>{row.error_msg}</>:
            <>
            <div className={"pred-text"}>
                Win Predictions
            </div>
            <PieChart className={"pie-chart"}
                data={[
                    { title: 'Win%', value: row.win, color: '#2ECC71' },
                    { title: 'Loss%', value: row.loss, color: '#C13C37' }
                ]}
                radius={30}
            />
            <div className={'match-pred'}>
                <div className={'team-pred'}>
                    <div className={'pred-team-name'} >
                        {row.batting_team}
                    </div>
                    <div className={'pred-team-prob'} id={'batting-team'}>
                        {row.win}%
                    </div>
                </div>
                <div className={'team-pred'}>
                    <div className={'pred-team-name'}>
                        {row.bowling_team}
                    </div>
                    <div className={'pred-team-prob'} id={'bowling-team'}>
                        {row.loss}%
                    </div>
                </div>
            </div>
            </>
        }
        </div>
    ))}
    </div>
);