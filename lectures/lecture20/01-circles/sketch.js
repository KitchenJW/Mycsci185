function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    createCanvas(canvasWidth, canvasHeight);
    let x1 = 300;
    let x2 = 600
    let y = 500;
    let r = 500;

    while (y >= 0) {
        // fill(getFillColor());
        fill('violet');
        circle(x1, y, r);
        fill('teal');
        circle(x2, y, r);
        x1 /= 1.02;
        x2 *= 1.006;
        y -= 5;
        r -= 5;
    }
    x = 100; y = 200; r = 50;
    while (y <= 500) {
        fill(getFillColor());
        circle(x, y, r);
        x += 100;
        y += 70;
        r += 10;
    }
    while (y >= 100) {
        fill(getFillColor());
        circle(x, y, r);
        x += 100;
        y -= 60;
        r -= 10;
    }

    drawGrid(canvasWidth, canvasHeight);
}
function getFillColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    return `rgb(${r}, ${g}, ${b})`;
}
