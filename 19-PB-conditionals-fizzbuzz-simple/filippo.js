'use strict';

let ex1 = 60;


if (ex1 % 3 === 0 && ex1 % 5 === 0) {
    console.log('FizzBuzz');
} else if (ex1 % 3 === 0) {
    console.log('Fizz');
} else if (ex1 % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(ex1);
}