import { Col, Container, Tabs } from 'react-bootstrap';


export default function Settings(props) {
    return (
        <Container fluid>
            <Col sm xl xs lg md={{ span: "auto" }} >
                <Tabs transition={false} key="rangeTab" >
                    {props.settings}
                </Tabs>
            </Col>
        </Container>
    );
}