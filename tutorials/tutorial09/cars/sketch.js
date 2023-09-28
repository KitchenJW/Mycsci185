const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 150,
    width: Math.random()*100+200,
    speed: Math.random()*10+5,
    color: getBackgroundColor()
};

const c2 = {
    x: 100,
    y: 350,
    width: Math.random()*100+200,
    speed: Math.random()*10+5,
    color: getBackgroundColor()
};

const c3 = {
    x: 100,
    y: 550,
    width: Math.random()*100+200,
    speed: Math.random()*10+5,
    color: getBackgroundColor()
};

function getBackgroundColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    return `rgb(${r}, ${g}, ${b})`;
}


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;
    c2.x += c2.speed;
    c3.x += c3.speed;
    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCar(c3.x, c3.y, c3.width, c3.color);
    // draw the grid (optional -- feel free to remove this line):
    // drawGrid(canvasWidth, canvasHeight);
    // if(c1.x>=canvasWidth && c2.x>=canvasWidth && c3.x>=canvasWidth) {
    //     c1.x = c2.x = c3.x =0;
    // }
    if(c1.x>=canvasWidth+100) {
        c1.x=-100;
    }
    if(c2.x>=canvasWidth+100) {
        c2.x=-100;
    }
    if(c3.x>=canvasWidth+100) {
        c3.x=-100;
    }

}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
