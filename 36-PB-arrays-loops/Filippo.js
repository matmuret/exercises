"use strict";

//1
const sumOfNumbers = (nums) => {
    let sum = 0;
    let mult = 1;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        mult = mult * nums[i];
    }
    console.log("the sum is", sum, "while the product is ", mult);

}
sumOfNumbers([4, 5, 6]);

//2
function HelloFrien(friends) {

    let resoult = [" "];
    for (let i = 0; i < friends.length; i++) {
        /* resoult.push(friends[i]); */
        console.log("Hello " + friends[i])

    }
    return resoult.join('');
}

/* function HelloFrien(friends) {
    let splitFriends = friends.split(" ")
    splitFriends.forEach(function (entry) {
            console.log("Hello ", entry)
        }
    }
} */
console.log("//3 ", HelloFrien(["Paola", "Carlo", "Antonio"]));

//3
function cityNames(cities) {
    let addCity = "";
    for (let i = 0; i < cities.length; i++) {
        addCity += cities[i] + ",";
        /* return addCity */
    }
    return addCity
}
console.log("//3 ", cityNames(["Berlin", "Paris", "Prague", "Rome"]));

//4
function oddsAndEvens(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            nums[i]--;
        } else {
            nums[i]++;
        }
    }
    return nums;
}
console.log("//4 ", oddsAndEvens([3, 5, 2, 4]));
console.log("//4 ", oddsAndEvens([6, 9, 10, 20]));

//5
/* function capitalize(str) {
    let resoult=str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        resoult.push(str[i]).toUppercase();
    }
    return resoult;
}  */


function capitalize(peopleArray) {
    return peopleArray.toString().toLowerCase().split('').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ').split();
}
console.log("//4 ", capitalize(["matt", "sara", "lara"]));