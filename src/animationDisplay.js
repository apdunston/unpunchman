module.exports = 
class AnimationDisplay {
  constructor(canvas, context) {
    this.running = false;
    this.canvas = canvas;
    this.context = context;
    this.objects = [];
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

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (var x = 0; x < this.objects.length; x++) {
      this.objects[x].render(context);
    }
    window.requestAnimationFrame(() => self.mainLoop())
  }
};