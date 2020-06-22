"use strict";

//1
function findGreatest(arrayNum, n) {
    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] > n) {
            return (arrayNum[i] + " ");
        }
    }
}

console.log("//1 " + findGreatest([3, 4, 5], 4));
console.log("//1 " + findGreatest([10, 20, 30], 12));
console.log("//1 " + findGreatest([0, 10, 3], 4));

//2
//https://www.freecodecamp.org/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/

//The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

function longestWord(str) {
    // Step 1. Split the string into an array of strings
    let strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

    // Step 2. Use the reduce method
    let longestWord = strSplit.reduce(function (longest, currentWord) {
        if (currentWord.length > longest.length)
            return currentWord;
        else

            return longest;
    }, "");

    /* Reduce process
    currentWord      longest       currentWord.length     longest.length    if(currentWord.length > longest.length)?   var longestWord
    "The"             ""                  3                     0                              yes                          "The"
    "quick"           "The"               5                     3                              yes                         "quick"
    "brown"           "quick"             5                     5                              no                          "quick"
    "fox"             "quick"             3                     5                              no                          "quick"
    "jumped"          "quick"             6                     5                              yes                         "jumped"
    "over"            "jumped"            4                     6                              no                          "jumped"
    "the"             "jumped"            3                     6                              no                          "jumped"
    "lazy"            "jumped"            4                     6                              no                          "jumped"
    "dog"             "jumped"            3                     6                              no                          "jumped"
    */

    // Step 3. Return the length of the longestWord
    return longestWord; // var longestWord = "jumped" 
    // longestWord.length => "jumped".length => 6
}
console.log("//2 " + longestWord("this is a web development course"));

//3
function reverse(n) {
    n = n + "";
    return n.split("").reverse().join("");
}

console.log("//3 " + reverse(34532));

//4
// const vowels = ["a", "e", "i", "o", "u"];

function findVowels(text) {
    // Initialize counter
    let counter = 0;

    // Loop through text to test if each character is a vowel
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
            counter++
        };
        /* switch (text[i]) {
            case a:
            case e:
            case i:
            case o:
            case u:
                counter++;
        } */

    }
    return counter;
}
console.log("//4 " + findVowels("this is a string"));

//5

/* function missingNums (nums){
    let sumIfNoneIsMissing=nums.length;//9
    
    let actualSum=0;
    for (let i=1;i<=nums.length;i++){
        sumIfNoneIsMissing+=i;//9+0+1+2+3+4+5+6+7+8+9= 54
        
        actualSum+=nums[i];//49
       
    }
    return  sumIfNoneIsMissing-actualSum;//54-49=5
} */

function missingNums(nums) {

    let missNum = [];
    let sortNums = nums.sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i <= nums.length + 1; i++) {
        if (sortNums.indexOf(i) === -1) {
            if (i !== 0) {
                missNum.push(i);
            }
        }
    }
    return missNum;
}
console.log("//5 " + missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log("//5 " + missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log("//5 " + missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]));

//6
function sumOfCubes(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] ** 3;
    }
    return sum
}



console.log("//6 ", sumOfCubes([1, 5, 9]));
console.log("//6 ", sumOfCubes([8]));
console.log("//6 ", sumOfCubes([0]));

//7
/* ex:
let str = 'To be, or not to be, that is the question.'
console.log(str.startsWith('To be'))          // true
console.log(str.startsWith('not to be'))      // false
console.log(str.startsWith('not to be', 10))  // true */

function dictionary(init, str) {
    let myStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].startsWith(init) === true) {
            /*  return */
            myStr.push(str[i]);
        }
        return myStr
    }
}


console.log("//7 ", dictionary("bu", ["button", "breakfast", "border"])); //➞ ["button"])
console.log("//7 ", dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])); //➞ ["triplet", "tries", trip"]
console.log("//7 ", dictionary("beau", ["pastry", "delicious", "name", "boring"])); //➞ [] */

//8
function evenNums(num) {
    let evenNum = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evenNum.push(i);
        }
        /* return evenNum */
    }
    return evenNum;
}


console.log("//8 ", evenNums(8)); //➞ [2, 4, 6, 8]
console.log("//8 ", evenNums(4)); //➞ [2, 4]
console.log("//8 ", evenNums(2)); //➞ [2] 

//9 bonus
function alphaOrder(str); {
    return str.split('').sort().join('');
}

/* The split() method is used to split a String object into an array of strings by separating the string into substrings.
Code : console.log('32243'.split(""));
Output : ["3", "2", "2", "4", "3"]

The sort() method is used to sort the elements of an array in place and returns the array.
Code : console.log(["3", "2", "2", "4", "3"].sort());
Output : ["2", "2", "3", "3", "4"]

The join() method is used to join all elements of an array into a string.
Code : console.log(["2", "2", "3", "3", "4"].join(""));
Output : "22334" */

console.log("//9 bonus ", alphaOrder("webdev")); //➞ "bdeevw" */ok