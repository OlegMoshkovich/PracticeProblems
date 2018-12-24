// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// the use of every array helper - every operates on every member of the array - in the arrow function
// it accepts two arguments one is the current value and the other is the index


// function palindrome(str) {
//   const rev = str.split('').reverse().join('')
//   console.log('the new string is - ',rev)
// return rev===str;
// }

function palindrome(str){
  const revStr = str.split('').reduce((rev,char)=>char+rev,'');
  if (revStr == str){
    return true
  }else{
    return false
  }
}

console.log(palindrome("abba"))

module.exports = palindrome;
