import './App.scss';
import {useState, useEffect} from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

// componentws
import Navbar from './components/navbar/navbar'


// containers
import Home from './containers/home/home'
import FlightList from './containers/flightList/flightList';

const App = () => {

  const [flights, setFlights] = useState([])

  return (
    <div className="__wrapper">
      <h1>Samir</h1>
      <Navbar/>
        <div style={{marginTop: '100px'}}>
          <Routes>
            <Route path="/" element={<Navigate to={'/home'} />}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/search-flights" element={<FlightList/>}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
