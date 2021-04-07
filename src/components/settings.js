import { Col, Tabs } from 'react-bootstrap';


//Renders the slider tabs
export default function Settings(props) {
    return (

            <Col>
                <Tabs transition={false} key="rangeTab" >
                    {props.settings}
                </Tabs>
            </Col>

    );
}