// range() returns array of integers from a to b (both included) and step differences between these integers
// @param {Integer} a
// @param {Integer} b
// @param {Integer} step
// @return {Array} nums

function range(a, b, step=1){
  for(let i = 0; i < arguments.length; i++){
    if(Math.round(arguments[i]) !== arguments[i]){
      throw new Error("Arguments must be integer");
    }
  }
  let nums = [];
  let start, end;
  if(step > 0){
    start = Math.min(a, b);
    end = Math.max(a, b);
    for(let i = start; i <= end; i += step){
      nums.push(i);
    }
  }
  else {
    end = Math.min(a, b);
    start = Math.max(a, b);
    for(let i = start; i >= end; i += step){
      nums.push(i);
    }
  }
  return nums;
}
console.log(range(10, 1, 1));
console.log(range(10, 1, -2));
