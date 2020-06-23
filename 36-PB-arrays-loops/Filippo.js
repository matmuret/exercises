"use strict";

//1
const sumOfNumbers = (nums) => {
    let sum = 0;
    let mult = 1;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        mult = mult * nums[i];
    }
    console.log("//1 the sum is", sum, "while the product is ", mult);

}
sumOfNumbers([4, 5, 6]);

//2
function HelloFrien(friends) {
    for (let i = 0; i < friends.length; i++) {
        console.log("//2 Hello " + friends[i])
    }
}
console.log("//3 ", HelloFrien(["Paola", "Carlo", "Antonio"]));

//3
function cityNames(cities) {
    let addCity = "";
    for (let i = 0; i < cities.length; i++) {
        addCity += cities[i] + ",";
        /* return addCity */
    }
    addCity = addCity.substring(0, addCity.length - 1);
    return addCity
}
console.log("//3 ", cityNames(["Berlin", "Paris", "Prague", "Rome"]));

//4
function oddsAndEvens(nums) {
    let count = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            count.push(nums[i]--);
        } else {
            count.push(nums[i]++);
        }
    }
    return count;
}
console.log("//4 ", oddsAndEvens([3, 5, 2, 4]));
console.log("//4 ", oddsAndEvens([6, 9, 10, 20]));

//5
const capitalize = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return result;
}
console.log("//5 ", capitalize(["matt", "sara", "lara"])); // ➞ ["Matt", "Sara", "Lara"]
console.log("//5 ", capitalize(["samuel", "MARIA", "luke", "mary"])); // ➞ ["Samuel", "Maria", "Luke", "Mary"]
console.log("//5 ", capitalize(["Cynthia", "Karen", "Jane", "Carrie"])); // ➞ ["Cynthia", "Karen", "Jane", "Carrie"]
console.log("//5 ", capitalize(["matt", "sara", "lara"]));

//6
/* function noDuplicates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            // we don't have it already
            newArray.push(array[i]);
            // we push it once!
        }
    }
    return newArray;
} */
function noDuplicates(array) {
    let newArray = array;
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(newArray[i]) !== newArray.lastIndexOf(newArray[i])) {
            newArray.splice(i, 1);
            i = 0;
        }
    }
    return newArray
};

console.log("//6 ", noDuplicates([1, 4, 4, 7, 7, 7])) // ➞ [1, 4, 7]
console.log("//6 ", noDuplicates([1, 6, 6, 9, 9])) // ➞ [1, 6, 9]
console.log("//6 ", noDuplicates([2, 2, 2, 2, 2, 2])) // ➞ [2]
console.log("//6 ", noDuplicates([5, 10, 15, 20, 25])) // ➞ [5, 10, 15, 20, 25]

//7

const repeatIt = (str, n) => {
    const resoult = [];
    for (let i = 1; i <= n; i++) {
        resoult.push(str);
    }
    return resoult;
}

console.log("//7 ",repeatIt("example", 3)); //➞["example", "example", "example"] 
console.log("//7 ",repeatIt("example", 3)); //➞["example", "example", "example"]