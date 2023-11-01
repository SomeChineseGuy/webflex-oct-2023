// // arr helper methods

// const arr = [1,2,3,4]
// arr.push(5)
// console.log(arr);
// arr.push(6)

// console.log(arr);

// // map array helper method

// this function will take an array and return a NEW array that is going to run each item
// with the callback
const ourMap = (arr, callback) => {
  // console.log(arr);
  const newArr = []
  for(const item of arr) {
    const returnVal = callback(item)
    newArr.push(returnVal)
    // newArr.push(callback(item))
  }

  return newArr;
}

const arrNum = [1, 2, 3, 4]

const newArr = ourMap(arrNum, (num) => {
  return num * 100
})

console.log(newArr);

const nameArr = ['Steve', 'Sarah', "Joe"]

const helloArr = ourMap(nameArr, (username) => {
  return `Hello ${username}`
})

const goodbyeArr = ourMap(nameArr, (username) => `Goodbye ${username}`)

console.log(helloArr);
console.log(goodbyeArr);

// for(let i = 0; i < 1000; i++) {
//   // const date = new Date();
//   console.log(new Date());
// }