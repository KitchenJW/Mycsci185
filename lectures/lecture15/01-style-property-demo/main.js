
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
    document.querySelector('#section1').style.fontWeight = 'bolder';
    document.querySelector('#section1').style.fontFamily = 'fantasy';
    document.querySelector('#section1').style.fontSize = '1.5rem';
}

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'lightblue';
    document.querySelector('#section2').style.fontWeight = 'bolder';
    document.querySelector('#section2').style.fontFamily = 'fantasy';
    document.querySelector('#section2').style.fontSize = '1.5rem';
}

function makePink() {
    // your code here...
    console.log('Change background to pink');   
    document.querySelector('#section3').style.backgroundColor = 'pink';  
    document.querySelector('#section3').style.fontWeight = 'bolder';
    document.querySelector('#section3').style.fontFamily = 'fantasy';
    document.querySelector('#section3').style.fontSize = '1.5rem';
}

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
    document.querySelector('#section4').style.fontWeight = 'bolder';
    document.querySelector('#section4').style.fontFamily = 'fantasy';
    document.querySelector('#section4').style.fontSize = '1.5rem';
}
function changeAll() {
    console.log('Change all sections at once')
    document.querySelector('#section1').style.backgroundColor = 'orangered';
    document.querySelector('#section2').style.backgroundColor = 'lightblue';
    document.querySelector('#section3').style.backgroundColor = 'hotpink';
    document.querySelector('#section4').style.backgroundColor = 'yelloworange';
    document.querySelector('#section1').style.fontWeight = 'bolder';
    document.querySelector('#section2').style.fontWeight = 'bolder';
    document.querySelector('#section3').style.fontWeight = 'bolder';
    document.querySelector('#section4').style.fontWeight = 'bolder';
    document.querySelector('#section1').style.fontFamily = 'fantasy';
    document.querySelector('#section2').style.fontFamily = 'fantasy';
    document.querySelector('#section3').style.fontFamily = 'fantasy';
    document.querySelector('#section4').style.fontFamily = 'fantasy';
    document.querySelector('#section1').style.fontSize = '1.5rem';
    document.querySelector('#section2').style.fontSize = '1.5rem';
    document.querySelector('#section3').style.fontSize = '1.5rem';
    document.querySelector('#section4').style.fontSize = '1.5rem';
}
function reset() {
    console.log('Change all sections at once')
    document.querySelector('#section1').style.backgroundColor = 'white';
    document.querySelector('#section2').style.backgroundColor = 'white';
    document.querySelector('#section3').style.backgroundColor = 'white';
    document.querySelector('#section4').style.backgroundColor = 'white';
    document.querySelector('#section1').style.fontWeight = 'normal';
    document.querySelector('#section2').style.fontWeight = 'normal';
    document.querySelector('#section3').style.fontWeight = 'normal';
    document.querySelector('#section4').style.fontWeight = 'normal';
    document.querySelector('#section1').style.fontFamily = 'default';
    document.querySelector('#section1').style.fontSize = '1rem';
    document.querySelector('#section2').style.fontFamily = 'default';
    document.querySelector('#section2').style.fontSize = '1rem';
    document.querySelector('#section3').style.fontFamily = 'default';
    document.querySelector('#section3').style.fontSize = '1rem';
    document.querySelector('#section4').style.fontFamily = 'default';
    document.querySelector('#section4').style.fontSize = '1rem';
}
