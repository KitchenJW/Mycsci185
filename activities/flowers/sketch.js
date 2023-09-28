const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
let width = canvasWidth;
let height = canvasHeight;
let isActive = false;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background("lightgreen");
    angleMode(RADIANS); // Change the mode to RADIANS
    frameRate(50);

}
function draw() {
    if (!isActive) {
        return;
    }
    flowers();
}
function toggleFlower() {
    isActive = !isActive;
    console.log(isActive);
}
function mouseClicked() {
    x = mouseX;
    y = mouseY;
}
function flowers() {
    mouseClicked();
    let a = atan2(x, y);
    translate(x+width/2,y+height/2);
    for (let i = 0; i < 15; i++) {
        rotate(a);
        fill('red')
        bezier(x, y, x + 75, y + 175, x + 150, y - 50, x, y);
    }

}

// let angle = 0;
// function draw() {
//     background(240);
//     mouseClicked();

//     let v0 = createVector(x, y);
//     let v1 = createVector(x / 2, y / 2);

//             drawArrow(v0, v1.rotate(angle), 'blue');
//             angle += 0.02;
// }

// // draw an arrow for a vector at a given base position
// function drawArrow(base, vec, myColor) {
//     push();
//     stroke(myColor);
//     strokeWeight(3);
//     fill(myColor);
//     translate(base.x, base.y);
//     line(0, 0, vec.x, vec.y);
//     fill('red')
//     bezier(0, 0, vec.x - 75, vec.y + 175, vec.x - 150, vec.y - 50, vec.x, vec.y);
//     bezier(0, 0, vec.x + 75, vec.y + 175, vec.x + 150, vec.y + 50, vec.x, vec.y);
//     rotate(vec.heading());
//     let arrowSize = 7;
//     translate(vec.mag() - arrowSize, 0);
//     triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
//     pop();
// }