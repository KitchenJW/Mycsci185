function addNumbers() {
    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result = firstNum + secondNum;
    document.querySelector('#answer').innerHTML = result;
}

function subtractNumbers() {
    // Same as above but subtract!
    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result = firstNum - secondNum;
    document.querySelector('#answer').innerHTML = result;

}

function multiplyNumbers() {
    // Same as above but multiply!
    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result = firstNum * secondNum;
    document.querySelector('#answer').innerHTML = result;

}

function divideNumbers() {
    // Same as above but divide!
    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let result = firstNum / secondNum;
    document.querySelector('#answer').innerHTML = result;

}

