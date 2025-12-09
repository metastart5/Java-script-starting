const user ={

    username : "hitesh",

    price : 999,



    welcomename : function (anyObject){

    console.log("Your name is " +user.username+ "  hello");

    }
}


// function chain(){
//     let username ="ajay";
//     console.log(this);
// }

// chain();

// const chain = function () => {
//     let username ="ajay";
//     console.log(this.username);
// }

// arrow function 

const chain =  () => {
    let username ="ajay";
    console.log(this.username);
}

// const add = (num1,num2) => {
//     return num1+num2;
// }

// const add = (num1,num2) =>  num1+num2;

// const add = (num1,num2) =>  (num1+num2);

const add = (num1,num2) =>   ({username: "akshat"})


console.log(add(7,8));


const arr = [1,3,4,5,6,7,8]
