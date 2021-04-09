import { Button, Container } from 'react-bootstrap';
import React from 'react';
//Maps the button data to actual buttons
//Render the buttons
export default function Buttons(props) {
    const buttonList = props.buttons.map(button => (
        <React.Fragment key={button.key}>
            {' '}
            <Button as="input" type="button" size="sm" value={button.name} onClick={button.event} key={button.key} />
        </React.Fragment>
    ));

    return (
        <Container variant="success">
            {buttonList}
        </Container>
    );
}