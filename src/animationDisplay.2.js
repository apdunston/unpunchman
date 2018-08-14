// No background
module.exports = 
class AnimationDisplay {
  constructor(canvas, context) {
    this.running = false;
    this.canvas = canvas;
    this.context = context;
    this.objects = [];
    this.slowness = 0;
    this.frame = 0;
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

  addObject(object) {
    this.objects.push(object);
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

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (var x = 0; x < this.objects.length; x++) {
      this.objects[x].render(context);
    }
    window.requestAnimationFrame(() => self.mainLoop())
  }
};