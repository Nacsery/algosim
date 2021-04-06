import { Col, Container, Tabs, Tab, Row } from 'react-bootstrap';

export default function ChoiceTabs(props) {
    const settingsList = props.choices.map(tab => (
        <Tab
            eventKey={tab.id}
            title={tab.name}
            key={tab.id}
        >
            <Container style={{
                marginTop: '0.5em'
            }}>
                <Col>
                    <Row >
                        {tab.buttonSettings}
                    </Row>
                    <Row>
                        <Container style={{
                            marginTop: '0.4em'
                        }}>
                            {tab.sliderSettings}
                        </Container>

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