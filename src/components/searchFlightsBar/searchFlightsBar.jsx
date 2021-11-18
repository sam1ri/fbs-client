import react from 'react'
import './searchFlightsBar.scss'

const SearchFlightsBar = () => {
    return(
        <div className="tm-bg-white ie-container-width-fix-2 __wrapper_searchbar">
              <div className="container ie-h-align-center-fix">
                  <div className="row">
                      <div className="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                          <form action="index.html" method="get" className="tm-search-form tm-section-pad-2">
                              <div style={{flexWrap: 'nowrap'}} className="form-row tm-search-form-row">
                                  <div className="form-group tm-form-element tm-form-element-100">
                                      <i className="fa fa-map-marker fa-2x tm-form-element-icon"></i>
                                      <input name="city" type="text" className="form-control" id="inputCity" placeholder="Type your destination..." />
                                  </div>
                                  <div className="form-group tm-form-element tm-form-element-100">
                                      <i className="fa fa-map-marker fa-2x tm-form-element-icon"></i>
                                      <input name="city" type="text" className="form-control" id="inputCity" placeholder="Type your destination..." />
                                  </div>
                                  <div className="form-group tm-form-element tm-form-element-50">
                                      <i className="fa fa-calendar fa-2x tm-form-element-icon"></i>
                                      <input name="check-in" type="text" className="form-control" id="inputCheckIn" placeholder="Check In" />
                                  </div>
                                <div className="form-group tm-form-element tm-form-element-2">
                                      <button type="submit" className="btn btn-primary tm-btn-search __btn_search">Search</button>
                                  </div>
                              </div>
                          </form>
                      </div>                        
                  </div>      
              </div>
          </div>  
    )
}

export default SearchFlightsBar;