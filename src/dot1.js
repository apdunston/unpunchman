let MOVE_LENGTH = 10;

module.exports = 
class Dot {
  constructor(input) {
    this.x = input.x || 10;
    this.y = input.y || 50;
    this.width = input.width || 400;
  }

  render(context) {
    let currentImage = this.currentAnimation()[this.currentFrame];
    context.save();

    if (this.faceLeft) {
      context.translate(this.x + currentImage.width, this.y);
      context.scale(-1,1);
      context.drawImage(currentImage, 0, 0, this.width, this.width);
    } else {
      context.drawImage(currentImage, this.x, this.y, this.width, this.width);
    }

    context.restore();
    this.advanceFrame();
  }

  up() {
    this.y -= MOVE_LENGTH
  }

  down() {
    this.y += MOVE_LENGTH
  }

  left() {
    this.x -= MOVE_LENGTH
  }

  right() {
    this.x += MOVE_LENGTH
  }
}