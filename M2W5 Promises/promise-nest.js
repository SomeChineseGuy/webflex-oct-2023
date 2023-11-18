const functions = require('./helper/promise-generator')

const returnPromise = functions.returnPromise;

const first = returnPromise("Hello")

first.then((data) => {
  console.log(data);
  returnPromise("Second")
    .then((data) => {
      console.log(data);
      returnPromise("Three")
        .then((data) => {
          console.log(data);
        })
    })
}).catch(err => {
  console.log(err);
})

first.then((data) => {
  console.log(data);
  return returnPromise("Second")
}).then((data) => {
  console.log(data);
  return returnPromise("Three") 
}).then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
})

