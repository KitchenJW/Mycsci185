const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];
const bubbles = [];
let counter=0;
function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Challenge problems:
 *    1. Instead of always using the same fill color, randomly
 *    select a color from the colors array above.
 *    2. Use a loop to draw many random circles.
 *    3. Consider animating the drawing by putting your logic in the 
 *       draw() function instead of the setup() function.
 *    4. Experiment with drawing other shapes (e.g., squares, lines, 
 *       triangles, etc.). Scroll down to the bottom for sample code.
 * */

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(.5);
    for(let i=0; i<10; i++) {
        addBubble();
    }
    console.log(bubbles);
}
    function draw() {
        clear();
    
        for(let i = 0; i<bubbles.length; i++) {
            const b = bubbles[i];
            fill(b.color);
            circle(
                b.x,
                b.y,
                b.diameter
            );
            b.y-=b.speed;
            // if(b.y<0) {
            //     b.y= canvasHeight;
            // }
        }
        if(counter%10==0) {
            addBubble();
        }
        counter++;

    }
    function addBubble() {
        bubbles.push({
            diameter:randomFloat(25, 125),
            x:randomInt(0, canvasWidth),
            y:canvasHeight,
            color:colors[randomInt(0, colors.length - 1)],
            speed:randomFloat(5,10)
        });
    }
    function mouseClicked() {
        bubbles.push({
            diameter:randomFloat(25, 125),
            x:mouseX,
            y:mouseY,
            color:colors[randomInt(0, colors.length - 1)],
            speed:randomFloat(5,10)
        });

    }
// anything that you want to animate goes in this function:
// function draw() {
//     // clear();
//     // pick a random number between 0 and 4:
//     const rando = randomInt(0, colors.length - 1);
//     fill(colors[rando]);

//     // draw a random circle:
//     let x = randomInt(0, canvasWidth);
//     let y = randomInt(0, canvasHeight);
//     let diameter = randomFloat(25, 125);
//     circle(x, y, diameter);

// }



// other stuff you can do:
// draw a random square:
// function draw() {
//     fill(colors[randomInt(0, colors.length - 1)]);
//     let x = randomInt(0, canvasWidth);
//     let y = randomInt(0, canvasHeight);
//     let size = randomFloat(25, 125);
//     square(x, y, size);
//     triangle(
//         x, y - size / 2, 
//         x - size / 2.25, y + size / 4.3,
//         x + size / 2.25, y + size / 4.3
//     );    
// }
// // draw a random triangle:

// draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

