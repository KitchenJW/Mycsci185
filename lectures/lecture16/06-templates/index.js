//The data:
const firstName = "Jane";
const pic = "patrick.png";
const score = 300;

console.log(firstName);
console.log(pic);
console.log(score);

function getBackgroundColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r,g,b);
    return `rgb(${r}, ${g}, ${b})`;
}
function changeUp() {
document.querySelector('main').innerHTML = `
    <section class="card" style="background-color: ${getBackgroundColor()};">
        <img src="${pic}" />
        <p>Welcome, ${firstName}. Your current high score is ${score}.</p>
    </section>
`;
}