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
const occurences = (stringa, letter) => {

    let output = 0;
    for (let i = 0; i <= stringa.length(); i++) {
        if (stringa[i] === letter) {
            output += 1
        }
    }
    console.log(output);
    return
};
occurences("Filippo", "p");