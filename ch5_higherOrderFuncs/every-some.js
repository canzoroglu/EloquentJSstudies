// every() returns true if all elements of given array return true for given function else false
// @param {Array} arr
// @param {Function} fn
function every(arr, fn) {
  for (elem of arr) {
    if (!fn(elem)) {
      return false;
    }
  }
  return true;
}

// some() returns true if one element of given array return true for given function else false
// @param {Array} arr
// @param {Function} fn
function some(arr, fn) {
  for (elem of arr) {
    if (fn(elem)) {
      return true;
    }
  }
  return false;
}
