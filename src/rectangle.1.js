let Point = require('./point.1')

module.exports = 
class Rectangle {
  constructor(params) { 
    this.point = new Point(params.x, params.y)   
    this.width = params.width || 1;
    this.height = params.height || 1;
  }

  inside(other) {
    return other.getX() <= this.getX() &&
      other.getY() <= this.getY() &&
      other.rightX() >= this.rightX() &&
      other.bottomY() >= this.bottomY();
  }

  notOverlapping(other) {
    return this.topRight().toTheLeftOf(other.topLeft()) ||
      this.bottomLeft().above(other.topLeft()) ||
      other.topRight().toTheLeftOf(this.topLeft()) ||
      other.bottomLeft().above(this.topLeft())
  }

  overlapping(other) {
    return !this.notOverlapping(other)
  }

  getX() {
    return this.point.getX();
  }

  getY() {
    return this.point.getY();
  }

  setX(value) {
    this.point.setX(value)
  }

  setY(value) {
    this.point.setY(value)
  }

  rightX() {
    return this.getX() + this.width
  }

  bottomY() {
    return this.getY() + this.height
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  topLeft() {
    return this.point
  }

  topRight() {
    return new Point(this.getX() + this.width, this.getY())
  }

  bottomLeft() {
    return new Point(this.getX(), this.getY() + this.height)
  }

  bottomRight() {
    return new Point(this.getX() + this.width, this.getY() + this.height)
  }
}