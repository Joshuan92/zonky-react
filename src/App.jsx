import React, { useState, useEffect } from 'react';

import { Router, Route } from "react-router-dom";
import history from "./history.js";

import Flights from './components/Flights.jsx';
import FlightForm from './components/FlightForm.jsx';
import Navigation from './components/Navigation.jsx';
import Statistics from './components/Statistics.jsx';

 
const App = () => {
   const [flights, setFlights] = useState ([]);
   const [loading, setLoading] = useState ();
   const [departure, setDeparture] = useState ('PRG');
   const [arrival, setArrival] = useState ('VLC');
   const [currentPage, setCurrentPage] = useState(0);
   const [calculatedData, setCalculatedData] = useState({
        averagePrice: null,
        numberOfFlights: null,
        longestFlight: null,
        theMostExpensiveFlight: null,
        theCheapestFlight: null
   });


   
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
        fetchFlights()  
    }

    console.log(flights, 'flights')

    const getCalculatedData = () => {
        let sum = null
        let longestFlight = null
        let indexOfLongestFlight = null
        let shortestFlight = 1000000000
        let indexOfShortestFlight = null
        flights.map((flight, index) => {

            sum += flight.price

            if (flight.duration.total > longestFlight) {
                 longestFlight = flight.duration.total;
                 indexOfLongestFlight = index;
            }

            if (flight.duration.total < shortestFlight ) {
                shortestFlight = flight.duration.total;
                indexOfShortestFlight = index;
           }

            setCalculatedData(prevValues => {
                return {
                    ...prevValues,
                    averagePrice: sum/flights.length,
                    longestFlight: flights[indexOfLongestFlight].fly_duration,
                    shortestFlight: flights[indexOfShortestFlight].fly_duration,
                    theMostExpensiveFlight: flights[flights.length-1].price,
                    theCheapestFlight: flights[0].price,
                    numberOfFlights: flights.length,


                }
            })    
        })
    }

    useEffect(() => {
        getCalculatedData()
    },
        [flights])

    return (
        <>
        <Router history={history}>
            <Navigation
            loading={loading} />

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
                <Statistics
                    calculatedData={calculatedData}
                    flights={flights}
                />
            </Route>
        </Router>
        </>
    )
}
export default App;