module.exports = 
class Background {
  constructor(src) {
    this.image = new Image();
    this.image.src = src
  }

  render(context) {
    context.drawImage(this.image, 0, 0, context.canvas.width, context.canvas.height);
  }
}