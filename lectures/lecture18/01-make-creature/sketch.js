function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    createCanvas(canvasWidth, canvasHeight);
    makeCreature(300, 300, 200);
    makeCreature(900, 300, 100, 'green', 'violet');
    makeCreature(600, 400, 150, 'brown', 'green');
    makeCreature(1200, 400, 'pink', 'blue')
    // for debugging:
    // drawGrid(canvasWidth, canvasHeight)
}
function makeCreature(x, y, r = 300, fillColor = 'yellow', eyeColor = 'black') {
    // your creature:
    fill(fillColor)
    circle(x, y, r)

    fill(eyeColor)
    ellipse(x - r / 6, y - r / 6, r / 9, r / 6)
    ellipse(x + r / 6, y - r / 6, r / 9, r / 6)
}
function mouseClicked() {
    makeCreature(
        mouseX,
        mouseY,
        Math.random() * 200 + 100,
        getBackgroundColor(),
        getBackgroundColor()
    );
}
function mouseDragged() {
    // makeCreature(mouseX, mouseY, 200, 'pink', 'blue')
    makeCreature(
        mouseX,
        mouseY,
        Math.random() * 200 + 100,
        getBackgroundColor(),
        getBackgroundColor()
    );

}
function getBackgroundColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    return `rgb(${r}, ${g}, ${b})`;
}
