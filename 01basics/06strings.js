const name = "akshat";
const repocount = 45;

const name2 = new String('hiteshhc');

console.log(`my name is akshat ${name} and my repo count is ${repocount}`);   // used this comma ``


console.log('my name is ${name} and my repocount is ${repocount}');   // used this comma ''

// console.log(name2);
// console.log( name2[0]);


// console.log(name2.length);

// console.log(name2.toUpperCase());
// console.log(name2.charAt(3));
// console.log(name2.indexOf('m'));
 
const newname3 = name2.substring(0, 4); // substring contains start and end index like 0 is ofr starting and 4 is for end index and 4th index is not included
console.log(newname3);

const newname4 = name2.slice(-7, 4); // slice contains start and end index like 0 is ofr starting and 4 is for end index and 4th index is not included  
// in slice we can also use negative index to start from backward
console.log(newname4);

const x = "   akshat    ";
console.log(x);
console.log(x.trim());  // it removes extra spaces from starting and ending can use trimstart() and trimEnd() also

console.log(x.replace('akshat', 'hitesh')); // it replaces akshat with hitesh

const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
console.log(url.replace('https', 'http')); // it replaces https with http

const y = "akshat-hitesh-chauhan";
console.log(y.split('-')); // it splits the string at - and returns an array
// split() comtaines the separator at which we want to split the string and limit(optional) which is the maximum number of splits to be done

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2));     // "Hello World"
console.log("Hi".concat(" ", "there"));  // "Hi there"
// Better to use template literals: `${str1} ${str2}`
console.log(`${str1} ${str2}`);
console.log(str1 + str2);
