/* * Given the 2D Array below, **loop** through the arrays to print the values. */

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
const newBoard = board.map(function(value){
    return value
})
console.log("1 ",newBoard)


function arrayValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
arrayValues(board);
/* #### 2. 
* 2.1 Create a doggo object. Add name and breed as properties of the object.
* 2.2 Create an array within the doggo object named favorite foods and add 
the doggo's favorite foods to the array.
* 2.3 Access the second element of the doggo's favorite foods. 
* 2.4 Add a method that loops through and print all the doggo's favorite food. */

const doggo = {
    one: "shoes",
    two: "sleepers",
    three: "newspaper",
    favoriteFoods:[
        "left over food",
        "animal feed",
        "trash"
    ],
  
}
console.log("2 ", doggo.favoriteFoods[2])
const printAll = doggo.favoriteFoods.map(function(value){
    return value
})
console.log("2.5 ",printAll)

const doggo2 = {
    name: 'Doggo',
    breed: '',
    favoriteFoods: ['burger', 'pizza', 'pasta'],
}
doggo2.foods = function () {
    for (const item of this.favoriteFoods) {
        console.log('2.4', item);
    }
}
console.log('2.3', doggo2.favoriteFoods[1]);
doggo2.foods();

/* #### 3. 
* 3.1 Create an object called recipes.
* 3.2 Inside this object, you should create another object for ingredients 
and store ingredients as properties butter, sugar, flour etc. Each property 
should have a string as its value. 
* 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
* 3.4 Change the ingredient `sugar` to `brown sugar`. 
* 3.5 Write a method in the recipes object that prints the value of each 
ingredient in the ingredients object.  */

const receipes={
    ingredients:{
       one: "butter", 
       two: "sugar", 
       three: "flour", 
    },
    print: function(){
        return receipes.ingredients
    } 
}
receipes.ingredients["four"] = "ginger";//used when the name of the property is dynamically determined
receipes.ingredients.two="brown sugar" // is used when you know the name of the property

console.log("3 ",receipes.print())