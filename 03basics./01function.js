// function sum(x,y){
//     console.log (x+y);
// }

function sum(x,y){
    let result = x + y;
    return result;
}

console.log(sum(3,5));

// const ror =sum(10,20);
// console.log(ror);

// function sum(a,b){
//     return a+b;
// }  


// console.log(sum(3,5)) 


// function login(username){
//     return "welcome " + username;
// }

// console.log(login("akshat"));

// function login2(username){
//     return `welcome ${username}`;
// }

// console.log(login2("akshat"));


function cart(...num1){
    console.log(num1)
}

cart(20,67,8,4)

const user ={
    name : "akshat",
    gender : "male",
    mail : "akshat@mail.com"
}

function job(anyobject){
    console.log("hus name is "+anyobject.name + " his gender is " +anyobject.gender)
}

job(user)

let array1 = [12,334,5564,6664]

function arraysecond(getarray){
    console.log(getarray[2])
}

arraysecond(array1)