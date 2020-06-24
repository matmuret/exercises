"use strict";


/* function tree (){ //I don know what to call...
let myArray =[
    ["*"],
    ["* *"],
    ["* * *"],
    ["* * * *"]
];

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j <myArray.length; j++) {
        myArray.push(myArray[i][j]);
    }
}
return myArray
}
 console.log("//1 ",tree([])); */

let array = [
    ["*"],
    ["* *"],
    ["* * *"],
    ["* * * *"]
];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}

//2

let arrayInsideOfAnArray = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
for (let i = 0; i < arrayInsideOfAnArray.length; i++) {
    // in the outer array 
    console.log("row", i); // 4 times 
    // get the whole line

    for (let j = 0; j < arrayInsideOfAnArray[i].length; j++) {
        // in the inner array 
        console.log(arrayInsideOfAnArray[i][j]);

    }
}

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