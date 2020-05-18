let x = 20;
let y = 30;
console.log(x === y);
console.log(x !== y);
console.log(x > y);
console.log(x < y);
console.log(y > x);
let z = 5;

console.log((z * x) > (z + y));
console.log((x - z) > (y / z));
console.log(x === y === z);
console.log((x % z) === (y % z));
if ((x + z) < (y - z)) {
    console.log((x + z) > (y - z));
}


