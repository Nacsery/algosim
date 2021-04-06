import { Col, Container, Tabs, Tab, Row } from 'react-bootstrap';


export default function ChoiceTabs(props) {
    const settingsList = props.choices.map(tab => (
        <Tab
            eventKey={tab.id}
            title={tab.name}
            key={tab.id}
        >
            <Container>
                <Col sm xl xs lg md>
                    <Row sm xl xs lg md>
                        {tab.buttonSettings}
                    </Row>
                    <Row>
                        {tab.sliderSettings}
                    </Row>
                </Col>
            </Container>

        </Tab >
    ));

    return (
        <Container>
            <Col>
                <Tabs fill transition={false} key="rangeTab">
                    {settingsList}
                </Tabs>
            </Col>
        </Container>
    );
}