"use strict";


function tree(content, lines) {
    let myArray = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < i; j++) {
            myArray.push(content);
            console.log(myArray.join(" "))
        }
    }
}
tree("*", 4);


/* let array = [
    ["*"],
    ["* *"],
    ["* * *"],
    ["* * * *"]
];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
} */


// build a half pyramid with return
const halfPyramid = (lines) => {
    let array = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j <= i; j++) {
            array.push("*"); // the amount of stars per line
            console.log(array);
        }
        array.push("\n"); // insert a new line break special character
    }
    return " " + array.join(" ");
}
console.log("Task 1: Pyramid");
console.log(halfPyramid(4));
// mohameds number pyramid
function mohamedsPyramid(lines) {
    let string = '';
    for (let i = 0; i < lines; i++) { // forwards
        for (let j = i; j >= 0; j--) { // backwards accordingly to i
            string += j + " ";
        }
        string += "\n"; // new line break
        //console.log(string);
    }
    return string;
}
console.log(mohamedsPyramid(10));


//2

let arrayInsideOfAnArrayyy = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

function two(arrayInsideOfAnArray){
for (let i = 0; i < arrayInsideOfAnArray.length; i++) {
    // in the outer array 
    console.log("row", i); // 4 times 
    // get the whole line

    for (let j = 0; j < arrayInsideOfAnArray[i].length; j++) {
        // in the inner array 
        console.log(" "+arrayInsideOfAnArray[i][j]);

    }
}
}
two (arrayInsideOfAnArrayyy)
//3
/* 1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 */

function three(n) {
    let resultOne = "";
    for (let i = 1; i < n.length; i++) {
        for (let j = 0; j < 3; j++) {
            resultOne += n[i] + "";
        }
    }
    console.log("//3.1 ", resultOne);

    let resultTwo = "";
    for (let i = 1; i < n.length; i++) {
        for (let j = 0; j < 5; j++) {
            resultTwo += n[j] + "";
        }
    }
    console.log("//3.2 ", resultTwo);
}
three([0, 1, 2, 3, 4]);