"use strict";

//1
let sum = 0
for (let i = 0; i <= 20; i++) {
    sum = i + sum;
    console.log(i);
}
console.log(sum)

//2
for (let bottles = 1; bottles <= 5; bottles++) {
    if (bottles > 1) {
        console.log("There are " + bottles + " bottles of beers on the wall.");
    } else {
        console.log("There is " + bottles + " bottle of beer on the wall.");
    }
};

//3
for (let x = 0; x <= 20; x++) {
    if (x % 2 === 0) {
        console.log(x + " is even");

    } else {
        console.log(x + " is odd");
    }
};

//4
for (let y = 0; y <= 20; y++) {
    let resoult = y * 9;
    console.log(y + " * 9" + " = " + resoult);
};

//5
for (let z = 1; z <= 100; z++) {
    if (z % 3 === 0 && z % 5 === 0) {
        console.log("FizzBuzz");
    } else if (z % 3 === 0) {
        console.log('Fizz');
    } else if (z % 5 === 0) {
        console.log("Buzz");
    }
};

//6
let sum1 = 0;
for (let m = 1; m < 1000; m++) {
    if (m % 3 === 0 || m % 5 === 0) {
        sum1 += m;
    }
};
console.log(sum1);


