let x = 250;
let y = 500;
let x1 = 1100;
let y1 = 500;
let width = 100;
let speed = 8;
const bgColor = document.querySelector('body').style.backgroundColor = getBackgroundColor();
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
let counter = 1;
// let i = 1;
function draw() {
    if (x >= canvasWidth || x <= 0 && x1 >= canvasWidth || x1 <= 0 &&
        y >= canvasHeight-25 || y <= 0 && y1 >= canvasHeight-25 || y1 <= 0) {
        speed *= -1
    }
    draw1();
}
function draw1() {
    y += speed;
    x -= 10 * Math.sin(counter / 15);
    y1 -= speed;
    x1 -= 10 * Math.sin(counter / 15);
    clear();
    fill(getBackgroundColor());
    circle(x, y, width);
    circle(x, y-150, width);
    circle(x1, y1, width);
    circle(x1, y1-150, width);
    circle((x+x1)/2,(y+y1)/2,width);
    circle((x+x1)/3,(y+y1)/20,width);
    circle((x+x1)/2,(y+y1)/20,width);
    circle((x+x1)/3,(y+y1)/2,width);
    ++counter;
    // drawGrid(canvasWidth, canvasHeight);
}

function getBackgroundColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    return `rgb(${r}, ${g}, ${b})`;
}
