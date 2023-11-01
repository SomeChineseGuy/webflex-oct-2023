// create a function that when given a str will return an obj that counts all the letters
// ie "Hello World"
// {h:1, e:1 , l:3, o:2, w:1, r:1, d:1}
// Talk to your interviewer 

// create empty obj

// loop through str
// using if statement else 
// check if letter is in obj, if letter is NOT in then set it to one
// if its in + 1

const letterCount = (str) => {
  const obj = {};
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== " ") {
      const letter = str[i].toLowerCase()

      obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }
  }
  return obj
}

console.log(letterCount("Hello World"));