/* #### 1. Combining Arrays 
* Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items 
to the end of euroCountries array. 
* Once again create two arrays. Save all elements of both arrays to another variable.  */
let euroCountries = ["Italy", "Germany", "Spain"];
let asianCountries = ["India", "China", "Japan"];
euroCountries.push(...asianCountries);
console.log("//1 ", euroCountries);
let euroCountriesTwo = ["Italy", "Germany", "Spain"]
let worldCountries = [...euroCountriesTwo, ...asianCountries];
console.log("//1.2 ", worldCountries);


/* #### 2. Copying Arrays
 * Copy an array using the spread operator. Store the copied array in another variable.  */
let cities = ["Portomaggiore", "Runco", "Bologna"]
let newCities = [...cities];
console.log("//2 ", newCities);

/* #### 3. Find the Largest... 
Create a function to find the largest number in an array. */

function largestNumber(arr) {
    return Math.max(...arr);
}
console.log("//2 ", largestNumber([4, 5, 1, 3]));

/*  #### 4. Find the Smallest
Create a function to find the smallest number in an array. */
function smallestNumber(arr) {
    return Math.min(...arr);
}
console.log("//3 ", smallestNumber([4, 5, 1, 3]));

/*  #### 5. Clone and Merge
Given two objects:
```javascript
const person = {name: "John"}
const job = {role: "Teacher"}
```
* 5.1 Clone the person object.
* 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so. 
* 5.3 Then change the values of the properties in the employee object. */

const person = {
    name: "John"
}
const job = {
    role: "Teacher"
}

let personTwo = {
    ...person
}
console.log("5.1 ", personTwo)
let employee = {
    ...person,
    ...job
};
console.log("5.2 ", employee);
employee.name = "Filippo";
employee.role = "web Developer";
console.log("5.3 ", employee)