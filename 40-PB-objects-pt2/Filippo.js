/* **1. Check if a number is within a given range.**
Write a program that checks if a number is within the range 
of an object's min and max properties. Assume min <= max is always true. */

const range = {
    min: 0,
    max: 5
};

/* - 4, { min: 0, max: 5 } ➞ true
- 4, { min: 4, max: 5 } ➞ true
- 4, { min: 4, max: 5 } ➞ false
- 5, { min: 4, max: 5 } ➞ true */

function check(n) {
    
    if (n >= range.min && n <= range.max) {
        return true;
    }else {
        return false;
    }

}
console.log("//1 " + check(4));

/* - 4, { min: 0, max: 5 } ➞ true
- 4, { min: 4, max: 5 } ➞ true
- 4, { min: 4, max: 5 } ➞ false
- 5, { min: 4, max: 5 } ➞ true */

const checkTwo = (num, obj) => {
    let myArr = Object.values(obj); // CONVERT AN OBJECT INTO AN ARRAY 
    if (num >= myArr[0] & num <= myArr[1]) {
        return true;
    } else {
        return false;
    }
}
console.log("//1.2 "+checkTwo (4, {
    min: 0,
    max: 5
}));
console.log("//1.2 "+checkTwo (4, {
    min: 4,
    max: 5
}));
console.log("//1.2 "+checkTwo (4, {
    min: 6,
    max: 10
}));
console.log("//1.2 "+checkTwo (5, {
    min: 5,
    max: 5
}));

/* **2. Scrabble.**
Write a program that, given an array of scrabble tiles, 
counts the maximum score that a player can earn from the tiles in their hand. */
let scoreArray = [{
        tile: "N",
        score: 1
    },
    {
        tile: "K",
        score: 5
    },
    {
        tile: "Z",
        score: 10
    },
    {
        tile: "X",
        score: 8
    },
    {
        tile: "D",
        score: 2
    },
    {
        tile: "A",
        score: 1
    },
    {
        tile: "E",
        score: 1
    }
]
function maximumScore (arr){
    let result=0
    for (let i=0;i<arr.length;i++) {
        result+=arr[i].score;// unpack the inner object
    }
    return result
}
console.log("//2 "+maximumScore (scoreArray))
/* The player 's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28  */

/* **3. Is it an empty object?**
Write a program that returns true if an object is empty, and false if otherwise. */
let empty = {
   /*  a: 1 */
}
/* - {} ➞ true
- {a: 1} ➞ false */
function emptyObject(obj) {
    let i = 0
    for (let key in obj) {
        ++i;
    }
    if (i !== 0) {
        return false
    } else {return true}
    
}
console.log("//3 " + emptyObject(empty));

const emptyObjectTwo = (obj) => Object.keys(obj).length === 0? true :false ;// CONVERT AN OBJECT INTO AN ARRAY 

console.log("//3.2 " + emptyObjectTwo({}));
console.log("//3.2 " + emptyObjectTwo({
    a: 1
}));


/* **4. Counting Letters.**
Create a function that counts the number of occurrences of each letter in a string. 
Return an object with key pair values of letters and the number of occurrences for each letter. */

/* function countLetters(string) {
    let string1 = string.split("") .join("")
    let result = 1;
    for (let i = 0; i < string.length; i++) {
        if (string1[i] === string1[i + 1]) {
            result++;
        } else {
            console.log("//4 " + string1[i] + " " + result);
            result = 1;
        }
    }
    
} */

function countingLetters(str) {
    const objResult = {};
    for (let i = 0; i < str.length; i++) {
        //unpack the inner object
        objResult[str[i]] = str.split(str[i]).length - 1;//str.split([separator[, limit]])
    }
    return objResult;
}

console.log("//4 " + countingLetters('tree'));// ➞ {t: 1, r: 1, e: 2}

/* **5. Free Shipping.**
Create a function that determines whether an online order should get free shipping. 
An order gets free shipping if the total cost of items exceeds €50. */

function freeShipping(obj) {
    let val = Object.values(obj); // CONVERT AN OBJECT INTO AN ARRAY 
    result = 0;
    for (let i = 0; i < val.length; i++) {
        result += val[i];
    }
    return result >= 50 ? true : false;

}
console.log("//5 " + freeShipping({
    "Sponge": 3.50,
    "Soap": 5.99
})) // ➞ false
console.log("//5 " + freeShipping({
    "Surround Sound Equipment": 499.99
})) // ➞ true
console.log("//5 " + freeShipping({
    "Wool": 13.99,
    "Knitting Needles": 15.50,
    "Bag": 13.99
})) // ➞ false