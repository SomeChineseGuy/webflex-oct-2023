const axios = require('axios');

const something = axios.get('https://catfact.ninja/fact')

console.log('Top file');
something.then((data) => {
  console.log(data.data.fact);
})
console.log('bottom file');

// axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((data) => {
//   console.log(data.data);
// })
