import React from 'react';
import { Card, CardHeader, CardBody, CardText, CardColumns } from "reactstrap";

const Statistics = (props) => {

    const { calculatedData }  = props;

    return (
        <div className="container">
            <h2>Statistics</h2>
            <CardColumns>
                <Card>
                    <CardHeader>Average price of flight ticket</CardHeader>
                    <CardBody>
                    <CardText><span style={{color: "red", fontSize: "2rem"}}>{Math.round(calculatedData.averagePrice)} EUR</span></CardText>
                    </CardBody>
                </Card>
        
                <Card>
                    <CardHeader>Longest flight</CardHeader>
                    <CardBody>
                    <CardText><span style={{color: "red", fontSize: "2rem"}}>{calculatedData.longestFlight}</span></CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>Shortest flight</CardHeader>
                    <CardBody>
                    <CardText><span style={{color: "red", fontSize: "2rem"}}>{calculatedData.shortestFlight}</span></CardText>
                    </CardBody>
                </Card>
        
                <Card>
                    <CardHeader>The cheapest flight</CardHeader>
                    <CardBody>
                    <CardText><span style={{color: "red", fontSize: "2rem"}}>{calculatedData.theCheapestFlight} EUR</span></CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>The most expensive flight</CardHeader>
                    <CardBody>
                    <CardText><span style={{color: "red", fontSize: "2rem"}}>{calculatedData.theMostExpensiveFlight} EUR</span></CardText>
                    </CardBody>
                </Card>
        
                <Card>
                    <CardHeader>Number of flights in our database</CardHeader>
                    <CardBody>
                    <CardText><span style={{color: "red", fontSize: "2rem"}}>{calculatedData.numberOfFlights}</span></CardText>
                    </CardBody>
                </Card>

            </CardColumns>
            
        </div>
    )

}

export default Statistics;