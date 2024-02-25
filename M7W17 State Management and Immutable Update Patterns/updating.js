const obj = {
  username: "Joe",
  id: 10,
  moreInfo: {
    favFood: "Chicken",
    numArr: [1,2,3,4,5]
  }
}

const objCopy = {
  ...obj,
  moreInfo: {
    ...obj.moreInfo,
    numArr: [...obj.moreInfo.numArr]
  }
}

objCopy.moreInfo.favFood = "Beef"


// Shallow/Deep
console.log(obj);
console.log(objCopy);