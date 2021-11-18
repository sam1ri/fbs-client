import react from 'react'
import './flightCard.scss'
import { useState, useEffect } from 'react'

const FlightCard = (props) => {

    return(
        <div className="__card_wrapper">
            <div className="__card_item">
                <div className="row">
                    <div className="col-md-4">
                        <div className="__fligh_details">
                            <h5>{props.data?.timeFrom} - {props.data?.timeTo}</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="__flight_duration">
                            1h 55min
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="__flight_price">
                            $250
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default FlightCard;