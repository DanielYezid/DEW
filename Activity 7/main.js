//Funcion crear brick
let container = document.getElementById('table-container');
let posY = 0;
let posX = 0;


function createBrick() {
    let brick = document.createElement('div');
    brick.className = 'brick';

    if ((posX + brick.clientWidth) < container.clientWidth && (posY + brick.clientHeight) < container.clientHeight) {
        container.appendChild(brick);
        posX += brick.clientWidth;

    } else {
        posY += brick.clientHeight;
        posX = 0;
    }


    // if((posY + brickHeight) < container.clientHeight){
    //     //Lo creamos
    //     container.appendChild(brick);
    //     posY += brick.clientHeight;

    // }

}

// setInterval(createBrick, 10);