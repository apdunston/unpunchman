let MOVE_LENGTH = 5;

module.exports = 
class Dot {
  constructor(input) {    
    this.x = input.x !== undefined ? input.x : 10;
    this.y = input.y !== undefined ? input.y : 10;
    this.width = input.width || 400;
    this.color = input.color || "#0000FF"
    this.shiftMode = false;
  }

  render(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI);
    context.fill();
    context.font = "48px Courier New";
    context.fillStyle = "#FFFFFF";
    context.fillText("x: " + Math.round(this.x) + " y: " + Math.round(this.y), this.x, this.y - 40);
  }

  shiftOn() {
    this.shiftMode = true;
  }

  shiftOff() {
    this.shiftMode = false;
  }

  moveLength() {
    if (this.shiftMode) {
      return MOVE_LENGTH * 10;
    } else {
      return MOVE_LENGTH;
    }
  }

  up() {
    this.y -= this.moveLength();
  }

  down() {
    this.y += this.moveLength();
  }

  left() {
    this.x -= this.moveLength();
  }

  right() {
    this.x += this.moveLength();
  }
}