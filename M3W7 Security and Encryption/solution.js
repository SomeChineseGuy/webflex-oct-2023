const singleLine = "821pgvbsbq9";
"8219"

/*
  Some variables to track
  A loop
  Take a single string, remove all the letters
  with the remain numbers, we will take the first item and the last item and combine them into one number ie(10232) === 12
  then we have a starting number and we add that starting number to this final number 
  0 += 12
*/ 

console.log(singleLine.match(/\d+/));