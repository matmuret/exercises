"use strict;"

//1
function add(firstNumber) {
    return function sum(secondNumber) {
        console.log('//1', firstNumber + secondNumber);
        return
    }
}
/* let myFunction =add(2); 
myFunction(3);   */

let sum = add(2)(3);
/* console.log(sum); */

//2
function multiply(firstNumber) {
    return function multiplyTwo(secondNumber) {
        return firstNumber * secondNumber
    }
}

let multi = multiply;
console.log("//2 " + multi(3)(3)); //it becomes a string?!

//3
(function (age, retAge, monthly, percent) {
    if (age > retAge) {
        console.log("//3. You're already retired!")
    } else {
        console.log("//3 " + (((retAge - age) * (monthly * 12)) / 100) * percent)
        return
    }

})(40, 65, 2000, 5);