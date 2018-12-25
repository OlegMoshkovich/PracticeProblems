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


// function reverse(str){
//   debugger;
//   return str.split('').reduce((rev,char) => char + rev,'')
// }


// function reverse(str){
//   let rev = ''
//   return str.split('').reduce((rev,char)=>{
//     return char + rev
//   },'')
// }

function reverse(array){
  let total=0;
  return array.reduce((total, amount, i)=>{
    if (i%2){
    return total + amount + 10
  }else{
    return total
  }
  })
}

console.log(reverse([2,3,4,6,7]));
// console.log(reverse("what is going on "));

module.exports = reverse;
