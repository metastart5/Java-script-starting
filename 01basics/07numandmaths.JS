const score = 400;
//console.log(score);

const bonus = new Number(100);
// console.log(bonus);

// console.log(bonus.toString(2).length);   // toString is in the range 2 to 36
// console.log(bonus.toFixed(2));
// console.log(bonus.toString(2));

const num = 123.789;


//console.log(num.toPrecision(3)); // returns string value rounded to specified length

const hun = 1000000;
//console.log(hun.toLocaleString("en-IN")); // it formats the number according to the locale specified


// +++++++++++++++++++++++++++++++++Maths Object+++++++++++++++++++++++++++++++


// console.log(Math.PI);
// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));  // it always rounds up
// console.log(Math.floor(4.7)); // it always rounds down
// console.log(Math.sqrt(64));
// console.log(Math.pow(2, 3));  // 2^3
// console.log(Math.min(3, 5, 1, 9, -2));
// console.log(Math.max(3, 5, 1, 9, -2));


console.log(Math.random());  // returns random number between 0 and 1
console.log(Math.random() * 10); // returns random number between 0 and 9
console.log(Math.floor(Math.random() * 10));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1))+ min); // returns random number between min and max

