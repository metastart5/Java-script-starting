let score = 33

console.log(typeof score);

let valueinnumber = Number(score); // conversion
console.log(typeof valueinnumber);
console.log(valueinnumber);

//"33" = 33
//33abd = NaN
//true = 1 , false =0

let isLoggedIn = 1;
let booleanvalue = Boolean(isLoggedIn);
console.log(booleanvalue);
console.log(typeof booleanvalue);

// 1 = true
// 0 = false
// "" = false
// "akshat" = true
// null = false
// undefined = false

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
