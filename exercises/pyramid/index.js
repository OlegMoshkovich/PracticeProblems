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

function pyramid(n) {

let string = '';
let row = 0;
let cols = (n-1)*2+1;
let m = 0;

for(let i=1;i<n+1;i++){
  let string = '';


  for(let j=0;j<cols;j++){
    if(j < Math.floor(cols/2)-m ) {
        string += "_";
      }else if(j < Math.floor(cols/2)+1){
        string += '#';
    }else if(j > Math.floor(cols/2)+m){
      string += '_';
    }else{
      string += "#";
    }
  }
  m++;

  console.log(string)
  }
}

pyramid(800)


module.exports = pyramid;
