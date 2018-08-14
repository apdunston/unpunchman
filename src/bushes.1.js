var Scene = require('./scene.2')
var Background = require('./background.1')

let BACKGROUND_SRC = "../assets/backgrounds/bushes.jpg"

module.exports = class Bushes extends Scene {
  constructor(grid, animationDisplay) {
    super(grid, animationDisplay)
    this.addObject(new Background(BACKGROUND_SRC))
  }
}