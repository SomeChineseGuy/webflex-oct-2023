// ES6 2016 BIIIGGGG YEAR for JS
// don't write the function keyword
// super handy
// if your function is one line you don't need curly braces
// if no curly then the function is implicitly return
// one downside to this, and that is the use of "this"

const sum = function(num1, num2) {
  console.log(this);
  return num1 + num2
}

const sum2 = (num1, num2) => {
  console.log(this);
  return num1 + num2
}

console.log(sum(10, 10));
console.log(sum2(10, 10));