"use strict";

//1 
let markMass = 70;
let johnMass = 72;
let marKHeight = 1.78;
let johnHeight = 1.75;

//2
let markBMI = markMass / (marKHeight * marKHeight);
let johnBMI = johnMass / (johnHeight * 2);
console.log(markBMI);
console.log(johnBMI);


//3
let markHeiger = markBMI > johnBMI? true:false;

//4
console.log(`Is Mark's BMI higher than John's? Yes,  ${markHeiger}`)

//my personal try to put put everything together
if (markBMI > johnBMI) {
    let markHeiger = `Is Mark's BMI higher than John's one? ` + true;
    console.log(`${markHeiger}`)
} else {
    let johnHeiger = `Is Mark's BMI higher than John's one? ` + false;
    console.log(`${johnHeiger}`)
};

//5
if (markBMI > johnBMI) {
    console.log(`Mark`)
} else {
    console.log(`John`);
};