const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) {
    // min and max included 
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    // min and max included 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms = 100) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(2);

    fill("#08415c");

    // draw a random circle:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(25, 125);

}


// anything that you want to animate goes in this function:  
let i = 0;
function draw() {
    while (i < 1000) {
        x = randomInt(0, canvasWidth);
        y = randomInt(0, canvasHeight);
        size = randomFloat(25, 125);
            fill('maroon')
            circle(x, y, size);
            fill('violet')
            triangle(
                x, y - size / 2,
                x - size / 2.25, y + size / 4.3,
                x + size / 2.25, y + size / 4.3
            );
        i++;
    }
}

// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:

// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

