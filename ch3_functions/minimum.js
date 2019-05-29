// min() returns the minimum of two numbers
// @param {Number} num1
// @param {Number} num2
// @return {Number} min(num1, num2)
function min(num1, num2){
  if(typeof num1 !== "number" ||typeof num2 !== "number"){
    throw new Error("Arguments must be Number");
  }
  return num1 > num2 ? num2 : num1;
}
console.log(min(13, 2));
console.log(min(-1, 5));
console.log(min(130, "chickens"));
