// sum() returns sum of elements of arr
// @param {Array} arr
// @return {Number}
function sum(arr){
  
  // Check if all elements are numbers
  for(let i of arr){
    if(typeof i !== "number") throw new Error("Array elements must be a number");
  }

  return arr.reduce((el, total) => el + total, 0);
}
