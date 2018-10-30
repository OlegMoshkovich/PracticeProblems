// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {

  const rev = str.split('').reverse().join('')
  console.log('the new string is - ',rev)

  // if (rev == str){
  //   console.log('palindrome')
  //   return true
  // }else{
  //   console.log('not a palindrome')
  //   return false
  // }

return rev===str;
}

palindrome("oleg")

module.exports = palindrome;
