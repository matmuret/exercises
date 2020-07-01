/* #### 1. Lowest to Highest
Given an array of numbers from 1-9: 
Sort the array from lowest value to highest. */

const num = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
const sortNum = num.sort()
console.log(sortNum);

/* Given an array of names:
Sort the array based on alphabetical order from `a → z`.  */

const lett=["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];
const sortLett=lett.sort();
console.log(sortLett);

/* 1. Once you've wrote down your pen and paper solutions, 
create functions to solve the problems above with javascript.  */

const sortNumber = (arr) => arr.sort()
console.log(sortNumber([4, 2, 5, 3, 9, 7, 1, 8, 2, 6]))


const sortLetter = (arr) => arr.sort()
console.log(sortLetter(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]))


