

// // Basics:
// //   - Variables
// //   - Data Types
// //   - Operators
// //   - Loops
// //   - Conditionals
// //   - Functions
// //   - Arrays

// // - Objects

// // const obj = {
// //   name: "John",
// //   age: 30,
// // };
// // console.log(JSON.stringify(obj)); // converts object to JSON string

// // // converts JSON string back to object
// // console.log(obj.age);
// // console.log(obj['name']);

// // obj.age = 31;
// // obj['name'] = "Jane";
// // obj.name = "Jane";

// // // add new key-value pair to object
// // obj.city = "New York";
// // obj['country'] = "USA";

// // const Person = {
// //     name: "Asim",
// //     age: 20,
// //     city: "Mirpur",
// //     country: "PK",

// //     displayInfo: function() {
// //         console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Country: ${this.country}`);
// //     }
// // };

// // console.log(Person.name);
// // Person.displayInfo();

// // console.log(Object.keys(Person));
// // console.log(Object.values(Person));
// // console.log(Object.entries(Person));

// // scrollBy
// // {
// //     name: "John",
// //     age: 30,
// //     city: "New York",
// //     country: "USA"
// // }

// console.log(obj);



// // {
// //   "name": "John",
// //   "age": 30
// // }

// // JSON - JavaScript Object Notation

// // {
// //     "name": "John",
// //     "age": 30
// // }

// // // Types of funcions:
// //      - Normal function
// //      - Anonymous function
// //      - Arrow function

// const ananymousFunc = function() {
//     console.log("Anonymous function executed");
// }

// const arrowFunc = () => {
//     console.log("Arrow function executed");
// }

// // - IIFE - Immediately Invoked Function Expression
// (function() {
//     console.log("IIFE function executed");
// })();

// // SetTimeout and SetInterval


// setTimeout(() => {
//     console.log("This will be executed after 2 seconds");
// }, 2000);

// setInterval(() => {
//     console.log("This will be executed every 3 seconds");
// }, 3000);

// Callback functions - functions that are passed as arguments to other functions and are executed after some operation is completed.

// Let, const and var
// var - old
// let, const - new

// var can be redeclared and updated
var x = 10;
var x = 10;

let y = 20;
// let y = 20; // Error: Identifier 'y' has already been declared

// Hoisting - is the process of moving variable and function declarations to the top of their containing scope during the compilation phase. This means that variables and functions can be used before they are declared.

var a;
var b;

console.log(a);

var a = 10;
var b = 819;

// let c;

console.log(c);
let c = 30; // Error: Cannot access 'c' before initialization

// const
// let - may need to be updated

// Assignment:
// DOM
// DOM TREE
// How brewser renders HTML ??