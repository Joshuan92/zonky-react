import React, {useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const FlightForm = props => {
    const [selectDeparture, setSelectDeparture] = useState('PRG');
    const [selectArrival, setSelectArrival] = useState('VLC');
    const [direct, setDirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onClick(selectDeparture, selectArrival, direct);
    }

    const onCheckboxClick = () => {
        setDirect(prevDirect => !prevDirect)
    }

    return (
        <Form>
            <FormGroup>
                <Label for="departure">Departure:</Label>
                <Input type="select" name="departure" id="departure" value={selectDeparture} onChange={(e)=>{setSelectDeparture(e.target.value)}}>
                    <option value="PRG">Prague</option>
                    <option value="TXL">Berlin</option>
                    <option value="WAW">Warsaw</option>
                    <option value="PED">Pardubice</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="arrival">Arrival:</Label>
                <Input type="select" name="arrival" id="arrival" value={selectArrival} onChange={(e)=>{setSelectArrival(e.target.value)}}>
                    <option value="VLC">Valencia</option>
                    <option value="BCN">Barcelona</option>
                    <option value="MAD">Madrid</option>
                    <option value="MXP">Milan</option>
                    <option value="ATH">Athens</option>
                </Input>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="checkbox" value={direct} onChange={onCheckboxClick}/> Only direct flights
                </Label>
            </FormGroup>
            <br/>
            <Button onClick={handleSubmit}>Submit</Button>
            
        </Form>
    );
};

export default FlightForm;
