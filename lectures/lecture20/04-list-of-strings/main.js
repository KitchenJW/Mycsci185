const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe",
    "Sarah", "Lesslie", "Rachel", "Regine", "Raven"
];
let i = 0;

// use a while loop to output a message for each
// item in the array:

const outputElement = document.querySelector('#output');
while (i < names.length) {
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
    i++;
}
