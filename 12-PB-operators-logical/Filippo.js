//0
let a = true;
let b = false;

//1
console.log("1a", a && b);
console.log("1b", a || b);
console.log("1c", !(a && b));

//2
let x = 2;
let y = 3;
let z = 5;

//3
console.log("3a", x > z && x > y);
console.log("3b", x != y);
console.log("3c", z < y || z > x);
console.log("3d", x === z || x != y);
console.log("3e", x >= 10 && y <= 10);
console.log("3f", x * y < 100 || x * y > 100);