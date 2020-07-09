'use strict';
// 1. 
class Dog {
    constructor(name) {
        this.name = name;
    }
    bark = function () {
        console.log(`${this.name} says woof`);
    }
};
let fido = new Dog("fido");
fido.bark();
// bark method is outside of the class 
// 2.
/* / 2. Month Name (di Vincenzo)
console.log("\n2. Month Name:");
const getMonthName = monthNum => {
    try {
        if (typeof monthNum !== "number") {
            throw new Error("Error: Should be a valid number!");
        } else {
            let message = "";
            switch (monthNum) {
                case 1:
                    message = "January";
                    break;
                case 2:
                    message = "February";
                    break;
                case 3:
                    message = "March";
                    break;
                case 4:
                    message = "April";
                    break;
                case 5:
                    message = "May";
                    break;
                case 6:
                    message = "June";
                    break;
                case 7:
                    message = "July";
                    break;
                case 8:
                    message = "August";
                    break;
                case 9:
                    message = "September";
                    break;
                case 10:
                    message = "October";
                    break;
                case 11:
                    message = "November";
                    break;
                case 12:
                    message = "December";
                    break;
                default:
                    throw new Error("Error: It's not a valid month number!");
            }
            return message;
        }

    } catch (e) {
        return e.type, "=> ", e.message;
        return e.name, "=> ", e.message;
    }

} */
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const getMonthName = (num) => {
    try {
        if (num <= 12) {
            return months[num - 1];
        } else {
            throw new Error('Invalid Month Number!');
        }
    } catch (e) {
        return e;
    }
}
console.log(getMonthName(13));
console.log(getMonthName(12));
// 3.
const reverseString = (str) => {
    try {
        if (typeof (str) === 'string') {
            return str.split('').reverse().join('');
        } else {
            throw new Error('ERROR! This is not a string!');
        }
    } catch (e) {
        return e;
    }
}
console.log(reverseString(12));
console.log(reverseString('hello'));
// 4
function compareArrays(arr1, arr2) {
    if (arr1.toString() === arr2.toString()) {
        return true
    } else {
        return false
    }
}
console.log(compareArrays([1, 2], [1, 3]));
console.log(compareArrays([1, 2], [1, 2]));
console.log(compareArrays([4, 5, 6], [4, 5, 6]));
console.log(compareArrays([4, 7, 6], [4, 5, 6]));

// 5.
function sum(array) {
    if (array.length < 1) {
        return 0;
    } else {
        let result = array.pop() + sum(array);
        return result;
    }
    let result = array.pop() + sum(array);
    return result;
}


console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3, 4]));
 