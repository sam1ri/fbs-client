import react from 'react'

// components
import SearchFlightsBar from '../../components/searchFlightsBar/searchFlightsBar';
import FlightCard from '../../components/flightCard/flightCard';

const FlightList = () => {
    return(
        <div className="__list_wrapper">
            <SearchFlightsBar/>
            <div className="__flight_list_wrapper">
                <div className="__flight_list">
                    <FlightCard data={{timeFrom: "17:55", timeTo: "19:40"}}/>
                    <FlightCard data={{timeFrom: "17:55", timeTo: "19:40"}}/>
                    <FlightCard data={{timeFrom: "17:55", timeTo: "19:40"}}/>
                    <FlightCard data={{timeFrom: "17:55", timeTo: "19:40"}}/>
                    <FlightCard data={{timeFrom: "17:55", timeTo: "19:40"}}/>
                </div>
            </div>
        </div>
    )
}

export default FlightList;