const animals = [
    '../02-attribute-demo/images/fish.jpg',
    '../02-attribute-demo/images/bird.jpg',
    '../02-attribute-demo/images/cat.jpg',
    '../02-attribute-demo/images/dog.jpeg'
]
const colors = [
    'hotpink',
    'skyblue',
    'forestgreen',
    'yellow'
]
let i = 0;
function changeColor() {
    document.querySelector('body').style.background = colors[i % colors.length];
    i++
};

function changeTitle() {
    //what do we want to change?
    document.querySelector('#title').innerHTML = "Pink Title";

};

function addImage() {
    // adds the following image to each panel:
    // 1. what element do you want to select?
    console.log(i, animals.length, i % animals.length)
    const fishImage = `<img src="${animals[i % animals.length]}" />`;
    document.querySelector('#panel1').innerHTML += fishImage;
    // if(i<animals.length-1) {
    //     i++;
    // }else {
    //     i=0;
    // }
    i++
};

function clearDiv() {
    // clears all of the panels of content
    document.querySelector('.panel').style.background = 'white';
    document.querySelector('img').src = "../02-attribute-demo/images/bird.jpg";
    document.querySelector('#title').innerHTML = "My Title";
};
