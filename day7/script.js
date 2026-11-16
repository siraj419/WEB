// Async Programming Vs Synchronous Programming

// Synchromous Programming:
//   - Programs execute sequentially, one operation at a time.
//   - Each operation must complete before the next one starts.

// Statement 1 - API 1 - 2s
// Statement 2 - API 2 - 1s
// Statement 3 - Api 3 - 3s
                //    = 5s

// Asynchronous Programming:
//  - Programs can execute multiple operations concurrently.
//  - Operations can be initiated and then continue executing while waiting for other operations to complete.

// Start Statement 1, Start Statement 2, Start Statement 3
// Statement 2 completed, Statement 1 completed, Statement 3 completed


// Call API 1, Call API 2, Call API 3
// API 2 completed, API 1 completed, API 3 completed
// = 3s

// Callbacks
//   - A function that is passed as an argument to another function and is executed after the completion of that function.

// Promises:
//  - Used to handle asynchronous operations in JavaScript.

// Sates:
//   - Pending: Initial state, neither fulfilled nor rejected.
//   - Fulfilled: The operation completed successfully. then
//   - Rejected: The operation failed. catch

// const promise = new Promise((resolve, reject) => {
//     const success = false; // Simulating success or failures
//     setTimeout(() => {
//         if (success) {
//             resolve("Promise resolved successfully");
//         } else {
//             reject("Promise rejected");
//         }
//     }, 2000);
// });

// promise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise execution completed");
// });

const p = fetch("https://dummyjson.com/posts");

p.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Fetch operation completed");
});


// Async/Await:
async function fetchPosts() {
    try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Fetch operation completed");
    }
    return "Fetch operation completed successfully";
}

// Async functions always return a promise.
fetchPosts();

