import Settings from './components/settings';
import { Container } from 'react-bootstrap';
import sliderList from './components/sliders'
import PageTabs from './components/pages'
import Buttons from './components/buttons'
import Simulator from './components/simulator'
import React, { useState, useEffect } from 'react';
import Canvas from './components/canvas';
import MazeCreator from './components/mazeCreator'
import GridHandler from './components/gridHandler'

let simulator = new Simulator();
let mazeCreator = new MazeCreator();
let gridHandler = new GridHandler(mazeCreator, simulator);

//Contains slider data for maze
const MAZE_SLIDER_DATA = [
  { name: "Grid Size", id: "grid-size", current: "2", max: "4", min: "1", event: (size) => { simulator.setBlockSize(size); gridHandler.reset(); } },
  { name: "Speed", id: "speed", current: "75", max: "100", min: "0", event: (speed) => { mazeCreator.setSpeed((speed-100)*-1) } },
];


//Contains button data for maze
const MAZE_BUTTON_DATA = [
  { name: "Start", type: "start", key: "m1", event: () => { gridHandler.mazeStart() } },
  { name: "Stop", type: "stop", key: "m2", event: () => { gridHandler.mazeStop() } },
  { name: "Reset", type: "reset", key: "m3", event: () => { gridHandler.reset() } }
]

//Contains slider data for pathfinding
const PATHFINDING_SLIDER_DATA = [
  { name: "Grid Size", id: "grid-size", current: "5", max: "5", min: "1" },
  { name: "Speed", id: "speed", current: "75", max: "100", min: "0" },
  { name: "Block Size", id: "blockSize", current: "4", max: "10", min: "3" },
];

//Contains button data for pathfinding
const PATHFINDING_BUTTON_DATA = [
  { name: "Start", type: "start", key: "p1" },
  { name: "Stop", type: "stop", key: "p2" },
  { name: "Grid", type: "grid", key: "p3" },
  { name: "Reset", type: "reset", key: "p4" }
]

//Current maze settings 
//to be used on creation of the canvas field and simulation speed
let currentMazeSettings = {
  gridSize: Number(MAZE_SLIDER_DATA[0].current),
  speed: Number(MAZE_SLIDER_DATA[1].current)
}

//Current pathfinding settings 
//to be used on creation of the canvas field, simulation speed
//and creation of block grid that can be used to create a maze for pathfinding
let currentPathfindingSettings = {
  gridSize: Number(PATHFINDING_SLIDER_DATA[0].current),
  blockSize: Number(PATHFINDING_SLIDER_DATA[1].current),
  speed: Number(PATHFINDING_SLIDER_DATA[2].current)
}



//Contains main page settings
const MAIN_DATA = [
  {
    name: "Maze Creator",
    id: 0,
    currentSettings: currentMazeSettings,
    sliderSettings: (<Settings settings={sliderList(MAZE_SLIDER_DATA, currentMazeSettings)} />),
    buttonSettings: (<Buttons buttons={MAZE_BUTTON_DATA} />),
    simulator: simulator
  },
  {
    name: "Pathfinding",
    id: 1,
    currentSettings: currentPathfindingSettings,
    sliderSettings: (<Settings settings={sliderList(PATHFINDING_SLIDER_DATA, currentPathfindingSettings)} />),
    buttonSettings: (<Buttons buttons={PATHFINDING_BUTTON_DATA} />),
    simulator: simulator
  },
];

function App(props) {
  return (
    <Container className="bg-light rounded-top rounded-bottom">
      <PageTabs data={MAIN_DATA} gridHandler={gridHandler} />

      <Container style={{
        marginTop: '0.5em',
        paddingBottom: 10
      }} >
        <Canvas id={0} Simulator={simulator}  />
      </Container>
    </Container>
  );
}
export default App;
