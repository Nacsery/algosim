import { Button, Container } from 'react-bootstrap';


export default function Buttons(props) {
    const buttonList = props.buttons.map(button => (
        <>
            {' '}
            <Button as="input" type="button" active size="sm" value={button.name} key={button.key}></Button>
        </>
    ));
    
    return (
        <Container variant="success">
            {buttonList}
        </Container>
    );
}