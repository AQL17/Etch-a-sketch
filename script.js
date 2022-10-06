
function creategrid(GridSize, ChangeColor){
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
    ChangeColor();
}

function DeclareSize(creategrid, ChangeColor){
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

    creategrid(x, ChangeColor);
    
}



}


function ChangeColor(){
    let elements = Array.from(document.getElementsByClassName('row'));
    elements.forEach(element => {
        element.addEventListener('mouseover', function handleClick(event) {
          console.log('box clicked', event);
            let randred = Math.floor((Math.random() * 255) + 1);
            let randblue = Math.floor((Math.random() * 255) + 1);
            let randgreen = Math.floor((Math.random() * 255)+ 1);

      
          element.setAttribute('style', `background-color: rgb(${randred}, ${randblue}, ${randgreen});`);
    });

});
}
creategrid(16 , ChangeColor);
DeclareSize(creategrid, ChangeColor);


