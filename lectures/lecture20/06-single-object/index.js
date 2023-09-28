//The data:
const person = [{
    name: "Jane",
    pic: "images/patrick.png",
    score: 300
},
{
    name: "John",
    pic: "images/spongebob.png",
    score: 280
},
{
    name: "Lilah",
    pic: "images/spongebob.png",
    score: 320
}
]

for (i = 0; i < person.length; i++) {
    document.querySelector('main').insertAdjacentHTML(
        "beforeend",
        `<img src="${person[i].pic}">
    <p>${person[i].name}'s high score is: ${person[i].score}</p>
    `
    );
}

