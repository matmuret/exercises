"use strict";

function isFourLetters(str) {
    let resoult = []
    for (let i = 0; i < str.length; i++) {
        if (str[i].length === 4) {
            resoult.push(str[i]);
        }
    }
    return resoult;
}

console.log("//1 ", isFourLetters(["John", "James", "Jack", "Jeanne"])) // ➞ ["John", "Jack"]
console.log("//1 ", isFourLetters(["Tomato", "Corn", "Lettuce"])) // ➞ ["Corn"]
console.log("//1 ", isFourLetters(["Dog", "Cat", "Deer"])) // ➞ ["Deer"]

//2
function monthName(num) {
    let month = [];
    switch (num) {
        case 1:
            month.push("January")
            break;
        case 2:
            month.push("February")
            break;
        case 3:
            month.push("March")
            break;
        case 5:
            month.push("April")
            break;
        case 6:
            month.push("May")
            break;
        case 7:
            month.push("June")
            break;
        case 8:
            month.push("July")
            break;
        case 9:
            month.push("August")
            break;
        case 10:
            month.push("September")
            break;
        case 11:
            month.push("October")
            break;
        case 12:
            month.push("November")
            break;
        default:
            month.push("")
    }
    return month;
}

console.log("//2 ", monthName(3)) // ➞ "March"
console.log("//2 ", monthName(12)) // ➞ "December"
console.log("//2 ", monthName(6)) // ➞ "June"

//3
function amplify(num) {
    let resoult = [];
    for (let i = 1; i <= num; i++) {
        if (i % 4 === 0) {
            resoult.push(i * 10)
        } else {
            resoult.push(i);
        }
    }
    return resoult;
}


console.log("//3 ", amplify(4)) // ➞ [1, 2, 3, 40]
console.log("//3 ", amplify(3)) // ➞ [1, 2, 3]
console.log("//3 ", amplify(25)) // ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

//4
function unique(nums) {
    let resoult = [];
    for (let i = 0; i < nums.length; i++) {
        resoult.splice(0, nums.length);
        for (let j = 0; j < nums.length; j++) {
            nums[j] === nums[i] ? resoult.push(nums[i]) : "";
        }
        if (nums.length === 1) {
            return nums[i];
        }
    }
}

console.log("//3 ", unique([3, 3, 3, 7, 3, 3])) // ➞ 7
console.log("//3 ", unique([0, 0, 0.77, 0, 0])) // ➞ 0.77
console.log("//3 ", unique([0, 1, 1, 1, 1, 1, 1, 1])) // ➞ 0