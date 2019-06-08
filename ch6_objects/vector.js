function Vector(x, y){
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(v2){
  let addedX = this.x + v2.x;
  let addedY = this.y + v2.y;
  return new Vector(addedX, addedY);
}
Vector.prototype.minus = function(v2){
  let substructedX = this.x - v2.x;
  let substructedY = this.y - v2.y;
  return new Vector(substructedX, substructedY);
}
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
});
