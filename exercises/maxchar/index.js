// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
let maxValue = 0;
const chars = {};
  for(char of str){
    chars[char] = chars[char]+1 || 1
  }

  Object.entries(chars).forEach(([key, value]) => {

   if(maxValue<value){
     maxValue = value
   }
   console.log("maxvalue",maxValue)
   console.log(`key= ${key} value = ${value}`)
})

const character = Object.keys(chars).find(key => chars[key] === maxValue)
console.log('the character is -- ' + character)

return character
}

maxChar("idon'tknowwhatyouaretalking about")

module.exports = maxChar;
