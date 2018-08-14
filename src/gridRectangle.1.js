let Rectangle = require("./rectangle.1")

module.exports = 
class GridRectangle extends Rectangle {
  constructor(params) {   
    super(params); 
    this._validate(params)
    this.grid = params.grid;
  }

  xPixels() {
    return this.grid.pixels(this.point.getX());
  }

  yPixels() {
    return this.grid.pixels(this.point.getY());
  }

  widthPixels() {
    return this.grid.pixels(this.width);
  }

  heightPixels() {
    return this.grid.pixels(this.height);
  }

  // Private Functions // 

  _validate(params) {
    if (params.grid === undefined) {
      throw new Error("GridRectangle instantiated without a grid.")
    }
  }
}