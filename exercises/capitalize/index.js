// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// slightly better solution with out the use of object maps
function capitalize(str) {
  const newStr  = str.split(' ');
  let index = 0;
  for(word of newStr){
    newStr[index] =  word[0].toUpperCase() + word.slice(1)
    index ++;
  }
   const capitalized = newStr.join(' ')
  console.log(capitalized)
  return capitalized

}

// Self generated convoluted solution using object maps
// function capitalize(str) {
//   let newObj = {}
//   let newString = []
//   let capitalized = []
//   let index = 0
//   newString = str.split(' ')
//   for (word of newString){
//     newObj[index] = word;
//     index++;
//   }
//   for (word in newObj){
//     newObj[word] = newObj[word].charAt(0).toUpperCase() + newObj[word].slice(1)
//     capitalized.push(newObj[word])
//   }
//   const newStringJoined = capitalized.join(' ')
//   console.log(newStringJoined)
//   return newStringJoined
// }

capitalize("I am here again");

module.exports = capitalize;
