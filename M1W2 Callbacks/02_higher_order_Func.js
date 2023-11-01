// const username = "Joe";

// console.log(username + ", how are you?");

// const num = 10;

// console.log(num + 100);



// const hundred = minus(200, sum(50, 50))

// const minus2 = function(num) {
//   // 2 problems, the first is the function is ALWAYS sum
//   // the second is the params are ALWAYS 100, 100
//   return sum(100, 100) - num
// }

// const ten = minus2(190)

// const minus3 = function(num, callback) {
//   // num === 10
//   // callback === minus
//   return callback(100, 100) - num
// }

// // 100(100, 100)

// const sum = function(num1, num2) {
//   return num1 + num2;
// }

// const minus = function(num1, num2) {
//   return num1 - num2;
// }

// const multi = function(num1, num2) {
//   return num1 * num2;
// }

// const something = minus3(10, minus)
// console.log(something);

// const something2 = minus3(10, sum)
// console.log(something2)

// const something3 = minus3(10, multi(10, 10))
// console.log(100(100, 100))

// callback => parms that is a function to be called inside another function
// higher order function => a function that calls a callback inside of it

const minus4 = function(num1, callback) {
  // (100 * 10 + 10) - 100
  return callback() - num1
}

const sayHello = function (name) {
  return `hello ${name}`
}

const something = minus4(10, function() {
  return 10 + 10
})

console.log(something)

// (100 * 10 + 10) - 100
const newNum = minus4(100, function() {
  return 100 * 10 + 10
})