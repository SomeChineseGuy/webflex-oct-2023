// Client request data ----> Server -------> database -----> server ------> Sends data to client
// Data centers (location) if you search for something NOT in the data center
// Data 1 = Vancouver
// Data 2 = Calgary
// Data 3 = Toronto

// Request in Edmonton
// Cool cat pictures -> Data 1 
// Cool cat pictures -> Data 2 
// Cool cat pictures -> Data 3 

const functions = require('./helper/promise-generator')

const returnPromise = functions.returnPromise;
const rejectedPromise = functions.returnRejectedPromise;

const promiseOne = returnPromise('one', 200) // Vancouver
const promisetwo = returnPromise('two', 200) // Calgary
const promisethree = returnPromise('three', 1200) // Toronto

const promiseArr = [ promisetwo, promiseOne, promisethree, rejectedPromise("Failed", 100)]

// Testing, speed, data value
Promise.race(promiseArr).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log('Promise Race');
  console.log(err);
})