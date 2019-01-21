// adding slowness shows a progression of rendered objects

module.exports = 
class AnimationDisplay {
  constructor(canvas, context) {
    this.running = false;
    this.canvas = canvas;
    this.context = context;
    this.slowness = 0;
    this.frame = 0;
  }

  setScene(scene) {
    this.scene = scene
  }

  getScene() {
    return this.scene
  }

  getSlowness() {
    return this.slowness;
  }

  faster() {
    if (this.slowness > 0) {
      this.slowness -= 1
    }
  }

  slower() {
    this.slowness += 1;
  }

  start() {
    let self = this;
    self.running = true;
    window.requestAnimationFrame(() => self.mainLoop())
  }

  stop() {
    this.running = false;
  }

  mainLoop() {
    let self = this;
    
    if (!this.running) {
      return;
    }
    if (this.frame < this.slowness) {
      this.frame += 1;
      window.requestAnimationFrame(() => self.mainLoop())
      return;
    } else {
      this.frame = 0;
    }

    if (this.scene !== undefined) {
      this.scene.tick()
    }

    this._resetCounter()

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    let objects = this.scene.getObjects()

    for (var x = 0; x < this.counter; x++) {
      objects[x].render(context);
    }    
    window.requestAnimationFrame(() => self.mainLoop())
    this.counter += 1
  }

  _resetCounter() {
    let numberOfObjects = this.scene.getObjects().length

    if (this.slowness === 0) {
      this.counter = numberOfObjects
      return
    }
    
    if (this.counter === undefined || this.counter > (numberOfObjects)) {
      this.counter = 1
    }
  }
};