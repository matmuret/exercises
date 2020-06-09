"use strict";

//1

const exponential = (num1, num2) => {
    if ((typeof num1 === "number") && (typeof num2 === "number")) {
        let mult = '';
        for (let i = 1; i <= num2; i++) {
            mult = mult + ' ' + num1 ** i;

        }
        console.log(mult);
    } else {
        console.log("they are not numbers")
    }
}
exponential(3, 5)

//2
let myFav = "Mango"
const myFavoriteFruit = (myFav) => {
    myFav = "Mango";
    console.log(`My favourite fruit is ${myFav}`);
}
myFavoriteFruit(myFav);

//3
const exponent = (num1, num2) => {
    let result;
    for (let i = 1; i <= num2; i++) {
        result = num1 ** i;
        console.log(result);
    }
}
exponent(3, 5)
//console.log(result);

// I can't access the variable resoult cause it's declared in a local scope.