const DEFAULT_SIZE = 16;

const grid = document.getElementById('grid-container');
const squares = document.getElementsByClassName('grid-square');

let black = true; //these are toggled via buttons
let rainbow = false;

console.log(grid);
console.log(grid.clientWidth);
console.log(squares);


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

function colorInSquares(e){

    if (black){
    this.style.backgroundColor = 'black';    
    return;
    }
    if (rainbow){
        //ToDo color rainbow
    }
}


window.onload = () => {    
    createGrid(DEFAULT_SIZE);
};



