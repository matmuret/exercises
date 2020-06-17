"use strct";

//1
/* Write a function that returns the length of a string. Make your function recursive.
length("apple") ➞ 5
length("make") ➞ 4
length("a") ➞ 1
length("") ➞ 0 */


function length(str) {
    if (str === "") {
        return 0;
    } else {
        return length(str.substring(0, str.length - 1)) +1;
    }
}

/*  function length(str) {
	if(str === "") return 0;
	return length(str.substr(1)) + 1; 
} */

console.log(length("apple"));
console.log(length("make"));
console.log(length("a"));
console.log(length(""));
//2
/* Write a function that reverses a string. Make your function recursive.
Examples
reverse("hello") ➞ "olleh"
reverse("world") ➞ "dlrow"
reverse("a") ➞ "a"
reverse("") ➞ "" */

function reverse(str) {
    if (str === '') {
        return '';
    } else {
        return str.substring(str.length, str.length - 1) +
            reverse(str.substring(0, str.length - 1));
    }
}
console.log(reverse("hello"))
console.log(reverse("world"))
console.log(reverse("a"))
console.log(reverse(""))

//2
/* Write a function that calculates the factorial of a number recursively.
factorial(5) ➞ 120
factorial(3) ➞ 6
factorial(1) ➞ 1
factorial(0) ➞ 1 */


function factorial(num){
    if (num<1){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}
console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(1))
console.log(factorial(0))

//4
/* Write a function that calculates the nth Fibonacci number.
fib(0) ➞ 0
fib(1) ➞ 1
fib(2) ➞ 1
fib(8) ➞ 21 */

function fibonacci(num){
    if (num<=1){
        return num;
    }/* else if (num===1){
        return 1
    } */else{
        return fibonacci(num-1)+fibonacci(num-2);
    }
}
console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(8))