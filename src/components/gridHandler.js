
export default function GridHandler(mazeCreator, gridMaker) {
    this.firstStart = true;
    this.mazeCreator = mazeCreator;
    this.gridMaker = gridMaker;
    this.grid = this.gridMaker.newGrid();
}

GridHandler.prototype.mazeStart = async function () {
    console.log(this.firstStart);
    if (this.firstStart) {
        this.firstStart = false;
        this.grid = await this.gridMaker.newGrid();
        this.mazeCreator.start();
        await this.mazeCreator.createMaze(this.grid, this.gridMaker.blockSize);
        if (this.mazeCreator.reset) {
            this.mazeCreator.reset = false;
            this.grid = this.gridMaker.newGrid();
        }

    } else {
        if (this.mazeCreator.executionStatus === false) {
            this.mazeCreator.start();
        }
    }
}

GridHandler.prototype.mazeStop = async function () {
    if (!this.firstStart && (this.mazeCreator.executionStatus === true)) {
        this.mazeCreator.stop();
    }
}

GridHandler.prototype.reset = async function () {
    let len = this.mazeCreator.restart();
    this.firstStart = true
    if (len === 0) {
        this.grid = this.gridMaker.newGrid();
    }
}