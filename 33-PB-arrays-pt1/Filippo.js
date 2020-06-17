"use strict";

//1
let euroCities=["Paris", "London", "Valletta", "Prague", "Rome"];
let secondVar=euroCities[1];
console.log(secondVar);

//2
euroCities[0]="Berlin";
console.log("//2 ", euroCities);

//3
console.log("//3 ", euroCities.length);

//4
euroCities.pop();
console.log("//4 ", euroCities);

//5
euroCities.push("Budapest");
console.log("//5 ", euroCities);

//6
euroCities.splice(1,2);
console.log("//6 ", euroCities); 

//7
let asianCities = ["Hong Kong","Pei Jing","Macao","Tokyo","Singapore"];
console.log("//7 ", asianCities);

//8
let thirdVar = asianCities.slice(1,4);
console.log("//8 ", thirdVar);

//9
let worldCities = euroCities.concat(asianCities);
console.log("//9 ", worldCities);

//10
asianCities.reverse();
console.log(asianCities);

//11
asianCities.splice(2, 1, 'Toronto');
console.log("//11 ", asianCities);


//12
asianCities.splice(1, 0, 'Washington');
console.log("//12 ", asianCities);

//13
console.log(worldCities.join(''));
console.log("//13 ", asianCities);



