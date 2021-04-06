import React, { useState } from 'react';
import { FormControl, Row, Col, InputGroup, Tab, Container } from 'react-bootstrap';

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
                settings={settings} />
        </Tab>
    ));

    return rangeList;
}