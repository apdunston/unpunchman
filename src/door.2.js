// take a function

let Thing = require('./thing.2')

let IMAGE_RATIO = 2.3
let IMAGE_X_OFFSET_RATIO = 0.95
let IMAGE_Y_OFFSET_RATIO = 0.5

module.exports =
class Door extends Thing {
  constructor(input) {
    input.imageRatio = IMAGE_RATIO
    input.imageXOffsetRatio = IMAGE_X_OFFSET_RATIO
    input.imageYOffsetRatio = IMAGE_Y_OFFSET_RATIO
    super(input)
    this.function = input.function
  }

  onSceneStart(scene) {
    this.entered = false
    this.readied = false
  }

  tick(scene) {
    if (!this.readied) {
      this.readied = !this._playerColliding(scene)
      return
    }

    if (this._playerColliding(scene)) {
      this._entered(scene)
    }
  }

  render(context) {
    super.render(context)

    if (this.entered) {
      context.fillStyle = "#FF0000";
      context.fillRect(this.boundingBox.xPixels(),
        this.boundingBox.yPixels(),
        this.boundingBox.widthPixels(),
        this.boundingBox.heightPixels());  
    }
  }

  getReadied() {
    return this.readied
  }

  getBoundingBox() {
    return this.boundingBox
  }

  _playerColliding(scene) {
    return this.boundingBox.overlapping(scene.getPlayer().getBoundingBox())
  }

  _entered(scene) {
    this.entered = true
    if (this.function !== undefined) {
      this.function(scene)
    }
  }
}