"use strict";

function isFourLetters(str) {
    let resoult = []
    for (let i = 0; i < str.length; i++) {
        if (str[i].length === 4) {
            resoult.push(str[i]);
        }
    }
    return resoult;
}

console.log("//1 ", isFourLetters(["John", "James", "Jack", "Jeanne"])) // ➞ ["John", "Jack"]
console.log("//1 ", isFourLetters(["Tomato", "Corn", "Lettuce"])) // ➞ ["Corn"]
console.log("//1 ", isFourLetters(["Dog", "Cat", "Deer"])) // ➞ ["Deer"]

//2
function monthName(num) {
    let month = [];
    switch (num) {
        case 1:
            month.push("January")
            break;
        case 2:
            month.push("February")
            break;
        case 3:
            month.push("March")
            break;
        case 4:
            month.push("April")
            break;
        case 5:
            month.push("May")
            break;
        case 6:
            month.push("June")
            break;
        case 7:
            month.push("July")
            break;
        case 8:
            month.push("August")
            break;
        case 9:
            month.push("September")
            break;
        case 10:
            month.push("October")
            break;
        case 11:
            month.push("November")
            break;
        case 12:
            month.push("December")
            break;
        default:
            month.push("")
    }
    return month;
}

console.log("//2 ", monthName(3)) // ➞ "March"
console.log("//2 ", monthName(12)) // ➞ "December"
console.log("//2 ", monthName(6)) // ➞ "June"

//3
function amplify(num) {
    let resoult = [];
    for (let i = 1; i <= num; i++) {
        if (i % 4 === 0) {
            resoult.push(i * 10)
        } else {
            resoult.push(i);
        }
    }
    return resoult;
}


console.log("//3 ", amplify(4)) // ➞ [1, 2, 3, 40]
console.log("//3 ", amplify(3)) // ➞ [1, 2, 3]
console.log("//3 ", amplify(25)) // ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

//4
function unique(array) {
    let currentValue = null;
    for (let i = 0; i < array.length; i++) {
        currentValue = array[i];
        if (array.indexOf(currentValue) === array.lastIndexOf(currentValue)) { // no doublette
            return currentValue; // uniqueness
        } else {
            console.log("We found a double!" + array[i]);
        }
    }
}
console.log("//4 ", unique([3, 3, 3, 7, 3, 3])) // ➞ 7
console.log("//4 ", unique([0, 0, 0.77, 0, 0])) // ➞ 0.77
console.log("//4 ", unique([0, 1, 1, 1, 1, 1, 1, 1])) // ➞ 0 */

//5
/* function wordRank(str){

    var anum={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    if(str.length=== 1) return anum[str] || ' ';
    return str.split('').map(wordRank);
} */

/* function wordRank(sentence) {
    const words = sentence.split(" ");
    console.log(words);
    const ranking = [];
    for (let i = 0; i < words.length; i++) {
        let wordScore = 0;
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            const letterScore = word.toUpperCase().charCodeAt(j) - 64; // little hacky :D
            // charCodeAt would return a number between 97 (a) - 122 (z)
            wordScore += letterScore;
        }
        ranking.push(wordScore);
    }
    let winningPosition = 0;
    for (let i = 0; i < ranking.length; i++) {
        if (i === 0) {
            // first entry, skip over
            continue;
        }
        if (ranking[i] > ranking[winningPosition]) {
            winningPosition = i;
        }
    }
    return "${words[winningPosition]}" is the winner with a score of ${ranking[winningPosition]};
}
 */


function wordRank(x){
    let result = '', value =0, counterValue = 0; 
  
    let splittedArray = x.split(' ');
     // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];
  
    splittedArray.map(splitItem => {
      counterValue = 0;

      /* The map() method creates a new array populated with the results of calling a provided 
      function on every element in the calling array. */

      let splitItemArray = splitItem.split('');

      /*
      [“T”, “h”, “e”, “ “, “q”, “u”, “i”, “c”, “k”, “ “, “b”, “r”, “o”, “w”, “n”, “ “, “f”, “o”, “x”, “ “, “j”, “u”, “m”, “p”,
      “d”, “ “, “o”, “v”, “e”, “r”, “ “, “t”, “h”, “e”, “ “, “l”, “a”, “z”, “y”, “ “, “d”, “o”, “g”]; */
  
      splitItemArray.map(splitChar => { 
        counterValue += splitChar.charCodeAt();
      })

      /* The charCodeAt() method returns an integer between 0 and 
      65535 representing the UTF-16 code unit at the given index. */
  
      if(counterValue>value){
        result = splitItem;
        value = counterValue;
      }
    });
    return result;
  }

console.log("//5 ", wordRank("The quick brown fox.")) // ➞ "brown"
console.log("//5 ", wordRank("Nancy is very pretty.")) // ➞ "pretty"
console.log("//5 ", wordRank("Check back tomorrow, man!")) // ➞ "tomorrow"
console.log("//5 ", wordRank("Today is Wednesday.")) // ➞ "Wednesday"

//6
function hackerSpeak(string) {
    let arr = string.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "a":
                arr[i] = "4";
                break;
            case "e":
                arr[i] = "3";
                break;
            case "i":
                arr[i] = "1";
                break;
            case "o":
                arr[i] = "0";
                break;
            case "s":
                arr[i] = "5";
        }
    }
    return arr.join("");
}
function hackerSpeak2(string) {
    let newString = string; // copy to the string for output
    //const regexA = /a/gi;
    //console.log(typeof regexA);
    newString = newString.replace(/a/gi, 4)
                        .replace(/e/gi, 3)
                        .replace(/i/gi, 1)
                        .replace(/o/gi, 0)
                        .replace(/s/gi, 5);
    return newString;
}
console.log(hackerSpeak2("javascript is cool"));
console.log(hackerSpeak2("programming is fun"));
console.log(hackerSpeak2("become a coder"));


