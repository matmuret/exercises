"use strict";
//1
let isDog = true;
console.log(isDog === true ? "pat, pat" : "find me a dog to pat");
//or
isDog === true ? console.log("pat, pat") : console.log("find me a dog to pat");
//or
let answer= isDog ? ("pat, pat"):("find me a dog to pat")
//or
if (isDog === true) {
    isDog === 'pat, pat';
} else {
    isDog === 'find me a dog to pat';
}
console.log(isDog);
//2
let speedlimit = 50;
let speedCheck= 80;
console.log(speedCheck > speedlimit ? "you're going too fast!" : "You're driving below the speed limit, Oma");
//or
let HowFast= speedCheck > speedlimit ? console.log("you're going too fast!") : console.log("You're driving below the speed limit, Oma")
//or
if (speedCheck > 50) {
    speedCheck === "you're going too fast!"
} else {
    speedCheck === "You're driving below the speed limit, Oma"
}
console.log(speedCheck);
//3
let age;
console.log(age < 16 ? "serve butter beer" : "serve beer");
//or
age < 16 ? console.log("serve butter beer") : console.log("serve beer")
//or
if (age < 16) {
    age === "serve butter beer"
} else {
    age === "serve beer"
}
console.log(age);
//4
let isStudent;
console.log(isStudent === true ? "Ticket costs €5,00" : "Ticket costs €12,00");
//or
isStudent === true ? console.log("Ticket costs €5,00") : console.log("Ticket costs €12,00")
//or
if (isStudent === true) {
    isStudent === "Ticket costs €5,00"
} else {
    isStudent === "Ticket costs €12,00"
}
console.log(isStudent);
//5
let okMarie;
let cake
console.log(okMarie === cake ? "Let them eat cake" : "Oh, bother");
//or
okMarie === cake ? console.log("Let them eat cake") : console.log("Oh, bother")
//or
if (okMarie === cake) {
    okMarie === "Let them eat cake"
} else {
    okMarie === "Oh, bother"
}
console.log(okMarie);