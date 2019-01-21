// setX setY

module.exports = 
class Thing {
  constructor(input) {
    this._validate(input)
    this.showImageBox = input.showImageBox
    this.showBoundingBox = input.showBoundingBox
    this.heightRatio = input.heightRatio
    this.imageRatio = input.imageRatio
    this.imageXOffsetRatio = input.imageXOffsetRatio
    this.imageYOffsetRatio = input.imageYOffsetRatio
    this.grid = input.grid
    this.width = input.width
    this.height = input.height || (input.width * input.heightRatio)
    this._setBoxes(input)
  }

  render(context) {  
    if (this.showImageBox !== undefined) {
      this._drawImageBox(context);
    }

    if (this.showBoundingBox !== undefined) {
      this._drawBoundingBox(context);
    }
  }

  setX(value) {
    console.log("Setx", value)
    this.boundingBox.setX(value)    
    this.imageBox.setX(value - this.width * this.imageXOffsetRatio)
  }

  setY() {
    this.boundingBox.setY(value)
    this.imageBox.setX(x-this.height * this.imageYOffsetRatio)
  }

  getBoundingBox() {
    return this.boundingBox
  }

  tick(scene) {
    // Override with interesting behaviors
  }

  onSceneStart(scene) {
    // Override with interesting behaviors
  }

  onSceneStop(scene) {
    // Override with interesting behaviors
  }

  // Private Functions //

  _validate(input) {
    if (input.grid === undefined) {
      throw new Error("Cannot instantiate a Thing (in this case a " + this.constructor.name + ") without a grid.")
    }
    if (input.width === undefined) {
      throw new Error("Cannot instantiate a Thing (in this case a " + this.constructor.name + ") without a width.")
    }
    if (input.heightRatio === undefined && input.height === undefined) {
      throw new Error("Cannot instantiate a Thing (in this case a " + this.constructor.name + ") without a height or heightRatio.")
    }
    if (input.imageRatio === undefined) {
      throw new Error("Cannot instantiate a Thing (in this case a " + this.constructor.name + ") without a imageRatio.")
    }
    if (input.imageXOffsetRatio === undefined) {
      throw new Error("Cannot instantiate a Thing (in this case a " + this.constructor.name + ") without a imageXOffsetRatio.")
    }
    if (input.imageYOffsetRatio === undefined) {
      throw new Error("Cannot instantiate a Thing (in this case a " + this.constructor.name + ") without a imageYOffsetRatio.")
    }

  }

  _setBoxes(input) {
    let x = input.x === undefined ? 0 : input.x;
    let y = input.y === undefined ? 0 : input.y;
    
    this.boundingBox = new GridRectangle({
      x: x,
      y: y,
      width: this.width,
      height: this.height,
      grid: this.grid
    })

    this.imageBox = new GridRectangle({
      x: x - this.width * this.imageXOffsetRatio, 
      y: y - this.width * this.imageYOffsetRatio,
      width: this.width * this.imageRatio,
      height: this.width * this.imageRatio,
      grid: this.grid
    })
  }

  _drawBox(context, gridRectangle, color, lineWidth) {
    context.beginPath();  
    context.rect(gridRectangle.xPixels(), gridRectangle.yPixels(),
    gridRectangle.widthPixels(), gridRectangle.heightPixels());
    context.lineWidth = lineWidth;
    context.strokeStyle = color
    context.stroke();        
  }

  _drawBoundingBox(context) {
    this._drawBox(context, this.boundingBox, "#0000FF", 4)
  }
  
  _drawImageBox(context) {
    this._drawBox(context, this.imageBox, "#666666", 7)
  }

  _soundAvailable() {
    return typeof window.Audio === 'function';
  }
  
}