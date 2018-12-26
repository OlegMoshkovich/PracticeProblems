// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
// let maxValue = 0;
// let maxCharacter;
//
// const chars = {};
//
// for(char of str){
//   if(chars[char]){
//   chars[char] = chars[char]+1
//   }else{
//   chars[char] = 1
// }}
//
// for (char in chars){
//   if(chars[char]>maxValue){
//     maxValue = chars[char];
//     maxCharacter = char;
//   }
// }
//   console.log('maxcharacer',maxCharacter)
//   console.log('maxValue',maxValue )
// return maxCharacter
// }

// function maxChar(str) {
// let maxValue = 0;
// const chars = {};
//   for(char of str){
//     chars[char] = chars[char]+1 || 1
//   }
//
//   Object.entries(chars).forEach(([key, value]) => {
//
//    if(maxValue<value){
//      maxValue = value
//    }
//    console.log("maxvalue",maxValue)
//    console.log(`key= ${key} value = ${value}`)
// })
//
// const character = Object.keys(chars).find(key => chars[key] === maxValue)
// console.log('the character is -- ' + character)
//
// return character
// }


// function maxChar(str) {
// const chars = {};
// let character;
// let number = 0;
//   for(let char of str){
//     chars[char] = chars[char]+1 || 1
//   }
//   Object.keys(chars).forEach((key) => {
//     if(number<chars[key]){
//       number = chars[key];
//       character = key;
//     }
//   })
// return character
// }

function maxChar(str){
  chars = {};
  for(char of str){
    chars[char] = chars[char]+1 || 1 ;
  }
  let maxChar;
  let numberChars=0;

  for(char in chars){
    if(numberChars < chars[char]){
      numberChars = chars[char];
      maxChar = char
    }
  }
  return(console.log(maxChar));
}



maxChar("perfect ")

module.exports = maxChar;
