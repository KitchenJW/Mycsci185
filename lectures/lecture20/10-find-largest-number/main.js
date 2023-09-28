const numbers = [65, 1800, 12, 20, 1963, 5000, 260, 0, 40, 953, 775, 67, 33];

// your code here:
let greatestNum = 0
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
	if (greatestNum < num) {
	    greatestNum = num;
    }
}
console.log('The greatest number in the list is: ', greatestNum)
document.querySelector('#answer').innerHTML = greatestNum;