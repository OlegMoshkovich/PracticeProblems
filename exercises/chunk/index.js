// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
const iterable = Math.floor(array.length/size);
let globalArr = [];
for (j=0;j<iterable;j++){
  let newArr =[]
  for (i=0;i<size;i++){
    newArr.push(array[0])
    array.splice(0,1)
  }
  globalArr.push(newArr)
  if(j=== iterable -1){
    globalArr.push(array)
  }
}

console.log('original array', array)
console.log('global array', globalArr)
}

chunk([7,6,54,4,3,3,2,2,34,4],4)

module.exports = chunk;
