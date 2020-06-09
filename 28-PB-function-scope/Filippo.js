//1
const exponential = (num1, num2) => {
    console.log(num1 + " and " + num2 + " are " + typeof (num1, num2) + "s");
    let mult = '';
    for (let i = 1; i <= num2; i++) {
        mult = mult + ' ' + num1 ** i;
    }
    console.log(mult);
}
exponential(3, 5)

//2
let myFav = "Mango"
const myFavoriteFruit = (myfav) => {
    console.log(`My favourite fruit is ${myFav}`)
}
myFavoriteFruit(myfav)

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