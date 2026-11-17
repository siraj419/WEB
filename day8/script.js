// Destrcuturing assignment


// const person = {
//     name: 'John Doe',
//     age: 30,
// };

// // Default way of accessing properties
// // const name = person.name;
// // const age = person.age;


// // Object Destructuring
// const { name, age } = person;

// const arr = [1, 2, 3];

// // const fisrt = arr[0];
// // const second = arr[1];
// // const third = arr[2];

// // Array Destructuring
// const [a, b, c] = arr;


// // Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combine = arr1.concat(arr2);

// // Spread Operator
// const combineSpread = [...arr1, ...arr2];
// const combine2 = [...arr2, ...arr1];
// const combine3 = [...arr1, 7, 8, 9, ...arr2];

// const person = {
//     name: 'John Doe',
//     age: 30,
// };

// const person2 = {
//     ...person,
//     email: 'john.doe@example.com',
// };

// Rest Operator
// function sum(...numbers) {
//     console.log(numbers);
//     for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i]);
//     }
// }

// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// function sum2(a=0, b=0, ...numbers) {
//     console.log(a, b);
//     console.log(numbers);
// }


// Optional Chaining
// const user1 = {
//   name: 'Alice',
// //   address: { city: 'New York', country: 'USA' }
// };

// console.log(user1?.address?.city); 

// // Nullish Coalescing Operator
// const user2 = {
//     name: 'Bob',
//     age: null,
// };

// const userAge = user2.age ?? 18; // If age is null or undefined, use 18
// console.log(userAge); // Output: 18


// 

// const showDefault = 18;
// const user3 = {
//     name: 'Charlie',
//     age: 60,
// };

// Falsy
// 0
// ""
// false
// null
// undefined
// NaN

// const userAge2 = user3.age || 18; // If age is  undefined, use 18
// console.log(userAge2); // Output: 18

// const username = "Siraj";
// const user = username || "Guest"; // If username is falsy, use "Guest"
// console.log(user); // Output: "Guest"