import { Button, Container } from 'react-bootstrap';

//Maps the button data to actual buttons
//Render the buttons
export default function Buttons(props) {

    const buttonList = props.buttons.map(button => (
        <>
            {' '}
            <Button as="input" type="button" size="sm" value={button.name} key={button.key} onClick={button.event}></Button>
        </>
    ));
    
    return (
        <Container variant="success">
            {buttonList}
        </Container>
    );
}