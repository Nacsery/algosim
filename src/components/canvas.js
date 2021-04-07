import { Container } from 'react-bootstrap';

let canvas;

export default function Canvas(props) {
    return (
            <canvas id={props.id}  width={720} height={480} ref={(e) =>
                props.Simulator.initSimulator(e)
            } style={{ width: "100%", height: "auto" }}></canvas>
    );
}

export function getCanvas() {
    return canvas;
}