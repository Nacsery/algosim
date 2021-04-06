import { Button, Container } from 'react-bootstrap';


export default function Buttons(props) {
    const buttonList = props.buttons.map(button => (
        <>
            {' '}
            <Button active size="sm" as="input" type={button.type} value={button.name} key={button.key}></Button>
        </>
    ));
    
    return (
        <Container>
            {buttonList}
        </Container>
    );
}