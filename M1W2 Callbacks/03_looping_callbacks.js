const names = ['carol', 'steve', 'sarah']

const loopThroughArray = function(arr, callback) {
  for(const item of arr) {
    callback(item)
  }
}

loopThroughArray(names, function(item) {
  console.log(`hello ${item}`)
})

loopThroughArray(names, function(item) {
  console.log(`goodbye ${item}`)
})

loopThroughArray(names, function(item) {
  console.log(`hello ${item}, how are you?`)
})

// const loopThroughArray2 = function(arr) {
//   for(const item of arr) {
//     console.log(`goodbye ${item}`)
//   }
// }

// const loopThroughArray3 = function(arr) {
//   for(const item of arr) {
//     console.log(`hello ${item}, how are you?`)
//   }
// }
