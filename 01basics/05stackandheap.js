

// stack example=== in stack there is no change of data in original place but there is change of data in a copy
//heat uses primitive data types like numbers,strings,boolens

let myytname = "hitestone";

let anothereytname = myytname;

anothereytname = "akshat";

console.log(myytname);
console.log(anothereytname);


// heap example=== in heap there is change of data in original place
// heap uses non primitive data types like arrays and objects

let user1 = {
    name : "akshat",
    age : 22,
}
let user2 = user1;

user2.name = "rahul";

console.log(user1.name);
console.log(user2.name);