import React, { useState, useEffect } from 'react';

import { Router, Route } from "react-router-dom";
import history from "./history.js";

import Flights from './components/Flights.jsx';
import FlightForm from './components/FlightForm.jsx';
import Navigation from './components/Navigation.jsx';

 
const App = () => {
   const [flights, setFlights] = useState ([]);
   const [loading, setLoading] = useState ();
   const [departure, setDeparture] = useState ('PRG');
   const [arrival, setArrival] = useState ('VLC');
   const [currentPage, setCurrentPage] = useState(0);

   
    const changeDest = (dep, arr, dir) => {
        setDeparture(dep);
        setArrival(arr);
        setLoading(true);   
        async function fetchFlights() {
            const response = await fetch(`https://api.skypicker.com/flights?flyFrom=${dep}&to=${arr}&partner=picky${(dir)?"&max_stopovers=0":""}`);
            const data = await response.json();
            
            setFlights(data.data);
            setLoading(false); 
            setCurrentPage(0);
            
        }
        fetchFlights();
        
    }

    return (
        <>
        <Router history={history}>
            <Navigation />

            <Route exact path="/">
                <div className="container">
                    <FlightForm
                        onClick = {changeDest}
                        />
                    <Flights
                        flights={flights}
                        loading={loading}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </Route>

            <Route exact path="/statistics">
                <div class="container">
                    <p>banana</p>
                </div>
            </Route>
        </Router>
        </>
    )
}
export default App;