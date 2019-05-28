// reverseArray() returns newArr whose elements reverse of arr
// @param {Array} arr
// @returns {Array} newArr
function reverseArray(arr){

  if (arr.length < 2) return arr;

  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

// reverseArrayInPlace() reverses elements of arr in place
// @param {Array} arr
// @returns {Array} reversed arr
function reverseArrayInPlace(arr){

  if (arr.length < 2) return arr;

  let size = arr.length;
  let step = Math.floor(size/2);
  let formerIndex = size - 1;
  for (let i = 0; i < step; i++){
    let temp = arr[i];
    arr[i] = arr[formerIndex];
    arr[formerIndex] = temp;
    formerIndex--;
  }
  return arr;
}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArrayInPlace([1,2,1,7,3]));
