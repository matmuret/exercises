"use strict";

//1
let euroCities=["Paris", "London", "Valletta", "Prague", "Rome"];
let secondVar=euroCities[1];
console.log(secondVar);

//2
euroCities[0]="Berlin";
console.log("//2 "+euroCities);

//3
console.log("//3 "+euroCities.length);

//4
euroCities.pop();

//5
euroCities.push("Budapest");

//6
euroCities.splice(1,2);
console.log("//6 "+euroCities); 

//7
let asianCities = ["Hong Kong","Pei Jing","Macao","Tokyo","Singapore"];

//8
let thirdVar = asianCities.slice(1,3);
console.log("//8 "+thirdVar);

//9
let wordCities = euroCities.concat(asianCities);
console.log("//9 "+wordCities);

//10
asianCities.reverse();
console.log(asianCities);

//11
asianCities.splice(2, 1, 'Toronto');
console.log("/11 "+ asianCities);


//12


