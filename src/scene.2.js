// Communicates between objects and animationDisplay

// Don't try to add objects to animationDisplay. It will ask for them.
// validate incoming objects.
let GridRectangle = require('./gridRectangle.1')

module.exports = 
class Scene {
  constructor(grid, animationDisplay) {
    this.objects = []
    this.animationDisplay = animationDisplay
    this.animationDisplay.setScene(this)
    this.grid = grid
    this.boundingBox = new GridRectangle({
      x: 0,
      y: 0,
      width: grid.getNumberOfBlocksAcross(),
      height: grid.getNumberOfBlocksAcross(),
      grid: this.grid
    })
  }

  addObject(object) {
    if (object.render === undefined) {
      throw new Error("Object without render method added to scene.")
    }
    this.objects.push(object)
  }

  removeObject(object) {
    let index = this.objects.indexOf(object)
    if (index === -1) {
      throw new Error("Cannot remove object. It doesn't exist in the scene: ", object)
    }
    this.objects.splice(index, 1)
  }

  getObjects() {
    return this.objects
  }

  getBoundingBox() {
    return this.boundingBox
  }

  tick() {
    let self = this
    for (var x = 0; x < this.objects.length; x++) {
      if (this.objects[x].tick !== undefined) {
        this.objects[x].tick(self)
      }
    }
  }
}