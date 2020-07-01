/* #### 1. Get total orders
 * Return the total amount of orders.  */


const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

const ordersArray = []
for (const obj of orders) {
    for (const key in obj) {
        /*  console.log(obj[key]); */
        ordersArray.push(obj[key]);
    }
}
const total = ordersArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});
console.log("//1 ", total);

/* #### 2. Increment by 1
* Create a function that increments each element in the `arrayOfNumbers` by 1. 
Return the a new array of modified elements. */

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const increment = arrayOfNumbers.map((value) => {
    return value + 1; // 
});
console.log("//2 ", increment);

/* #### 5. Sum Up
 * Write a function called sum that uses the reduce method to sum up an array of numbers.  */

const sum = (arr) => arr.reduce((previous, current) => previous + current);

console.log("//5 ", sum([1, 2, 3, 4, 5])); //returns 15
console.log("//5 ", sum([6, 7, 7])); //returns 20

/* #### 6. Square Root
 * Given an array of numbers, find the square root of each element in the array. */


const squareRoot = (arr) => arr.map((value) => Math.sqrt(value));

console.log('//6 ', squareRoot([3, 45, 6, 56, 7, 9]));