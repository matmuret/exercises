"use strict";

/* **1. Object Person.**
Create an object named person. Loop through the object and 
print both the property and value of the object.  */

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 12,
    job: "kid",
    city: "Portomaggiore",
}

for (const myKey in person) {
    console.log("//1 " + myKey, person[myKey]); // keys output
}

/*  **2. Get Values.** 
Create a function that returns an array of all 
**values** of an object's properties. */

/* * Expected output: 
```javascript
["tea", "coffee", "milk"]  */

const getObjectValues = ({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
})


const myValues = (myObject) => {
    return Object.values(myObject);
}
console.log("//2 " + myValues(getObjectValues))

/* **3. Add A Method.**
Create an object and add a method to that object which prints 
the values of the objects in a string. */

/* * Example of Expected Output 
"Michael Smith is a 20 year old driver in Paris". */

let personTwo = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: "Paris",
    //method inside the object:
    /*  method: function () {
         return this.firstName + " " + this.lastName + " " + "is a " + this.age + " year old driver in " + this.city
     } */
}
//method outside the object:

personTwo.method = function () {
    return this.firstName + " " + this.lastName + " " + "is a " + this.age + " year old driver in " + this.city
}
console.log("//3 " + personTwo.method())

/* ## Bonus Questions

**1. Convert keys and values into an array.** 

Create a function that converts an object into an array of keys and values. */

/* * Expected output: 
```javascript
[["A", 1], ["B", 2], ["C", 3]] */

let objectToArray = {
    A: 1,
    B: 2,
    C: 3
}

function convertObjToArr(obj) {
    const result =[];
    for (const item in obj){
        let newArr=[]
        newArr.push(item);
        newArr.push(obj[item]);
        result.push(newArr);
    }
    console.log(result)
}
//or
/* function 
    console.log(Object.entries(obj)); //Calling entries, as shown here, will return [key, value] pairs, as the asker requested.
    
} */
convertObjToArr(objectToArray);

/*  **2. List Properties.**
Create a function that returns an array of **properties** of a javascript object. */

/* * Expected output: 
```javascript
["name", "class", "course"] */

let student = {
    name: "Mike",
    class: "4A",
    course: "English"
}

let ii = 0;

function convertPropObjToArr(obj) {
    console.log(Object.keys(obj))

}
convertPropObjToArr(student);

/* **3. Merge.**
Create a function that takes two objects as its parameters and merges them together into a new object. */

/* * Expected output:
```javascript
{firstName: "John", lastName: "Smith"} */

let first = {
    firstName: "John"
}
let last = {
    lastName: "Smith"
}

function margeFunc(obj1, obj2) {
    let merged = {
        ...obj1,
        ...obj2
    };
    console.log(merged);
    //merged is now the union of obj1 and obj2. Properties in obj2 will overwrite those in obj1.
}
margeFunc(first, last);