"use strict";

//1
let color = "red";
let colorMeaning;

switch (color) {
    case "red":
        colorMeaning = "Love!";
        break;
    case "blue":
        colorMeaning = "happyness";
        break;
    case "green":
        colorMeaning = "haelth";
        break;
    case "yellow":
        colorMeaning = "money";
        break;
    default:
        colorMeaning = "not found";
}
console.log(colorMeaning);


//2
let grade = "A";
let gradeComment;

switch (grade) {
    case "A":
        gradeComment = " You're a f*****g breniac";
        break;
    case "B":
        gradeComment  = "good Job";
        break;
    case "C":
        gradeComment = "You could do better";
        break;
    case "D":
        gradeComment  = "what did you do yesterday instead of studying?";
        break;
    default:
        gradeComment  = "not found";
}
console.log(gradeComment );

//3
let fruit = "Banana";
let fruitCharacteristic;

switch (fruit) {
    case "Banana":
        fruitCharacteristic = "The banana is yellow";
        break;
    case "Apple":
        fruitCharacteristic  = "The apple is the forbidden fruit";
        break;
    case "Orange":
        fruitCharacteristic  = "The orange needs the sun";
        break;
    case "Strawberry":
        fruitCharacteristic  = "The Strawsberry is aphrodisiac";
        break;
    default:
        fruitCharacteristic  = "not found";
}
console.log(fruitCharacteristic );

//4
let number = 89
if (number < 30) {
    console.log("Still a long way to go")
} else if (number <= 50) {
    console.log("Slowly getting there")
} else if (number <= 80) {
    console.log("You can do it!")
} else if (number < 100) {
    console.log("This is the last push!")
} else {
    console.log("You're there. Well done!")
};

//5
/*
NB. I used google to have propper explaination:

An if-then-else statement can test expressions based on ranges of values or conditions, 
whereas a switch statement tests expressions based only on a single integer, enumerated value, or String object.

A switch statement might prove to be faster than ifs provided number of cases are good.

A switch looks much cleaner when you have to combine cases. Ifs  are quite vulnerable to errors too. 

When compiler compiles a switch statement, it will inspect each of the case constants and create a “jump table” 
that it will use for selecting the path of execution depending on the value of the expression. Therefore, if we 
need to select among a large group of values, a switch statement will run much faster than the equivalent logic 
coded using a sequence of if-elses.
*/

