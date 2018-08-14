// Put the boxers in as part of the scene

let Boxer = require("../src/boxer.15")
var Scene = require('./scene.2')
var Background = require('./background.1')

let BACKGROUND_SRC = "../assets/backgrounds/bushes.jpg"

module.exports = class Bushes extends Scene {
  constructor(grid, animationDisplay) {
    super(grid, animationDisplay)
    this.addObject(new Background(BACKGROUND_SRC))

    let boxer2 = new Boxer({grid: grid, x: 3, y: 6, width: 1.5, faceLeft: true});
    boxer2.startKO()
    let boxer3 = new Boxer({grid: grid, x: 7, y: 6, width: 1.5, faceLeft: true});
    boxer3.startKO()
  
    this.addObject(boxer2)
    this.addObject(boxer3)
  }
}