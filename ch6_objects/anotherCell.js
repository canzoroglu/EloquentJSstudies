// Stretch cell until given width and height
// StretchCell conforms to table cell interface
// @param {Cell} inner
// @param {Integer} width
// @param {Integer} height
// @return {StretchCell}
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
}
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
}
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(Math.max(width, this.width), Math.max(height, this.height));
}
