import './flightList.scss';
import axios from '../../axios';
import {useLocation} from "react-router-dom";

// components
import SearchFlightsBar from '../../components/searchFlightsBar/searchFlightsBar';
import FlightCard from '../../components/flightCard/flightCard';
import { useEffect, useState } from 'react';

const FlightList = () => {
    const search = useLocation();

    const [flights, setFlights] = useState([])

    useEffect(() => {

        const sp = new URLSearchParams(search.search);

        const departureId = sp.get('departureId');
        const arrivalId = sp.get('arrivalId');
        const date = sp.get('date');

        axios({
            method: 'GET',
            url: '/flights/search',
            params: {departureId: departureId, arrivalId: arrivalId, date: date}
        })
        .then(res => {
            setFlights(res.data.data);
        })
        .catch(err => {
            console.log(err);
        })

    }, [])

    return(
        <div className="__list_wrapper">
            <div className="container">
                <SearchFlightsBar/>
            </div>
            <div className="__flight_list_wrapper">
                <div className="__flight_list">
                    <div className="__card_header">
                        <div className="row">
                            <div className="col-md-3 p-0">
                                <div className="__header_column">
                                    <div className="__header_column_title">
                                        Airplane
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-0">
                                <div className="__header_column">
                                    <div className="__header_column_title">
                                        Departure Date and Time
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-0">
                                <div className="__header_column">
                                    <div className="__header_column_title">
                                        Flight Duration
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 p-0">
                                <div className="__header_column">
                                    <div className="__header_column_title">
                                        Price
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        flights?.map((flight, index) => {
                            return (
                                <FlightCard key={index} data={{flight: flight, flightName: flight.Emertimi,timeFrom: flight.DataNisjes, timeTo: flight.DataMberritjes, price: flight.CmimiFluturimit}}/>
                            )
                        })
                    } 
                </div>
            </div>
        </div>
    )
}

export default FlightList;