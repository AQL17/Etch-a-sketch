
function creategrid(GridSize){
    let row;
    let column;
    const container = document.getElementById('container');

    for(let i = 0; i < (GridSize); i++){
    column = document.createElement('div');
    column.classList = "column";
    container.appendChild(column);

    for(let j = 0; j < GridSize; j++){
        row = document.createElement('div');
        row.classList = "row";
        column.appendChild(row);
    }
    }

}
creategrid(16);