// flatten() returns an array whose elements consist of by flattening arrOfArr
// @param {Array} arrOfArr
// @return {Array} flattenedArr
function flatten(arrOfArr){
  return arrOfArr.reduce((flattened, current) => flattened.concat(current), []);
}
console.log(flatten([[1, 2, 3], [4, 5], [6]]));
