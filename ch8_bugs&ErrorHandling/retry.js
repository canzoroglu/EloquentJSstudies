function MultiplicatorUnitFailure(msg){
  this.message = msg;
  this.stack = new Error(msg).stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

// wrapper() calls primitiveMultiply function until no MultiplicatorUnitFailure error occurs
// @param {Number} x
// @param {Number} y
// @return {Number}
function wrapper(x, y) {
  if(typeof x !== "number" || typeof y !== "number"){
    throw new Error("Parameters must be numbers");
  }

  // primitiveMultiply() returns 50% MultiplicatorUnitFailure error or multiplication of given two numbers
  function primitiveMultiply(){
    if(Math.random() < 0.5){
      throw new MultiplicatorUnitFailure("Error occurred");
    }
    return x * y;
  }
  
  try {
    return primitiveMultiply();
  }catch(err){
    if(err instanceof MultiplicatorUnitFailure){
      console.log(err.message);
      return wrapper(x, y);
    }
    else throw err;
  }
}
