// arrayToList() returns a list whose elements are made from given array
// @param {Array} arr
// @return {Object} list
// arrayToList([1,2,3]) -> {value:1, rest:{value:2, rest:{value:3, rest:null}}}
function arrayToList(arr){
  if(!arr.length){
      return null;
    }
  return {
    value: arr.shift(),
    rest: arrayToList(arr)
  };
}
console.log(arrayToList([1,2,3]));

// listToArray() returns an array whose elements are made from given list
// @param {Object} list
// @return {Array} arr
function listToArray(list) {
  if (!list.rest) {
    return list.value;
  }
  return [list.value].concat(listToArray(list.rest));
}
console.log(listToArray({value:1, rest:{value:2, rest:{value:3, rest:null}}}));

// prepend() prepends given element to the front of given list
// @param {Integer} elem
// @param {Object} list
// @return {Object} list
function prepend(elem, list) {
  // Check if elem is Integer
  if (Math.round(elem) !== elem) {
    throw new Error("Element must be an integer");
  }
  return {
    value: elem,
    rest: list
  };
}
console.log(prepend(5, {value:1, rest:{value:2, rest:{value:3, rest:null}}}));

// nth() returns the element at given position
// @param {Natural Number} pos
// @param {Object} list
// @return {Integer} value
function nth(pos, list) {
  if (!list.rest) {
    return undefined;
  }
  if (pos === list.value) {
    return list.rest;
  } else {
    return nth(pos, list.rest);
  }
}
console.log(nth(2, {value:1, rest:{value:2, rest:{value:3, rest:null}}}));
