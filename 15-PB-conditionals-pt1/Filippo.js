"use strict";

//1
let a = 1,
    b = 88;
console.log(a + " = a ; ", b + " = b");

if (a >= 50 || a <= 99 || b >= 50 || b <= 99) {
    console.log("my conditional says :" + true);
}

//2
let c = 20;
console.log(a + " = a ;", b + " = b ;", c + " = c");

if (a >= 50 || a <= 99 || b >= 50 || b <= 99 || c >= 50 || c <= 99) {
    console.log("my conditional says :" + true);
}

//3
console.log(a + " = a ;", b + " = b ;", c + " = c");
let output = (Math.max(a, b, c));
console.log("The largest value among them is " + (Math.max(a, b, c)));
if (output) {
    console.log("my conditional also says " + output)
}

a = 100;
output = (Math.max(a, b, c)); //in this case it's necessary to declare it again.
console.log(a + " = a ;", b + " = b ;", c + " = c");
console.log("now the largest value among them is " + (Math.max(a, b, c)));
console.log(a + " = a ;", b + " = b ;", c + " = c");
if (output) {
    console.log("my conditional also says " + output)
}

//4
let firstString = "Sorry Mum";
let secondString = "py" + firstString;
if (secondString.startsWith('py')) {
    console.log(firstString)
};


//5
console.log(a + " = a ;", b + " = b ;");
if ((a + b) >= 50 && (a + b) <= 80) {
    console.log(65)
} else {
    console.log(80)
};

//6
console.log(a + " = a ;", b + " = b ;");
if ((a + b) === 8 || (a - b) === 8) {
    console.log(true)
} else {
    console.log("false")
};

//7
console.log(a + " = a ;", b + " = b ;");
if (a === 15 || b === 15 || (a + b) === 15) {
    console.log("true!")
} else {
    console.log("false")
};

//8
console.log(a + " = a ;", b + " = b ;");
if (a % 7 === 0 || b % 7 === 0 || a % 11 === 0 || b % 11 === 0) {
    console.log("true!")
} else {
    console.log("false")
};

//9
console.log(a + " = a ;", a + " = a ;");
if (a === a) {
    console.log(a * 3)
};

//10
console.log(a + " = a ;");
console.log(a - 19);
if (a > 19) {
    console.log((a - 19) * 2)
};

//11
let firstName = "Cagliostro";
let age = 45;
console.log(`${firstName} is ${45} years old`);

if (age <= 13) {
    console.log(`${firstName} is a child`)
} else {
    if (age >= 13 && age < 20) {
        console.log(`${firstName} is a teenager`)
    }
    if (age >= 20 && age < 30) {
        console.log(`${firstName} is a young adult`)
    } else {
        console.log(`${firstName} is a adult`)
    }
};