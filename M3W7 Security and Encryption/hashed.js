const bcrypt = require('bcryptjs');
const plainTextPassword = "YoloSwag420";

const arr = [];


for(let i = 0; i < 1000; i ++) {
  const salt = bcrypt.genSaltSync(13);  
  const hashed = bcrypt.hashSync(plainTextPassword, salt);
  console.log(hashed);
  arr.push(hashed)
}


console.log(bcrypt.compareSync(plainTextPassword, arr[42]));
console.log(bcrypt.compareSync(plainTextPassword, arr[0]));
console.log(bcrypt.compareSync(plainTextPassword, arr[1]));
console.log(bcrypt.compareSync(plainTextPassword, arr[41]));
console.log(bcrypt.compareSync("SomeotherPassword", arr[89]));
console.log(bcrypt.compareSync("a", arr[23]));
