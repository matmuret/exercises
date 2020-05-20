"use strict";

//1 
//NaN is a term used in mathematics and computer science to describe a non-numeric value. It may also be a placeholder for an expected numeric result that cannot be defined as a floating point number.
console.log("Is 'hello' a NaN? "+(isNaN("hello")));
console.log("Is '3' a NaN? "+(isNaN("3")));
console.log("The type of NaN is a " +(typeof (NaN)))

//2
let firstVar= 0.1 * 0.2;
console.log(firstVar.toFixed(2));
// make it a number again
let secondVar=parseFloat(firstVar.toFixed(2));
console.log(secondVar);

//3
// DIVISION BY INFINITY is kind of strange ! 
console.log("In JavaScript if you divide Infinity by '0' the resault is gonna be "+ (Infinity/0));
console.log("In JavaScript if you divide '1' by '0' the resault is gonna be "+(1/0));
console.log("In JavaScript if you divide 'Infinity' by 'Infinity' the resault is gonna be "+ (Infinity/Infinity))