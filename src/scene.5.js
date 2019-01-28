// don't set animationDisplay's scene in the constructor
let GridRectangle = require('./gridRectangle.1')

module.exports = 
class Scene {
  constructor(grid, animationDisplay, number) {
    this.objects = []
    this.animationDisplay = animationDisplay
    this.grid = grid
    this.number = number
    this.running = false

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

    if (!self.running) {
      return
    }

    for (var x = 0; x < self.objects.length; x++) {
      if (self.running && self.objects[x].tick !== undefined) {
        self.objects[x].tick(self)
      }
    }
  }

  startMusic() {
    if (this.audio !== undefined) {
      this.audio.play()
    }
  }

  stopMusic() {
    if (this.audio !== undefined) {
      this.audio.pause()
    }
  }

  setPlayer(value) {
    if (this.player !== undefined) {
      this.removeObject(this.player)
    }

    this.player = value
    this.addObject(this.player)
  }

  getPlayer() {
    return this.player
  }

  start() {
    console.log("Starting scene ", this.number)    
    this._forEachObject((object) => {
      if(object.onSceneStart !== undefined) {
        object.onSceneStart(this)
      }
    })
    this.running = true
  }

  stop() {
    let self = this
    console.log("scene " + self.number + " stop")
    self.running = false
    self.stopMusic()
    self._forEachObject((object) => {
      if(object.onSceneStop !== undefined) {
        object.onSceneStop(self)
      }
    })
  }

  goToNextScene(beforeSceneStart) {
    console.log("scene " + this.number + " gotonext")
    this.stop()
    let next = this.getNextScene()
    this.animationDisplay.setScene(next)

    if (beforeSceneStart !== undefined) {
      beforeSceneStart(next)
    }

    next.start()
  }

  goToPreviousScene(beforeSceneStart) {
    console.log("scene gotoprevious")
    if (this.previousScene === undefined) {
      console.log("No previous scene")
      return
    }
    this.stop()
    this.animationDisplay.setScene(this.previousScene)

    if (beforeSceneStart !== undefined) {
      beforeSceneStart(this.previousScene)
    }

    this.previousScene.start()
  }

  getNextScene() {
    return this
  }

  getPreviousScene() {
    return this.previousScene
  }

  setPreviousScene(value) {
    this.previousScene = value
  }


  _forEachObject(fun) {
    for (let x = 0; x < this.objects.length; x++) {
      fun(this.objects[x])
    }
  }
}