const functions = require("./helper/promise-generator");

const returnPromise = functions.returnPromise;
const rejectedPromise = functions.returnRejectedPromise;

returnPromise("Hello").then((data) => {
  console.log(data);
  return "Hello"
}).then((data) => {
  console.log(data);
  return "Hello"
}).then((data) => {
  console.log(data);
  return "Hello"
}).then((data) => {
  console.log(data);
  return "Hello"
}).then((data) => {
  console.log(data);
  return "Hello"
}).catch((err) => {
  console.log(err);
})
