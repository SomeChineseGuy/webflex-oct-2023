const functions = require('./helper/promise-generator')

const returnPromise = functions.returnPromise;

const promiseOne = returnPromise('one', 1000)
const promisetwo = returnPromise('two', 2000)
const promisethree = returnPromise('three', 1200)
const promisefour = returnPromise('four', 3000)

const promiseArr = [promiseOne, promisetwo, promisethree, promisefour];

Promise.all(promiseArr)
  .then((data) => {
    console.log(data);
  })