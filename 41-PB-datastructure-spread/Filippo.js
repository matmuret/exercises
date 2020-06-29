/* #### 1. Combining Arrays 
* Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items 
to the end of euroCountries array. 
* Once again create two arrays. Save all elements of both arrays to another variable.  */
let euroCountries=["Italy", "Germany", "Spain"];
let asianCountries=["India", "China", "Japan"];
euroCountries.push(...asianCountries);
console.log("//1 ", euroCountries);
let euroCountriesTwo=["Italy", "Germany", "Spain"] 
let worldCountries=[...euroCountriesTwo , ...asianCountries];
console.log("//1.2 ", worldCountries);


/* #### 2. Copying Arrays
* Copy an array using the spread operator. Store the copied array in another variable.  */
let cities=["Portomaggiore", "Runco", "Bologna"] 
let newCities=[ ...cities];
console.log("//2 ", newCities);

/* #### 3. Find the Largest... 
Create a function to find the largest number in an array. */

/* function largestNumber(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > result[i]) {         
        result[i] += arr[i];
  }
 }
 return result;
}
 console.log(largestNumber[4, 5, 1, 3]); */