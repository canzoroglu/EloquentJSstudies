// isEven() returns true if given num is even and false if it is not
// @param {Integer} num
// @return {Boolean}
function isEven(num) {
  if (num < 0) return isEven(-num);
  if (num === 0) return true;
  if (num === 1) return false;
  return isEven(num - 2);
}
