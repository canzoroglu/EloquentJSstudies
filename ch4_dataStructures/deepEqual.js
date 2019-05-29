// deepEqual() returns true if two values are the same or their properties (if the values are objects)
// have the same values else false
// @param {AnyType} val1
// @param {AnyType} val2
// @return {Boolean}
function deepEqual(val1, val2) {
  if (typeof val1 === "object" && val1 !== null && typeof val2 === "object" && val2 !== null) {
    for (let prop in val1) {
      if (!val2.hasOwnProperty(prop)) {
        return false;
      }
      if (!deepEqual(val1[prop], val2[prop])) {
        return false;
      }
    }
    return true;
  }
  else {
    return val1 === val2;
  }
}
console.log(deepEqual({a:1, b:2, c:3}, {a:1, b:2, c:3})); //true
console.log(deepEqual({a:1, b:2, c:{x:3, y:1}}, {a:1, b:2, c:{x:3, y:1}})); //true
console.log(deepEqual({a:1, b:2, c:4}, {a:1, b:2, c:3})); //false
console.log(deepEqual({a:1, b:2, c:3}, {a:1, b:2, d:3})); //false
console.log(deepEqual({a:1, b:2, c:1}, {a:1, b:2, c:{x:3, y:1}})); //false
console.log(deepEqual({a:1, b:2, c:{x:3, z:1}}, {a:1, b:2, c:{x:3, y:1}})); //false
console.log(deepEqual({a:1, b:2, c:{x:3, y:1}}, {a:1, b:2, c:{x:3, y:2}})); //false
