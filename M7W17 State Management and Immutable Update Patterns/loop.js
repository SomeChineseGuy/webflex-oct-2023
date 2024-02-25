const arr = [1,2,3,4,5]

const num = arr.reduce((startingNum, item) => {
  console.log(startingNum, item);
  startingNum += item

  return startingNum
}, 0)

console.log(num);

const data = [{
  username: 'Alvin',
  id: 10
},
{
  username: 'Sarah',
  id: 12
},
{
  username: 'Joe',
  id: 13
}]

// arr.reduce

let startingNum = 0

for(let item of arr) {
  startingNum += item 
}

// console.log(startingNum);


// console.log(filteredArr);


// const mappedArr = []
// for(let item of arr) {
//   item += 100
//   mappedArr.push(item)
// }

// for(let item in arr) {
  
// }

// for(let i = 0; i < 100; i++) {

// }

// const newArr = arr.map((item) => {
//   return item += 100
// })

// const filteredArr = arr.filter((item) => {
//   if(item % 2 === 0) {
//     return item
//   }
// })

// arr.forEach((item) => {
//   console.log(item);
// })
