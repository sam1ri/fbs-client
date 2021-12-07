import react from 'react'
import './flightCard.scss'
import { useState, useEffect } from 'react'

const FlightCard = (props) => {

    return(
        <div className="__card_wrapper">
            
            <div className="__card_item">
                <div className="row">
                    <div className="col-md-4">
                        <div className="__card_column">
                            <h5>{new Date(new Date(props.data?.timeFrom).getTime() + new Date().getTimezoneOffset()*60*1000).toLocaleString()   }</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="__card_column">
                            <h5>{Math.floor(Math.abs(new Date(props.data?.timeFrom) - new Date(props.data?.timeTo)) / 36e5)}</h5>
                            <h5>{Math.round((Math.abs((new Date(props.data?.timeFrom) - new Date(props.data?.timeTo))) % 3600000) / 60000)}</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="__card_column">
                            <h5>${props.data?.price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default FlightCard;