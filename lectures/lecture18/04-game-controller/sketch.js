let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
}
function draw() {
    clear()
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}
function moveController(ev) {
    console.log(ev.key);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    if (ev.key==='ArrowUp') {
        y=y-10;
    }
    if (ev.key==='ArrowDown') {
        y=y+10;
    }
    if (ev.key==='ArrowLeft') {
        x=x-10;
    }
    if (ev.key==='ArrowRight') {
        x=x+10;
    }


    if (ev.key===' ' && width<400) {
        width+=10;
    } else {
        width=50;
    }
    // redraw circle:
    // clear();
    // noFill();
    // circle(x, y, width);
    // drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
