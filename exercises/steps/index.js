// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


//Recursion solution -- think about the base case -- when function is called again make sure to change the arguments

function steps(n){
  let str = ' '

  if(n === 0){
    return;
  }


  console.log('the number is n',str)
  steps(n-1);
}



// function steps(n){
//   let arr = []
//   let str
//
//   for (let row=0;row<n;row++){
//     let stair ='';
//     for(let column = 0; column<n; column++){
//       if (column<= row){
//         stair += '#'
//       }else{
//         stair += ' '
//       }
//     }
//       console.log(stair)
//   }
// }

steps(20)

module.exports = steps;
