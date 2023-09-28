function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight;
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}


function mouseDragged() {
    let myColor = document.querySelector("#colors").value;
    let mySize = document.querySelector("#dims").value;
    let myShape = document.querySelector("#shape").value;

    // fill(myColor);
    // circle(mouseX, mouseY, mySize);

    fill(myColor);
    if (myShape == "circle") {
        circle(mouseX, mouseY, mySize);   // x, y, diameter
    } else if (myShape == "square") {
        square(mouseX, mouseY, mySize);  // x (top left), y (top left), width
    } else if (myShape == "triangle") {
        triangle(
            mouseX, mouseY, // first point
            mouseX - mySize/2, mouseY + mySize/2, // second point
            mouseX + mySize/2, mouseY + mySize/2, // second point
        );
    }
}

/*
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(400, 400, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(50, 300, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
*/