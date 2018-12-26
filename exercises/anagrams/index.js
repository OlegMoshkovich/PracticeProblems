// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//turn the string into the array and then compare the arrays to see if all of the characters match
//word.replace(/[^\w]/g, '').toLowerCase()  --- this statement removes the puncutuation and spaced from the string

// function anagrams(stringA, stringB) {
// const firstString = convert(stringA)
// const secondString = convert(stringB)
//
// if(stringA.length != stringB.length){
//   return false
// }
//
// for (let char in firstString){
//   if (firstString[char] !== secondString[char]){
//     return false
//   }
//   console.log('true')
//   return true
//
// }

function convert(str){
  const chars = {}
  for (let char of str){
    chars[char] = chars[char]+1 || 1
  }
  return chars
}
function anagrams(stringA, stringB) {
  const stringFirst = stringA.replace(/[^\w]/g,"").toLowerCase();// using regular expressions
  const stringSecond = stringB.replace(/[^\w]/g,"").toLowerCase();
  charsA = convert(stringFirst)
  charsB = convert(stringSecond)
  if (stringFirst.length === stringSecond.length){
    for (let elem in charsA){
      if(charsA[elem] !== charsB[elem]){
        return console.log(false);
      }
    }
  }else{
    return console.log(false);
  }

  return console.log(true);
}

anagrams('hellos', 'elloh')

module.exports = anagrams;
