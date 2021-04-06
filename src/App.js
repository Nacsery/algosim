import Settings from './components/settings';
import { Container } from 'react-bootstrap';
import sliderList from './components/sliders'
import ChoiceTabs from './components/choiceTabs'
import Buttons from './components/buttons'

const MAZE_SLIDER_DATA = [
  { name: "Width", id: "width", current: "80", max: "100", min: "8" },
  { name: "Height", id: "height", current: "45", max: "100", min: "8" },
  { name: "Speed", id: "speed", current: "75", max: "100", min: "0" },
];

const MAZE_BUTTON_DATA = [
  { name: "Start", type: "start", key:"m1" },
  { name: "Stop", type: "start" , key:"m2" },
  { name: "Reset", type: "reset" , key:"m3" }
]

const PATHFINDING_SLIDER_DATA = [
  { name: "Width", id: "width", current: "80", max: "100", min: "8" },
  { name: "Height", id: "height", current: "45", max: "100", min: "8" },
  { name: "Block Size", id: "blockSize", current: "4", max: "10", min: "3" },
  { name: "Speed", id: "speed", current: "75", max: "100", min: "0" },
];

const PATHFINDING_BUTTON_DATA = [
  { name: "Start", type: "start" , key:"p1" },
  { name: "Stop", type: "start" , key:"p2" },
  { name: "Grid", type: "grid" , key:"p3" },
  { name: "Reset", type: "reset" , key:"p4" }
]

let currentMazeSettings = {
  width: Number(MAZE_SLIDER_DATA[0].current),
  height: Number(MAZE_SLIDER_DATA[1].current),
  speed: Number(MAZE_SLIDER_DATA[2].current)
}

let currentPathfindingSettings = {
  width: Number(PATHFINDING_SLIDER_DATA[0].current),
  height: Number(PATHFINDING_SLIDER_DATA[1].current),
  blockSize: Number(PATHFINDING_SLIDER_DATA[1].current),
  speed: Number(PATHFINDING_SLIDER_DATA[2].current)
}

const MAIN_DATA = [
  {
    name: "Maze",
    id: "maze",
    sliderSettings: (<Settings settings={sliderList(MAZE_SLIDER_DATA, currentMazeSettings)} />),
    buttonSettings: (<Buttons buttons={MAZE_BUTTON_DATA} />)

  },
  {
    name: "Pathfinding",
    id: "pathfinding",
    sliderSettings: (<Settings settings={sliderList(PATHFINDING_SLIDER_DATA, currentPathfindingSettings)} />),
    buttonSettings: (<Buttons buttons={PATHFINDING_BUTTON_DATA} />)
  },
];

function App(props) {
  return (
    <Container fluid>
      <ChoiceTabs choices={MAIN_DATA} />
    </Container>
  );
}
export default App;
