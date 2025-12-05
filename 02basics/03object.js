

const sym = Symbol("key");

const user = {
    name : "Akshat",
    Age : 22,
    Gender : "Male",
    Gmail : "akshataditya@gmail.com",
    Location : "Boikaro",
    [sym] : "key1",
}
// console.log(user.name)
// console.log(user["name"])
// console.log(user.sym)
// console.log(typeof user.sym);

console.log(user[sym]);

user.Gmail ="akshataditya11@gmail.com"
Object.freeze(user.Gmail)
user.Gmail ="akshataditya22@gmail.com"


console.log(user)


function greet(user) {
    console.log("Hello, " +user.name+ " your age is "+user.Age);
}

greet(user)