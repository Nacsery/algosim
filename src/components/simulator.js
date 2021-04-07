
import { Block } from './block'

export default function Simulator() {
    this.blockSize = 20;
}

Simulator.prototype.start = function () {
    this.newGrid()
};

Simulator.prototype.initSimulator = function (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.gridRow = (this.height / this.blockSize) - 1;
    this.girdColumn = (this.width / this.blockSize) - 1;
    this.start();
};

Simulator.prototype.newGrid = async function () {
    let grid = [];
    for (let i = 0; i < this.height; i += this.blockSize) {
        let row = []
        
        for (let j = 0; j < this.width; j += this.blockSize) {
            let block = new Block(j, i, 'black', this.blockSize);
            row.push(block);
            
            block.drawOuter();
            block.drawInner('white', 1, 2);
        }
        grid.push(row);
    }
    return grid;
};

Simulator.prototype.setBlockSize = function (size) {

    this.blockSize = size*10;
}