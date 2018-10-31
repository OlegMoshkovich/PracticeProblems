// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
let newNum = 0;

if(Math.sign(n) === -1){
newNum = n.toString().split('').reverse().filter(char =>char != 0 && char != '-').join('') *(-1)
}else{
newNum = n.toString().split('').reverse().filter(char =>char != 0 && char != '-').join('')}
console.log('new number '+ newNum)
return newNum
}

reverseInt(874568374560000);

module.exports = reverseInt;
