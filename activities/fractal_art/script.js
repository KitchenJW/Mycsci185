function generateFractal() {
    const canvas = document.getElementById("fractalCanvas");
    const ctx = canvas.getContext("2d");

    const iterations = parseInt(document.getElementById("iterations").value);
    const zoom = parseFloat(document.getElementById("zoom").value);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawFractal(ctx, centerX, centerY, radius, zoom, iterations);
}

function drawFractal(ctx, x, y, radius, zoom, iterations) {
    if (iterations <= 0) {
        return;
    }

    const newX = x - radius * zoom;
    const newY = y - radius * zoom;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(newX, newY);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.stroke();

    drawFractal(ctx, newX, newY, radius * zoom, zoom * 0.5, iterations - 1);
}

window.addEventListener("load", generateFractal);