"use strict";

//1
let color = "red";

switch (color) {
    case "red":
        color = "Love!";
        break;
    case "blue":
        color = "happyness";
        break;
    case "green":
        color = "haelth";
        break;
    case "yellow":
        color = "money";
        break;
    default:
        color = "not found";
}
console.log(color);

//2
let grade = "A";

switch (grade) {
    case "A":
        grade = " You're a f*****g breniac";
        break;
    case "B":
        grade = "good Job";
        break;
    case "C":
        grade = "You could be better";
        break;
    case "D":
        grade = "what did you do yesterday instead of studing?";
        break;
    default:
        grade = "not found";
}
console.log(grade);

//3
let fruit = "Banana";

switch (fruit) {
    case "Banana":
        fruit = "The banana is yellow";
        break;
    case "Apple":
        fruit = "The apple is forbidden fruit";
        break;
    case "Orange":
        fruit = "The orange needs the sun";
        break;
    case "Strawberry":
        fruit = "The Strawsberry is aphrodisiac";
        break;
    default:
        fruit = "not found";
}
console.log(fruit);

//4
let number = 89
if (number < 30) {
    console.log("Still a long way to go")
} else if (number >= 30 && number <= 50) {
    console.log("Slowly getting there")
} else if (number > 50 && number <= 80) {
    console.log("You can do it!")
} else if (number > 80 && number < 100) {
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

