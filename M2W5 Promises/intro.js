// Pending
// Completed
// Rejected

const functions = require("./helper/promise-generator");

const returnPromise = functions.returnPromise;

const promise = returnPromise("Return me this message", 1000);
// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 1001);

// When the promise is completed
promise.then((data) => {
  console.log(data);  
  return returnPromise("Second message", 100)
}).then((data) => {
  console.log(data);
})