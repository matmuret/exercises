"use strict";

//1 
let MarkMass = 70;
let JohnMass = 72;
let MarKHeight = 1.78;
let JohnHeight = 1.75;

//2
let MarkBMI = MarkMass / MarKHeight * MarKHeight;
let JohnBMI = JohnMass / JohnHeight ** 2;

//3;4


if (MarkBMI > JohnBMI) {
    let MarkHeiger = `Is Mark's BMI higher than John's one?` + true;
    console.log(`${MarkHeiger}`)
} else {
    let JohnHeiger = `Is Mark's BMI higher than John's one?` + false;
    console.log(`${JohnHeiger}`)
};

//5
if (MarkBMI > JohnBMI) {
    console.log(`Mark`)
} else {
    console.log(`John`);
};