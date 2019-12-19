import React, { useState, useEffect } from 'react';
import Flights from './components/Flights.jsx';
import FlightForm from './components/FlightForm.jsx';

 
const App = () => {
   const [flights, setFlights] = useState ([]);
   const [loading, setLoading] = useState ();
   const [departure, setDeparture] = useState ('PRG');
   const [arrival, setArrival] = useState ('VLC');

   
    const changeDest = (dep, arr, dir) => {
        setDeparture(dep);
        setArrival(arr);
        setLoading(true);   
        async function fetchFlights() {
            const response = await fetch(`https://api.skypicker.com/flights?flyFrom=${dep}&to=${arr}&partner=picky${(dir)?"&max_stopovers=0":""}`);
            const data = await response.json();
            
            setFlights(data.data);
            setLoading(false); 
            
        }
        fetchFlights();
        
    }

    return (
        <>
            <h1>Flight with us</h1>
            <FlightForm
                onClick = {changeDest}
                />
            <Flights
                flights={flights}
                loading={loading}
            />
        </>
    )
}
export default App;