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
/* let amounts = [];
for (let key in orders) {
    let value = orders[key];
    let result = amounts.push(value.amount);
} */

const ordersArray = []
for (const obj of orders) {
    for (const key in obj) {

        ordersArray.push(obj[key]);
    }
}
const total = ordersArray.reduce((previousValue, currentValue) => {
    return previousValue + currentValue /* ["amount"] */ ; //without ["ammount"] and ...0) it works with the for loop
}, /* 0 */ );
console.log("//1 ", total);

/* #### 2. Increment by 1
* Create a function that increments each element in the `arrayOfNumbers` by 1. 
Return the a new array of modified elements. */

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const increment = arrayOfNumbers.map((value) => {
    return value + 1; // 
});
console.log("//2 ", increment);

/* #### 3. Filter Evens
* Create a function called filterEvens that filters an array and only return even numbers. 
The function should take an array of numbers as an argument, and should not use a loop. */

const filterEvens = (arr) => arr.filter((value, /* index,array */ ) => value % 2 === 0)


console.log("//5 ", filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log("//5 ", filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]

/* #### 4. Filter Friends
 * Given an array, create a function which filters array based on a search query. */


const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterItems = (fri, letters) => fri.filter((value, /* index,array */ ) => value.toLowerCase().includes(letters))

console.log("//4 ", filterItems(friends, 'ka')); // ["Rika"];
console.log("//4 ", filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

/* #### 5. Sum Up
 * Write a function called sum that uses the reduce method to sum up an array of numbers.  */

const sum = (arr) => arr.reduce((previous, current) => previous + current);

console.log("//5 ", sum([1, 2, 3, 4, 5])); //returns 15
console.log("//5 ", sum([6, 7, 7])); //returns 20

/* #### 6. Square Root
 * Given an array of numbers, find the square root of each element in the array. */


const squareRoot = (arr) => arr.map((value) => Math.sqrt(value));

console.log('//6 ', squareRoot([3, 45, 6, 56, 7, 9]));


/* Bonus 1*/
const ingredients = ["cow", "potatos", "chicken", "corn"];

function cook(value) {
    if (value === "cow") {
        return "hamburger";
    } else if (value === "potatos") {
        return "fries";
    } else if (value === "chicken") {
        return "chicken wings";
    } else if (value === "corn") {
        return "pop corn";
    } else return "error";
}
const food = ingredients.map(cook);
console.log("Bonus 1", food);

/* Bonus 2*/

const veggie = food.filter((value) => value.includes("fries") || value.includes("pop corn")) // doesn't work with .includes(...veggieFood)
console.log("Bonus 2", veggie);

/* Bonus 3*/
const shitting = food.reduce((previousValue, /* currentValue */ ) => {
    return previousValue = "shit"
});
console.log("Bonus 3", shitting);