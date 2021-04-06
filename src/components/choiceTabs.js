import { Col, Container, Tabs, Tab, Row } from 'react-bootstrap';


export default function ChoiceTabs(props) {
    const settingsList = props.choices.map(tab => (
        <Tab
            eventKey={tab.id}
            title={tab.name}
            key={tab.id}
        >
            <Container fluid>
                <Row sm xl xs lg md>
                    <Col>
                        {tab.sliderSettings}
                    </Col>
                    <Col sm xs={0}></Col>

                </Row>
                <Row ></Row>
                <Row sm xl xs lg md>
                    <Col sm xl xs lg md>
                        {tab.buttonSettings}
                    </Col>
                    <Col sm xs={0}></Col>
                </Row>
            </Container>

        </Tab >
    ));

    return (
        <Container fluid>
            <Col>
                <Tabs fill transition={false} key="rangeTab">
                    {settingsList}
                </Tabs>
            </Col>
        </Container>
    );
}