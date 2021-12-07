import './searchFlightsBar.scss'
import { useState, useEffect } from 'react'
import SearchInput from '../searchInputDropdown/searchInputDropdown'
import axios from '../../axios'
import { useNavigate  } from 'react-router-dom';

const SearchFlightsBar = () => {
    const navigate = useNavigate();
    
    const [arrival, setArrival] = useState('')
    const [departures, setDepartures] = useState({deps: [], status: 0})
    const [destinations, setDestinations] = useState({deps: [], status: 0})
    const [date, setDate] = useState('')

    // selected input
    const [departureId, setDepartureId] = useState(-1);
    const [arrivalId, setArrivalId] = useState(-1);
    const [dateSelected, setDateSelected] = useState('');

    const searchFlights = () => {
        navigate(`/search-flights?departureId=${departureId}&arrivalId=${arrivalId}&date=${dateSelected}`);

    }

    const searchDepartures = async (place) => {
        let places = (await searchPlaces(place)).data.data
        let deps = [];
        places.forEach(el => {
            deps = [...deps, {id: el.Id, name: el.Emertimi}]
        })
        places = {deps: deps, status: deps.length > 0 ? 2 : 1};
        setDepartures(places);
    }

    const searchDestionations = async (place) => {
        let places = (await searchPlaces(place)).data.data
        let deps = [];
        places.forEach(el => {
            deps = [...deps, {id: el.Id, name: el.Emertimi}]
        })
        places = {deps: deps, status: deps.length > 0 ? 2 : 1};
        setDestinations(places);
    }

    const searchPlaces = async (place) => {
        return await axios({
            method: 'GET',
            url: 'locations/search',
            params: {name: place}
        })
            // .then(res => {
            //     // console.log(res.data.data);
            //     let deps = [];
            //     res.data.data.forEach(el => {
            //         deps = [...deps, {id: el.Id, name: el.Emertimi}]
            //     })
            //     return {deps: deps, status: deps.length > 0 ? 2 : 1};
            // })
            // .catch(err => {
            //     console.log(err);
            // })
    }

    return(
        <div className="tm-bg-white ie-container-width-fix-2 __wrapper_searchbar">
              <div className="container ie-h-align-center-fix">
                  <div className="row">
                      <div className="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                          <div className="tm-search-form tm-section-pad-2">
                              <div style={{flexWrap: 'nowrap'}} className="form-row tm-search-form-row">
                                  <div className="form-group tm-form-element tm-form-element-100">
                                      <i className="fa fa-map-marker fa-2x tm-form-element-icon"></i>
                                      {/* <input name="departure" type="text" className="form-control" id="inputCity" placeholder="Leaving from" /> */}
                                      {/* <SearchInput items={departures} searchPlace={searchPlaces}/> */}
                                      <SearchInput setPlace={setDepartureId} inputData={{type: 'text', id: 'inputCity', placeholder: 'Departing from...'}} items={departures} searchPlace={searchDepartures}/>

                                      
                                  </div>
                                  <div className="form-group tm-form-element tm-form-element-100">
                                      <i className="fa fa-map-marker fa-2x tm-form-element-icon"></i>
                                      <SearchInput setPlace={setArrivalId} inputData={{type: 'text', id: 'inputCity', placeholder: 'Going to...'}} items={destinations} searchPlace={searchDestionations}/>
                                  </div>
                                  <div className="form-group tm-form-element tm-form-element-50">
                                      <i className="fa fa-calendar fa-2x tm-form-element-icon"></i>
                                      <input onChange={(e) => {setDateSelected(e.target.value)}} style={{height: '45px'}} name="check-in" min={new Date().toISOString().slice(0, -8)} type="date" className="form-control" id="inputCheckIn" placeholder="Departing" />
                                  </div>
                                <div className="form-group tm-form-element tm-form-element-2">
                                      <button style={{height: '45px'}} onClick={searchFlights} className="btn btn-primary tm-btn-search __btn_search">Search</button>
                                  </div>
                              </div>
                          </div>
                      </div>                        
                  </div>      
              </div>
          </div>  
    )
}

export default SearchFlightsBar;