// countChar() returns the number of occurences of given char in given string
// @param {String} str
// @param {String} char
// @return {Number} occurences of char
function countChar(str, c) {
  if (typeof str !== "string" || typeof c !== "string") {
    throw new Error("Arguments must be Strings");
  }
  let regex = new RegExp(c, "g");
  let matchObj = str.match(regex);
  return matchObj ? matchObj.length : 0;
}
console.log(countChar("kakkerlak", "k"));

// countBs is special case of countChar where c is "B"
function countBs(str){
  return countChar(str, "B");
}
console.log(countBs("BBC"));
