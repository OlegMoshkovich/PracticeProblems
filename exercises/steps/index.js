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

function steps(n,row = 0, stair = ''){
  if (n === row){
    return
  }

  if (n === stair.length){
    console.log(stair)
    return steps(n,row+1)
  }

  if(stair.length <= row){
    stair += '#'
  }else{
    stair += '_'
  }
  //call steps with n is the number of symbols in the array
  // if(stair.length<row){
  //   stair.push('#');
  // }else{
  //   stair.push('_');
  // }
  //each time the function is called
  //if some condition push '#' into the array

  //if some other condition push '_' into the array
  //if the function executed n times return -- base case
  //if the number of times the function is executed is not yet met call the function again

  steps(n, row, stair)
}


// function steps(n){
// for(let i=1;i<n+1;i++){
//   let arr = [];
//   for (j=0;j<n+1;j++){
//     if(j<i){
//       arr.push('#')
//     }else{
//       arr.push('_')
//     }
//   }
//   console.log(arr.join(''))
// }
// return
// }



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
