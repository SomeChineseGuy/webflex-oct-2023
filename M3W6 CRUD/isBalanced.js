/*
 "{{{}}}" // { === 3, } === 3
 "}}}{{{" // { === 3, } === 3 NOT
 "{}}}" // { === 1, } === 3 NOT
 "{{{}}" // { === 3, } === 2 NOT 
*/


const isBalanced = (str) => {
  // outliers
  // } === return false
  // if lenght is odd return false
  // convert "" into array
  // count the characters
  // const num = 0;
  // { === + 1
  // } === - 1
  // loop over the array, do the plus one or -1
  // at the end if the number is NOT zero, then return false, else return true
  // if in the loop the number is ever - 1 just return false
}

console.log(isBalanced("{{{}}}"));
console.log(isBalanced("}}}{{{"));
console.log(isBalanced("{{{}}"));
console.log(isBalanced("{{}}}"));
