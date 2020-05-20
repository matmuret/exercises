//1
console.log(Math.max(-1, 0, 1, 2, 3, 4));
console.log(Math.min(-1, 0, 1, 2, 3, 4));

//2a
let roundMeUpOne=3321.32321;
let roundMeUpTwo=326.76;
let roundMeUpThree=76788.7;
let roundMeUpFour= -9.78;
let roundMeUpFive=43.342;

console.log(Math.ceil(roundMeUpOne));
console.log(Math.ceil(roundMeUpTwo));
console.log(Math.ceil(roundMeUpThree));
console.log(Math.ceil(roundMeUpFour));
console.log(Math.ceil(roundMeUpFive));

//2b
let roundMeDownOne=3321.32321;
let roundMeDownTwo=326.76;
let roundMeDownThree=76788.7;
let roundMeDownFour= -9.78;
let roundMeDownFive=28.329;

console.log(Math.floor(roundMeDownOne));
console.log(Math.floor(roundMeDownTwo));
console.log(Math.floor(roundMeDownThree));
console.log(Math.floor(roundMeDownFour));
console.log(Math.floor(roundMeDownFive));

//3
let random=Math.round(Math.random() * 5 + 1);//Math.round goes until 6; +1 in order to start from 1
console.log(random);
