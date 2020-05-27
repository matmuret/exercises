"use strict";

//1
console.log(3 == "3" ? true : false);
/*true beacause it compares just the values while the 
types can be different.*/

console.log(3 === "3" ? true : false);
/*false because it compares both the values and the types, 
apparently the type is not the same and it may be converted 
by using Boolean(), Number(), String(). Better to use the 
strict comparison in order to avoid mistakes*/

/*NB if we use just `=` we'll have an ERRoR SyntaxError: 
Invalid left-hand side in assignment = definition = is 
not a comparison, its always an assignment = definition! */

//2
let firstVar = true;
console.log(!firstVar ? true : false);

//3
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
/* 'givenName' is just DECLARED and NOT ASSIGNED 
while 'firstname' is both declared and assigned,
that's why when I give the option to assign either 
'givenName' or 'firstname' to 'name' 'firstName'
is gonna win. So the output is gonna be "Stacey"*/  