const DEFAULT_SIZE = 16;

const grid = document.getElementById('grid-container');
const squares = document.getElementsByClassName('grid-square');
const slider = document.getElementById('grid-slider');

let black = true; //these are toggled via buttons
let rainbow = false;

function createGrid(size){
    let paddingAmount = (grid.clientWidth/(size*2)) //might change size in future

    for (let i = 0; i < size*size; i++){
        gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.padding = `${paddingAmount}px`;
        grid.append(gridSquare);
    }

    Array.from(squares).forEach(element => {
        element.addEventListener('mouseover', colorInSquares)
    });  
}

function deleteGrid(){ //deletes the child grid-square elements, used for changing grid size
    Array.from(squares).forEach(element => {
        element.remove();
    })
}

function colorInSquares(e){

    if (black){
    this.style.backgroundColor = 'black';    
    return;
    }
    if (rainbow){
        //ToDo color rainbow
    }
}

function changeGridSize(){ //deletes grid and makes new one with curr slider size.
console.log(slider.value);
deleteGrid();
createGrid(slider.value);

}

window.onload = () => {    
    createGrid(DEFAULT_SIZE);
    slider.addEventListener('change', changeGridSize);
};



