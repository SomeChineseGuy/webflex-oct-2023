// sayHello('Steve')

// // function declaration
// function sayHello(name) {
//   console.log("Hello " + name)
// }


// sayHello2("Sarah")
// function expression
const sayHello2 = function(name) {
  console.log(`Hello ${name}`);
  return `Hello ${name}`
}

sayHello2("Sarah")

const a = sayHello2('Ryan')

console.log(a)

const b = sayHello2;

console.log(b('Joe'))

sayHello2.username = "Alvin";

console.log(sayHello2.username);

console.log(sayHello2.toString())

// let obj = {
//   username: "Alvin",
//   num: 10
// }

// console.log(obj.username);

// let obj2 = {
//   ...obj
// };

// console.log(obj2.username);
// obj2.username = "Steve"
// console.log(obj2.username);
// console.log(obj.username);