import { Col, Tabs } from 'react-bootstrap';

export default function Settings(props) {
    return (

            <Col>
                <Tabs transition={false} key="rangeTab" >
                    {props.settings}
                </Tabs>
            </Col>

    );
}