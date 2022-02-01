const DEFAULT_SIZE = 16;

const grid = document.getElementById('grid-container');
const squares = document.getElementsByClassName('grid-square');
const slider = document.getElementById('grid-slider');

//controls and buttons
const controls = document.getElementById('controls');
const saveButton = document.getElementById('save');
const blackButton = document.getElementById('black');
const rainbowButton = document.getElementById('rainbow');

let black = true; //these are toggled via buttons
let rainbow = false;

function createGrid(size) {
    let paddingAmount1 = (grid.clientWidth / (size)) //might change size in future
    let paddingAmount = (100 / (size * 2)) //either way, there some white space when zooming..

    console.log('grid size: ' + grid.clientWidth);
    console.log('grid height : ' + grid.clientHeight);
    console.log('padding amount: ' + paddingAmount)

    for (let i = 0; i < size * size; i++) {
        gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = `${paddingAmount1}px`;
        gridSquare.style.height = `${paddingAmount1}px`;
        grid.append(gridSquare);
    }

    Array.from(squares).forEach(element => {
        element.addEventListener('mouseover', colorInSquares)
    });
}

function deleteGrid() { //deletes the child grid-square elements, used for changing grid size
    Array.from(squares).forEach(element => {
        element.remove();
    })
}

function colorInSquares(e) {

    if (black) {
        this.style.backgroundColor = 'black';
        return;
    }
    if (rainbow) {
        let newColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = '#'+newColor;
    }
}

function toggleBlack(){
    rainbow = false;
    black = true;
}
function toggleRainbow(){
    black = false;
    rainbow = true;
}

function changeGridSize() { //deletes grid and makes new one with curr. slider size.
    console.log(slider.value);
    deleteGrid();
    createGrid(slider.value);

}

function createImage() {
    let canvas = document.createElement('canvas');    

    canvas.width = slider.value;
    canvas.height = slider.value;

    let canvasContext = canvas.getContext('2d');

    let xNum = 0;
    let yNum = 0;

    Array.from(squares).forEach(square => {

        canvasContext.fillStyle = window.getComputedStyle(square).backgroundColor;
        canvasContext.fillRect(xNum,
            yNum,
            1, 1)

//            console.log('X: '+ xNum);
        if (xNum == parseInt(slider.value-1) ) {            
          //  console.log(' slider val: ' + parseInt(slider.value-1) )
            xNum = 0;
            yNum++;
        }
        else {
            xNum++;
        }
    });

    window.open(canvas.toDataURL("image/png"), '_blank');

    controls.append(canvas);
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
    slider.addEventListener('change', changeGridSize);
    saveButton.addEventListener('click', createImage);
    blackButton.addEventListener('click', toggleBlack);
    rainbowButton.addEventListener('click', toggleRainbow);
};



