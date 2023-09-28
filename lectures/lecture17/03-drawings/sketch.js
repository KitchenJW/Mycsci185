const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background("lightblue");
}

function face() {
    fill('tan')
    ellipse(500, 260, 310, 360);
    fill('pink')
    ellipse(500, 310, 60, 100);
}
function squint() {
    strokeWeight(1)
    line(420, 225, 470, 245);
    line(520, 245, 570, 225);
}
function eyes() {
    fill("white")
    circle(450, 250, 80);
    fill("white")
    circle(550, 250, 80);
    fill("darkviolet")
    circle(450, 250, 50);
    fill("darkviolet")
    circle(550, 250, 50);
    fill("black")
    circle(450, 250, 10);
    fill("black")
    circle(550, 250, 10);
}
function mouth(a, b, c, d) {
    strokeWeight(1)
    fill('white')
    curve(
        a, c,
        a, d,
        b, d,
        b, c
    );
}
function eyeBrows(l, r) {
    strokeWeight(15)
    line(410, l, 470, r);
    strokeWeight(15)
    line(590, l, 530, r);
}
function angryFace() {
    clear();
    background("red");
    face();
    eyes();
    eyeBrows(190, 210);
    mouth(430, 570, 600, 390);
}
function scaredFace() {
    clear();
    background("chocolate");
    face();
    eyes();
    eyeBrows(215, 185);
    mouth(440, 560, 400, 370);
}
function shockedFace() {
    clear();
    background("aquamarine");
    face();
    eyes();
    eyeBrows(200, 170);
    mouth(470, 530, 650, 400);
}
function happyFace() {
    clear();
    background("pink");
    face();
    squint();
    eyeBrows(195, 180);
    mouth(420, 580, 50, 370);
}
function oFace() {
    clear();
    background("aquamarine");
    face();
    eyes();
    eyeBrows(200, 190);
    fill('chocolate')
    mouth(485, 515, 550, 390);
    mouth(485, 515, 200, 390)
    strokeWeight(2)
    fill('black')
    circle(500, 390, 20);

}
