"use strct";

//1
/* Write a function that returns the length of a string. Make your function recursive.
length("apple") ➞ 5
length("make") ➞ 4
length("a") ➞ 1
length("") ➞ 0 */

let calc = 0;
function recorsiveString (string) {
    if (string===0){
        return calc;   
    }else{
        calc += string.length;
        return recorsiveString(string-1);
    }
} 
console.log(recorsiveString("apple"));