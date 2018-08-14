let numberOfGridBlocksAcross = 10;
module.exports =
class Grid {
  constructor(canvas) {
    this.canvasWidth = canvas.width;
    this.blockWidth = this.canvasWidth / numberOfGridBlocksAcross;    
  }

  blockWidth() {
    this.blockWidth;
  }

  pixels(blocks) {
    return blocks * this.blockWidth;
  }

  getNumberOfBlocksAcross() {
    return numberOfGridBlocksAcross
  }
}