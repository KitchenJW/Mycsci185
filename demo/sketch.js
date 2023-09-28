let urn;
function preload() {
    urn = loadModel("assets/cottage_obj.obj");
}

function setup() {
    scale(0.1)
    background(255);
    createCanvas(500, 500, WEBGL);
    describe("Vertically rotating 3-d octahedron.");
    model(urn);
}

function draw() {
    clear();
    background(255);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial(); // For effect
    model(urn);
}
