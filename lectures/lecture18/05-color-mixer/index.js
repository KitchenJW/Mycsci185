const redElement = document.querySelector("#red");
const yellowElement = document.querySelector("#yellow");
const blueElement = document.querySelector("#blue");
let i=0;
function setBackgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}

function updateColor() {
    /*
    INSTRUCTIONS: Update this function as follows:
    If red is turned on, make the background red (done for you).
    If yellow is turned on, make the background yellow (done for you).
    If blue is turned on, make the background blue.
    If red and yellow are both turned on, make the background orange.
    If red and blue are turned on, make the background purple.
    If yellow and blue are turned on, make the background green.
    If everything is turned on, then make the background black.
    */
    if (redElement.value === 'on'
        && yellowElement.value === 'off'
        && blueElement.value === 'off') {
        setBackgroundColor('red');
    } else if (yellowElement.value === 'on'
        && redElement.value === 'off'
        && blueElement.value === 'off') {
        setBackgroundColor('yellow');
    } else if (blueElement.value === 'on'
        && yellowElement.value === 'off'
        && redElement.value === 'off') {
        setBackgroundColor('blue');
    } else if (redElement.value === 'on'
        && yellowElement.value === 'on'
        && blueElement.value === 'off') {
        setBackgroundColor('orange');
    } else if (redElement.value === 'on'
        && blueElement.value === 'on'
        && yellowElement.value === 'off') {
        setBackgroundColor('purple');
    } else if (blueElement.value === 'on'
        && yellowElement.value === 'on'
        && redElement.value === 'off') {
        setBackgroundColor('green');
    } else if (blueElement.value === 'on'
        && yellowElement.value === 'on'
        && redElement.value === 'on') {
            i=0;
            setInterval(switcheroo, 1000);
    } else {
        setBackgroundColor('white');
    }

}
function switcheroo() {
    if(i<10) {
        setBackgroundColor(getBackgroundColor())
    }
    i++;
}
function getBackgroundColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r, g, b);
    return `rgb(${r}, ${g}, ${b})`;
}

