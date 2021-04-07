import { Button, Container } from 'react-bootstrap';

//Maps the button data to actual buttons
//Render the buttons
export default function Buttons(props) {
    const keyList = props.buttons.map(button => (
        button.key
    ));
    console.log(keyList);
    const buttonList = props.buttons.map(button => (
        <>
            {' '}
            <Button as="input" type="button" size="sm" value={button.name} onClick={button.event} key={button.key} />
        </>
    ));

    return (
        <Container variant="success">
            {buttonList}
        </Container>
    );
}