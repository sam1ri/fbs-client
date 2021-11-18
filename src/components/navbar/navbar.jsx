import {useState, useEffect} from 'react'
import axios from 'axios';
import img from '../images/airlogo.png'
import './navbar.scss'

const App = () => {

  const [flights, setFlights] = useState([])


  return (
    <div className="tm-top-bar" id="tm-top-bar">
          <div className="container">
              <div className="row">
                  
                  <nav className="navbar navbar-expand-lg narbar-light">
                      <a className="navbar-brand mr-auto" href="#">
                          <div className="__logo_wrapper">
                            <div className="__logo_image_wrapper">
                                <img className="__logo_image" src={img} alt="Site logo" />
                            </div>
                            <div className="__logo_title_wrapper">
                                <h1>FBS Air</h1>
                            </div>
                          </div>
                      </a>
                      <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                          <ul className="navbar-nav ml-auto">
                            <li className="__nav_item">
                              <a href="#top">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="__nav_item">
                              <a href="#tm-section-4">Portfolio</a>
                            </li>
                            <li className="__nav_item">
                              <a href="#tm-section-5">Blog Entries</a>
                            </li>
                            <li className="__nav_item">
                              <a href="#tm-section-6">Contact Us</a>
                            </li>
                          </ul>
                      </div>                            
                  </nav>            
              </div>
          </div>
      </div>
  );
}

export default App;