"use strict";

//1
function add(firstNumber) {
    return function sum(secondNumber) {
        return firstNumber + secondNumber;
    }
}
/* let myFunction =add(2); 
myFunction(3);   */

let sum = add(2)(3);
console.log("//1 ", sum);

//2
const multiplier = function (firstNumber) {
    return function multiplyTwo(secondNumber) {
        return firstNumber * secondNumber;
    }
}

console.log("//2 " , multiplier(3)(3)); //it becomes a string?!

//3
(function (age, retAge, monthly, percent) {
    if (age > retAge) {
        console.log("//3. You're already retired!");
    } else {
        console.log("//3. ",(((retAge - age) * (monthly * 12)) / 100) * percent);
    }
})(70, 65, 2000, 5);