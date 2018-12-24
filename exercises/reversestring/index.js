// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   const arr = []
//   for(i=0;i<str.length;i++){
//     arr.push(str.charAt(i))
//   }
//   const newArr = arr.reverse()
//   const newStr = newArr.join('')
//   return newStr
// }

// function reverse(str){
//   debugger;
//   return str.split('').reverse().join('');
// }
//
// reverse('hello');


function reverse(str){
  debugger;
  return str.split('').reduce((rev,char) => char + rev,'')
}


console.log(reverse("what is going on "));

module.exports = reverse;
