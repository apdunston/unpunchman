module.exports = 
class Point {
  constructor(x, y) {    
    this.x = x !== undefined ? x : 0;
    this.y = y !== undefined ? y:  0;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }    

  setX(value) {
    if (isNaN(value)) {
      throw new Error("Tried to set point x value to non-number: ", value)
    }
    this.x = value
  }

  setY(value) {
    if (isNaN(value)) {
      throw new Error("Tried to set point y value to non-number: ", value)
    }
    this.y = value
  }

  toTheLeftOf(other) {
    return this.getX() <= other.getX()
  }

  above(other) {
    return this.getY() <= other.getY()
  }
}