
function creategrid(GridSize){
    let row;
    let column;
    const container = document.getElementById('container');


    // Appending columns of container
    for(let i = 0; i < (GridSize); i++){
    column = document.createElement('div');
    column.classList = "column";
    container.appendChild(column);

    // Appending rows of container
    for(let j = 0; j < GridSize; j++){
        row = document.createElement('div');
        row.classList = "row";
        column.appendChild(row);
    }
    }

}

function DeclareSize(creategrid){
    // Button Functions
let button;
button = document.getElementById('prompt');

button.onclick = () => {
    
    // Ask user for Size of grid.
    const x = parseInt(prompt('Enter a size:'));

    if(x > 100){
        alert('Please enter a number below 100');
        return 0;
    }
    // Clearing the container and creating a new one accoriding to user.
    document.getElementById('container').textContent = "";
    creategrid(x);
}


}

DeclareSize(creategrid);
