// const username = "Alvin"

// let username2 = "Alvin"

// console.log(username)
// console.log(username2)

// console.log(username)

// const namesArr = ["Joe", "Katie", "Sarah"];

// namesArr.push("Ryan")

// console.log(namesArr)

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// // console.log(addTwoNumbers(10, 10) + 100)

// // const four = 4;

// // console.log(four + 6)

// // console.log(username + " How are you?")


// const something = process


// const newArr = process.argv.slice(2)
// console.log(newArr)

// console.log(addTwoNumbers(Number(newArr[0]), Number(newArr[1])))

// This function will sum up all numbers in an arr but not include neg numbers and only supports whole numbers also doesn't accpet one because we want something something

const arr = [10, -9, 993.3, 20, 24, 5.5];

function SumOfArr (arrNum) {
  // 3 styles of for loops
  // C style loop for(let i = 0; i > arrNum.length; i++)
  // for in for(let num in arrNum)
  // for of for(let num of arrNum)
  // for(let num in arrNum) {
  //   console.log(arrNum[num])
  // }
  let startingNum = 0
  for(let num of arrNum) { 
    if(num > 0) {
      const wholeNum = Math.floor(num)
      startingNum += wholeNum
    }
  }
  return startingNum;
}

console.log(SumOfArr(arr));
