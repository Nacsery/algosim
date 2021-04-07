import React, { useState } from 'react';
import { FormControl, Row, Col, InputGroup, Tab, Container } from 'react-bootstrap';


//Slider form function
//Changes the corresponding value from main settings
//Shows current value at the right of slider
function Slider(props) {
    const [current, setCurrent] = useState(0);
    return (
        <Container fluid>
            <Container style={{
                marginTop: '0.2em',
                marginBottom: '0.2em'
            }}>
                <Row sm xl xs lg md={10}>

                    <Col xs sm xl lg md={8}>
                        <FormControl
                            type="range"
                            defaultValue={props.current}
                            max={props.max}
                            min={props.min}
                            key={props.id}
                            onChange={(changeEvent => {
                                setCurrent(changeEvent.target.value);
                                props.settings[props.id] = Number(changeEvent.target.value);
                                props.event(changeEvent.target.value);
                            })} custom />
                    </Col>
                    <Col xs sm xl lg md={2}>

                        <InputGroup size="sm">
                            <InputGroup.Prepend>
                                <InputGroup.Text>{current ? current : props.current}</InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </Col>

                </Row>
            </Container>

        </Container>

    );
}

//Creates a list of sliders from given data with mapping
//Get main settings as an input to add them to the change event of the slider
//Returns the list of sliders as tabs
export default function sliderList(ranges, settings) {
    const rangeList = ranges.map(range => (
        <Tab
            key={range.id}
            eventKey={range.id}
            title={range.name}
        >
            <Slider
                id={range.id}
                current={range.current}
                max={range.max}
                min={range.min}
                key={range.id}
                event={range.event}
                settings={settings} />
        </Tab>
    ));

    return rangeList;
}