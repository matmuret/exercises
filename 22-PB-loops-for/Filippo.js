"use strict";

//1
for (let i = 0; i <= 20; i++) {
    console.log(i);
};

//2
for (let bottles = 1; bottles <= 5; bottles++) {
    if (bottles > 1) {
        console.log("There are " + bottles + " bottles of beers on the wall.")
    } else {
        console.log("There is " + bottles + " bottle of beer on the wall.")
    }
};

//3
for (let x = 0; x <= 20; x++) {
    if (x % 2 === 0) {
        console.log(x + " is even")

    } else {
        console.log(x + " is odd")
    }
};

//4
for (let y = 0; y <= 20; y++) {
    let resoult = y * 9;
    console.log(y + " * 9" + " = " + resoult)
};

//5
for (let z = 1; z <= 100; z++) {
    if (z % 3 === 0 && z % 5 === 0) {
        console.log("FizzBuzz")
    } else if (z % 3 === 0) {
        console.log('Fizz')
    } else if (z % 5 === 0) {
        console.log("Buzz")
    }
};

//6
for (let m = 1, m1 = 1; m <= 1000; m++, m1++) {
    if (m % 3 === 0 && m1 % 5 === 0) {
        console.log(m + m1)
    }
};



//4 bonus
for (let b = 1; b <= 10; b++) {
    console.log(b)
    for (let c = 2; c < 11; c++) {
        /// nested inside
        console.log("bonus 4: " + c * b);
    }
}