"use strict";

//1
let firstVar = "I can walk in the park all day";
console.log(firstVar);
console.log(firstVar.substring(18, 22));

//2
let secondVar = "Hello World";
console.log(secondVar);
secondVar = secondVar.toLocaleUpperCase();
console.log(secondVar);

//3
let thirdVar = "Hello Earthling";
thirdVar = thirdVar.toLocaleLowerCase();
console.log(thirdVar);

//4
let fourthVar = "JavaScript";
console.log(fourthVar);
console.log(fourthVar.substring(3, 6));

//5
let fifthVar = "nice shoes";
console.log(fifthVar.includes("l"));
console.log(fifthVar.includes("n"));

//6
let sixthVar = "Banana";
console.log(sixthVar.substring(0, 1) + sixthVar + sixthVar.substring(0, 1));
//or
console.log(sixthVar[0] + sixthVar + sixthVar[0])

//7
let seventhVar = "Scritch"
console.log(seventhVar.substring(4) + seventhVar + seventhVar.substring(4));

//8
let eighthVar = "BoogieWoogie"
console.log(eighthVar[11] + eighthVar.substring(1, 11) + eighthVar[0]);

//9
let name = "Filippo";
let city = "Berlin";
let job = "Web Developer"
console.log(`My name is ${name}. I live in ${city} and I am a ${job}`)

//10
let ninthVar = "the quick brown fox";
ninthVar = ninthVar[0].toLocaleUpperCase() + ninthVar.substring(1);
console.log(ninthVar);