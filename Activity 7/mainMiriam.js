document.addEventListener('DOMContentLoaded', function () {
    const brickW = 50;
    let currentX = 0;
    let container = document.getElementById('table-container');
debugger;
    function createBrick() {
        if (currentX + brickW < container.clientWidth) {
            let brick = document.createElement('div');
            brick.className = 'brick';

            brick.style.left = currentX + 'px';
            brick.style.top = (container.clientHeight / 2 - brickW / 2) + 'px';
            currentX += brickW;

            container.appendChild(brick);

            brick.addEventListener('click', function () {
                container.removeChild(brick);
            });
        }else{
            currentX = 0;
        }

    }
    setInterval(createBrick, 1);
})
