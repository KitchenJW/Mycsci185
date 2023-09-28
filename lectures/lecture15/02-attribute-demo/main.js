/* 
cat:  images/cat.jpg
dog:  images/dog.jpeg
bird: images/bird.jpg
fish: images/fish.jpg
*/


function showCat() {
    // your code here...
    console.log('update the image to show a cat!');
    document.querySelector('#image-demo').src = 'images/cat.jpg';

}

function showDog() {
    // your code here...
    console.log('update the image to show a dog!');
    document.querySelector('#image-demo').src = 'images/dog.jpeg';
}

function showBird() {
    // your code here...
    console.log('update the image to show a bird!');   
    document.querySelector('#image-demo').src = 'images/bird.jpg';
}

function showFish() {
    // your code here...
    console.log('update the image to show a fish!');
    document.querySelector('#image-demo').src = 'images/fish.jpg';
}
function reset() {
    console.log('reset the image')
    document.querySelector('#image-demo').src = '../../../images/3D Tree.PNG';
}

