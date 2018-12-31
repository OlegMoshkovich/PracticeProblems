// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {\
let string = '';
let midpoint = Math.floor((2*n-1)/2);

for(let row=0; row<n; row++){
  let string = '';
  for (let column = 0; column<2*n-1; column++){
      if (midpoint-row <= column && midpoint+row >= column){
        string += '#'
      }else{
        string += '_'
      }
    }
    console.log(string)
  }
}

pyramid(20)


module.exports = pyramid;

// My solution
// function pyramid(n) {
//
// let string = '';
// let row = 0;
// let cols = (n-1)*2+1;
// let m = 0;
// let midpoint = Math.floor(cols/2);
//
// for(let i=1;i<n+1;i++){
//   let string = '';
//
//
//   for(let j=0;j<cols;j++){
//     if(j < midpoint-m ) {
//         string += "_";
//       }else if(j === midpoint){
//         string += '#';
//     }else if(j > midpoint + m){
//       string += '_';
//     }else{
//       string += "#";
//     }
//   }
//   m++;
//
//   console.log(string)
//   }
// }
