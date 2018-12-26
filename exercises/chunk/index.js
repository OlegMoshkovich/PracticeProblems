// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



// function chunk(array,size){
//  const chunked = [];
//  let index =0;
//
//  while(index < array.length){
//    chunked.push(array.slice(index,index+size));
//    index = index+size;
//  }
//
// console.log('chunked array = ',chunked);
//  return chunked;
//
// }

// function chunk(array,size){
// let globalArr = [];
//
// for(let element of array){
//     let last = globalArr[globalArr.length-1];
//     if(!last || last.length === size){
//       globalArr.push([element])
//     }else{
//       last.push(element)
//     }
//   }
//   return globalArr
// }

function chunk(array,size){
 const globalArr = [];
 let index = 0;

 while(index < array.length){
   globalArr.push(array.slice(index,index+size));
   index += size;
 }
 console.log(globalArr)
return globalArr;
}
//did not work - the for loop is too complex for the problem

// function chunk(array, size) {
// const iterable = Math.floor(array.length/size);
// let globalArr = [];
// for (j=0;j<iterable;j++){
//   let newArr =[]
//   for (i=0;i<size;i++){
//     newArr.push(array[0])
//     array.splice(0,1)
//   }
//   globalArr.push(newArr)
//   if(j=== iterable -1){
//     globalArr.push(array)
//   }
// }
//
// return globalArr
//
// }

chunk([7,6,54,4,3,3,2,2,34,4],4)

module.exports = chunk;
