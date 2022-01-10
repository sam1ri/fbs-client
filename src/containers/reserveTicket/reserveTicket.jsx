import { useEffect, useState } from 'react';
import './reserveTicket.scss'
import moment from 'moment'

const ReserveTicket = (props) => {

    const [modalStatus, setModalState] = useState('passive')

    useEffect(() => {
        if (props.data) {
            setModalState(props.data.modalState)
        }
    }, [props])

    return (
        <div className='__modal' style={{ display: modalStatus === 'active' ? 'block' : 'none' }}>
            <div className='__modal_shadow' onClick={() => { props.toggleModal() }}></div>
            <div className='__modal_content'>
                <div className="__reserve_ticket_wrapper">
                    <div className="__content_header">
                        <div className='__remove_modal' onClick={() => { props.toggleModal() }}>
                            &#10005;
                        </div>
                        <h2 className='__modal_header_title'>Reserve a flight ticket with <strong>{props.data.flight.AirplaneName}</strong></h2>
                    </div>
                    <div className='__content_body'>
                        <div className='container'>
                            <div className="__reservation_form">
                                <div className='__content_sub_header'>
                                    <h4 className='__flight_detail_header'>Flight Details</h4>
                                    <h4 className='__flight_detail_header float-right'><b>${props.data.flight.CmimiFluturimit}</b></h4>
                                </div>
                                <div className="__content_sub_content">
                                    <p><b>Depart - {new Date(props.data.flight.DataNisjes).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</b></p>
                                    <div className="__content_sub_content_details">
                                        <div className='row'>
                                            <div className="col-md-2">
                                                <span>{props.data.flight.AirplaneName}</span>
                                            </div>
                                            <div className="col-md-2">
                                                <span>{new Date(props.data.flight.DataNisjes).toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                            </div>
                                            <div className="col-md-2">
                                                <h6><b>{moment(new Date(props.data?.flight.DataNisjes)).format('hh:mm a')}</b></h6>
                                            </div>
                                            <div className="col-md-2">
                                                <h6><b>{moment(new Date(props.data?.flight.DataMberritjes)).format('hh:mm a')}</b></h6>
                                            </div>
                                            <div className="col-md-2">
                                                <span>{new Date(props.data.flight.DataMberritjes).toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                            </div>
                                            <div className="col-md-2 text-center">
                                                <h6><b>${props.data.flight.CmimiFluturimit}</b></h6>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                                <hr/>
                                {/* <div className="__content_sub_content">
                                    <p><b>Return - {new Date(props.data.flight.DataNisjes).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</b></p>
                                    <div className="__content_sub_content_details">
                                        <div className='row'>
                                            <div className="col-md-2">
                                                <span>{props.data.flight.Emertimi}</span>
                                            </div>
                                            <div className="col-md-2">
                                                <span>{new Date(props.data.flight.DataNisjes).toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                            </div>
                                            <div className="col-md-2">
                                                <h6><b>{moment(new Date(props.data?.flight.DataNisjes)).format('hh:mm a')}</b></h6>
                                            </div>
                                            <div className="col-md-2">
                                                <h6><b>{moment(new Date(props.data?.flight.DataMberritjes)).format('hh:mm a')}</b></h6>
                                            </div>
                                            <div className="col-md-2">
                                                <span>{new Date(props.data.flight.DataMberritjes).toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                            </div>
                                            <div className="col-md-2 text-center">
                                                <h6><b>${props.data.flight.CmimiFluturimit}</b></h6>
                                            </div>
                                        </div>  
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReserveTicket;