import './flightCard.scss'
import { useState, useEffect } from 'react'

// components
import ReserveTicket from '../../containers/reserveTicket/reserveTicket'
import axiosInstance from '../../axios'

const FlightCard = (props) => {

    const [modalState, setModalState] = useState('passive')

    const toggleModal = () => {
        setModalState(modalState == 'active' ? 'passive' : 'active')
        axiosInstance({
            method: 'GET',
            url: '/flights/single',
            params: {flightId: props.data.flight.FlightId }
        })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            })
            console.log(props.data.flight)
    }

    return(
        <div  className="__card_wrapper">
            <div onClick={() => {toggleModal()}} className="__card_item" style={{cursor: 'pointer'}}>
                <div className="row">
                    <div className="col-md-3">
                        <div className="__card_column" style={{textAlign: 'center'}}>
                            <h5>{props.data?.flightName}</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="__card_column" style={{textAlign: 'center'}}>
                            <h5>{new Date(new Date(props.data?.timeFrom).getTime() + new Date().getTimezoneOffset()*60*1000).toLocaleString()   }</h5>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="__card_column" style={{textAlign: 'center'}}>
                            <h5>{Math.floor(Math.abs(new Date(props.data?.timeFrom) - new Date(props.data?.timeTo)) / 36e5)} hours {Math.round((Math.abs((new Date(props.data?.timeFrom) - new Date(props.data?.timeTo))) % 3600000) / 60000)} minutes</h5>
                        </div>
                    </div>
                    <div className="col-md-3" style={{textAlign: 'center'}}>
                        <div className="__card_column">
                            <h5>${props.data?.price}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <ReserveTicket data={{flight: props.data?.flight, modalState: modalState}} toggleModal={toggleModal} />
        </div> 
    )
}

export default FlightCard;