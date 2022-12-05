//var,let and const

const fs = require('fs');

console.log("hi this start");

// var can redeclared and reintialised;
//hoisting var
//javascript is synchronous and single threaded;

//it is declaring

// moving the variables to the top of thier scopes;
// console.log(a);

//var can be redecalred and reintialised;
// var a = 10;
// var a = 12;


//it can only be reintialised;
// let a = 10;
//  a = 12;
// console.log(a);

// // const cannot be redecalred and reintialised.

// const b = 10;

// //different types of functions
// // regular or named functions
// //anonyms functions
// //arrow functions
// //IIFE => immediately invoked functional expression

// // in javascript, functions are knnown as first-class citizen;
// // functions canbe stored in variables,they can be passed as an argument to other functions

// // function fun() {
// //     return 3;
// // }

// let fun = function (a,b) {
//     return a + b;
// }
// console.log(fun(2, 3));


// // arrow functions;
// let fun2 = (a,b) => {
//     return a-b
// }
// console.log(fun2(5,3));


// (() => {
//     console.log("hi this webdev");
// }

// )()

//callbacks fucntions and promises

// fs.readFile('file.txt',"utf-8", (err, data) => {
//     console.log(data);
// })

// console.log("hi this is end");

