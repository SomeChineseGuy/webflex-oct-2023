const arr3 = [
  {
    username: "sarah",
    num: 10
  },
  {
    username: "joe",
    num: 20
  },
  {
    username: "linda",
    num: 30
  }
]

const foundUser = arr3.find((user) => {
  if(user.username === 'linda') {
    return user
  } 
})

console.log(foundUser);

const arrNum = [1,2,3,4,5]
arrNum.includes(1)