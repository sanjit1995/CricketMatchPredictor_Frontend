import React from 'react';
import './SubComponents.css';

export const MatchDetails = (props) => (
    <>
    {
        props.value.status === "pre" ?
            <div className={"match"}>
                {props.error_details}
            </div>
            :
            <div className={"match"}>
                <div className={"match-details"}>
                    <div className={"venue-details"}>
                        {props.value.venue_details}
                    </div>
                    <div className={"date-details"}>
                        {props.value.date_details}
                    </div>
                    <div className={"tour-details"}>
                        {props.value.tour_details}
                    </div>
                </div>
                <div className={"teams-details"}>
                    <div className={"team-details-inning"}>
                        <div className={"team-details"}>
                            <div className={"team-flag"}>
                                <img src={props.value.team_flag_inning_1} />
                            </div>
                            <div className={"team-inning"}>
                                {props.value.team_inning_1}
                            </div>
                        </div>
                        <div className={"score-details"}>
                            {props.value.score_details_inning_1}
                        </div>
                    </div>
                    <div className={"team-details-inning"}>
                        <div className={"team-details"}>
                            <div className={"team-flag"}>
                                <img src={props.value.team_flag_inning_2} />
                            </div>
                            <div className={"team-inning"}>
                                {props.value.team_inning_2}
                            </div>
                        </div>
                        <div className={"score-details"}>
                            {props.value.score_details_inning_2}
                        </div>
                    </div>
                </div>
                <div className={"status-details"}>
                    <div className={'status'}>
                        {props.value.status}
                    </div>
                    <div className={'status-text'}>
                        {props.value.status_text}
                    </div>
                </div>
            </div>
    }
    </>
    // <div className={"match-details"}>
    //     <div className={"match-details-item"}>
    //         <div className={"venue-and-details"}>
    //             {props.value.venue_and_details}
    //         </div>
    //         <div className={"team-details-inning"}>
    //             <div className={"team-flag"}>
    //                 <img src={props.value.team_flag_inning_1} />
    //             </div>
    //             <div className={"team-inning-1"}>
    //                 {props.value.team_inning_1}
    //             </div>
    //         </div>
    //         <div className={"runs-inning-1"}>
    //             {props.value.runs_inning_1}
    //         </div>
    //         <div className={"status"}>
    //             {props.value.status}
    //         </div>
    //     </div>
    //     <div className={"match-details-item"}>
    //         <div className={"date-and-details"}>
    //             {props.value.date_and_details}
    //         </div>
    //         <div className={"team-details-inning"}>
    //             <div className={"team-flag"}>
    //                 <img src={props.value.team_flag_inning_2} />
    //             </div>
    //             <div className={"team-inning-2"}>
    //                 {props.value.team_inning_2}
    //             </div>
    //         </div>
    //         <div className={"runs-inning-2"}>
    //             {props.value.runs_inning_2}
    //         </div>
    //     </div>
    // </div>
);