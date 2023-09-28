let x = 100;
let y = 100;
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    fill(255, 0, 0);
}

function draw() {
    if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }

    if (keyIsDown(UP_ARROW)) {
        y -= 5;
    }

    if (keyIsDown(DOWN_ARROW)) {
        y += 5;
    }
    clear();
    //   ellipse(x, y, 50, 50);
    makeCreature(x, y, 100)
    // describe(`50-by-50 red ellipse moves left, right, up, and
    // down with arrow presses.`);
}

function makeCreature(x, y, r = 300, fillColor = 'yellow', eyeColor = 'black') {
    // your creature:
    fill(fillColor)
    circle(x, y, r)

    fill(eyeColor)
    ellipse(x - r / 6, y - r / 6, r / 9, r / 6)
    ellipse(x + r / 6, y - r / 6, r / 9, r / 6)
}
