'use strict';

//1
console.log("//1");
const addUp = (num) => {
    let add = 0;
    for (let i = 1; i <= num; i++) {
        add = add + i; //or add+= i;
    }
    return add;
};
console.log(addUp(4));
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

//2
console.log("//2");
const sumOfCubes = (num1 = 0, num2 = 0, num3 = 0) => num1 ** 3 + num2 ** 3 + num3 ** 3;
console.log(sumOfCubes(2));
console.log(sumOfCubes());

//3
console.log("//3");
const dictionary = (string, word) => word.startsWith(string);

/* const dictionary = (string, word) => {
    let myString = string
    let myWord = word;
    if (myString === myWord.substring(0, 3)) {
        console.log(true)
    } else {
        console.log(false)
    };
    return;
}*/

console.log(dictionary("bia", "ciaone"));
console.log(dictionary("bia", "ciaone"));
console.log(dictionary("bu", "button"));
console.log(dictionary("tri", "triplet"));
console.log(dictionary("beau", "pastry"));

//4
console.log("//4")
const lessThanOrEqualToZero = (num4) => num4 <= 0;
/* const lessEqual = (num4) => {
    if (num4 <= 0) {
       return true;
    } else {
        return false;
    }
    
} */
console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-4))
console.log(lessThanOrEqualToZero(10))

//5
console.log("//5")
const countOccurrences = (stringa, letter) => {
    let output = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (stringa[i] === letter) //or if (stringa.chartAt(i)===letter.....just for internet explorer so not updated)
        {
            output++ // or output += 1
        };
    }
    return output
};
const occurencesR = countOccurrences("filippo", "p");
console.log(occurencesR)

//6, 
console.log("//6")
const calculateBaseToExponent = (base, exponent) => Math.pow(base, exponent) //base ** exponent;
console.log(calculateBaseToExponent(5, 5));
console.log(calculateBaseToExponent(10, 10));
console.log(calculateBaseToExponent(3, 3));

//7
console.log("//7")
const dogAge = (dogY) => dogY * 7;
let dogYears2 = dogAge(4);
console.log("Your doggo " + dogYears2 + " years old in human years!")

//8
console.log("//8")
const calcSupply = (age, dayAmmount) => (80 - age) * (365 * dayAmmount);
const lifetimeSupply2 = calcSupply(25, 2);
console.log("You will need " + lifetimeSupply2 + " bars of chocolate (2 a day) to last you til the age of 80.")
const lifetimeSupply3 = calcSupply(40, 3);
console.log("You will need " + lifetimeSupply3 + " bars of chocolate (2 a day) to last you til the age of 80.")

//9
console.log("//9")
const isWaldoHere = (stringW) => stringW.includes("Waldo");
console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(("waldo is here"));

//10
console.log("//10");
const equalSlices = (sliceN, recipientsN, personN) => recipientsN * personN <= sliceN;
console.log(equalSlices(11, 5, 3));
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

//11
console.log("//11");

/* Notes:
Return a boolean value (true or false).
The string can contain any character.
When neither an x nor an o is in the string, return true.
Examples: */

const xo = (myString) => {
    let checkForX = 0; // "x"
    let checkForO = 0; // "o"
    let myNewString = myString.toLowerCase();
    for (let position = 0; position < myNewString.length; position++) {
        if (myNewString.charAt(position) === "x") {
            checkForX++;
        } else if (myNewString.charAt(position) === "o") {
            checkForO++;
        }
    }
    if (checkForO === checkForX) {
        return true;
    } else {
        return false;
    }
}
console.log(xo("ooxx")); // ➞ true
console.log(xo("xooxx")); // ➞ false
console.log(xo("ooxXm")); // ➞ true (case insensitive)
console.log(xo("zpzpzpp")); // ➞ true (returns true if no x and o)
console.log(xo("zzoo")); // ➞ false

//12
console.log("//12")

function isPrime(n) {
    for (let i = 2; i < n; i++)

    /* it will always be less than the parameter so the condition below will never allow parameter 
    to be divisible by itself ex. (7 % 7 = 0) which would return true  */

    {
        if (n % i === 0) return false;
    }

    // when parameter is divisible by i, it's not a prime number so return false

    return n > 1;

    /* otherwise it's a prime number so return true (it also must be greater than 1, 
    reason for the n > 1 instead of true) */
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(11));