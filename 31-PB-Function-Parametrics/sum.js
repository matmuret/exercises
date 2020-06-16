// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {
    let add = 0
    for (let i = 0; i < args.length; i++) {
        add += args[i]
    }
    return add
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70