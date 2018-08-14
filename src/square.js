module.exports = class Square {
  constructor(input) {
    this.rectangle = new GridRectangle({
      x: input.x,
      y: input.y,
      width: input.width,
      height: input.width,
      grid: input.grid
    });
  }

  render(context) {
    context.fillStyle = "#FF0000";
    context.fillRect(this.rectangle.xPixels(), this.rectangle.yPixels(),
      this.rectangle.widthPixels(), this.rectangle.heightPixels());
  }
}
