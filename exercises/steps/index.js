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

for(let i=1;i<n+1;i++){
  let arr = [];
  for (j=0;j<i;j++){
    arr.push("#");
  }
  for(m=i+1;m<n+1;m++){
    arr.push('_')
  }
  console.log(arr.join(''))
}
return
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
