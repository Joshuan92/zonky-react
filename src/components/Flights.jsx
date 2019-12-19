import React, {useState} from 'react';
import { Button, Form, Spinner } from "reactstrap";

import { DateTime } from 'luxon';

const Flights = (props) => {

    const { currentPage, setCurrentPage, loading, flights} = props;

    const perPage = 5;
    const handleBackBtn = (e) => {
        setCurrentPage(Math.max(currentPage - 1, 0))
        document.getElementById("nextBtn").classList.remove('btn-dark');
        if(currentPage <= 1) {
            e.target.classList.add('btn-dark');
        }
    }
    const handleNextBtn = (e) => {
        setCurrentPage(Math.min(currentPage + 1, Math.ceil(flights.length / 5) - 1));
        if(currentPage >= Math.ceil(flights.length / 5) - 2) {
            e.target.classList.add('btn-dark')
        }
        document.getElementById("backBtn").classList.remove('btn-dark');
        document.getElementById("backBtn").classList.add('btn-secondary');

    }

    let pagination = ('');
    let content = ('');
    if(loading) {
        content = <div style={{textAlign: 'center'}}>Loading...  <Spinner size="sm" color="secondary" /></div>
    } else if(loading === undefined){
        content = (<div>Hello, please choose your flight!</div>);
    } else if(Array.isArray(flights) &&  flights.length == 0) {
        content = (<div>Sorry, no direct flights...</div>);
    } else {   
        if(flights.length > 5) {
            pagination = (
                <Form style={{textAlign: 'center'}}>
                    <hr/>
                    <Button color="dark"  onClick={handleBackBtn} id="backBtn">Back</Button>
                    <span style= {{padding:'2rem'}}>Page: {currentPage + 1}</span>
                    <Button onClick={handleNextBtn} id="nextBtn">Next</Button>
                </Form>
            )
        }
        content = (
            <div>
                <hr/>
                <div>Number of available flights: { flights.length }</div>
                <br/>
                
                
                <hr/>
                
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">From:</th>
                            <th scope="col">To:</th>
                            <th scope="col">Departure Time:</th>
                            <th scope="col">Arrival Time:</th>
                            <th scope="col">Fly duration:</th>
                            <th scope="col">Transfers:</th>
                            <th scope="col">Price:</th>
                            
                        </tr>
                        </thead>

                        <tbody>
                        {flights.slice(currentPage * perPage, currentPage * perPage + perPage).map((flight, key) => (

                        <tr key={key}>
                            <td>{ flight.cityFrom }</td>
                            <td>{ flight.cityTo }</td>
                            <td>{ DateTime.fromMillis(flight.dTime * 1000).toFormat('DD hh:mm') }</td>
                            <td>{ DateTime.fromMillis(flight.aTime * 1000).toFormat('DD hh:mm') }</td>
                            <td>{ flight.fly_duration }</td>
                            <td>{ flight.pnr_count }</td>
                            <td>{ flight.price } EUR</td>
                        </tr>
                    ))
                    }
                    </tbody>
                </table>
                
                
            </div>
        )
    } 

    
    
    return (
        <>
            { content }
            { pagination }
        </>
    )
}

export default Flights;