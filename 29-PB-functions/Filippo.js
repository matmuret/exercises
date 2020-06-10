'use strict';

//1
const addUp = (num) => {
    let add = 0;
    for (let i = 1; i <= num; i++) {
        add = add + i;
    }
    console.log(add);
    return
};
addUp(4);
let addUpReturn = addUp(4);

//2
const cubed = (num1, num2, num3) => {
    console.log(num1 * num1 * num1 + num2 * num2 * num2 + num3 * num3 * num3);
    return;
}
cubed(1, 5, 9);
let cubedReturn = cubed(1, 5, 9);

//3
/* const dictionary = (string, word) => {
    const stringCheck = word.startsWith(string);
    
    return;
}
console.log (dictionary ("cia", "ciaone")); */

const dictionary = (string, word) => {
    let myString = string
    let myWord = word;
    if (myString === myWord.substring(0, 3)) {
        console.log(true)
    } else {
        console.log(false)
    };
    return;
}
dictionary("bia", "ciaone");
const dictionaryReturn = dictionary("bia", "ciaone");
dictionary("bu", "button");
dictionary("tri", "triplet");
dictionary("beau", "pastry");

//4
const lessEqual = (num4) => {
    if (num4 <= 0) {
        console.log("ex4 " + true)
    } else {
        console.log("ex4 " + false)
    }
    return;
}
lessEqual(3);
const lessEqualReturn = lessEqual(3);

//5
/* const occurences = (stringa, letter) => {

    let output = 0;
    for (let i = 0; i <= stringa.length(); i++) {
        if (stringa[i] === letter) {
            output += 1
        }
    }
    console.log(output);
    return
};
occurences("Filippo", "p"); */

//6

const calculateBaseToExponent = (base, exponent)=>{  
    console.log(base** exponent)
    return;
}
calculateBaseToExponent(5, 5);

//7

const dogYears = (dogY) => {
    let humanY = dogY*7;
    console.log("Your doggo is "+ humanY+ " years old in human years!");
    return 
}
dogYears(4)

//8
const lifetimeSupply =(age, dayAmmount) => {
    let rest= (80-age)*(365*dayAmmount);
    console.log("You will need "+ rest +" bars of chocolate (2 a day) to last you til the age of 80.")
}
lifetimeSupply(25,2)

//9
const isWaldoHere = (stringW) => {
    if (stringW.includes("Waldo")) {
        console.log(true)
    } else {console.log(false)} 
}
isWaldoHere("is there wal here ?");

//10
const Pie = (sliceN, recipientsN, personN)=>{
if ((recipientsN*personN)===sliceN) {
    console.log(true)
}else {
    console.log(false)}
}
Pie(11, 5, 3)

//11
/* const XO = (strinX, x, o)=>{
let outputO = 0;
let outputX = 0;
for (let ix = 0; ix <= strinX.length(); ix++) {
    if (stringX[ix] === x) {
        outputX += 1
    }}
    for (let io = 0; io <= strinX.length(); io++) {
        if (stringX[io] === o) {
            outputO += 1
        }}
if (outputO===outputX) {
    return true
} else {return false}

}
XO("ooxx") */

//12
function isPrimeNumber(n) {
    for (var i = 2; i < n; i++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
      if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
    }
    return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
  }
  
  console.log(isPrimeNumber(1));  // returns false
  console.log(isPrimeNumber(2));  // returns true
  console.log(isPrimeNumber(9));  // returns false
  console.log(isPrimeNumber(11)); // returns true
    
