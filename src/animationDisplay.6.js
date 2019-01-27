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
    
    if (!self.running) {
      return;
    }
    if (self.frame < self.slowness) {
      self.frame += 1;
      window.requestAnimationFrame(() => self.mainLoop())
      return;
    } else {
      self.frame = 0;
    }

    if (self.scene !== undefined) {
      self.scene.tick()
    }

    self._resetCounter()

    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height)
    let objects = self.scene.getObjects()

    for (var x = 0; x < self.counter; x++) {
      objects[x].render(self.context);
    }    
    window.requestAnimationFrame(() => self.mainLoop())
    self.counter += 1
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