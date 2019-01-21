// Doors

// goTo next and previous scene moves up to Scene
// Use door 2

let Boxer = require("./boxer.15")
let Scene = require('./scene.3')
let Background = require('./background.1')
let Utils = require('./utils.1')
let Door = require('./door.2')

let BACKGROUND_SRC = "../assets/backgrounds/bushes.jpg"
let MUSIC_SRC = "../assets/music/Off Limits.wav"

module.exports = class Bushes extends Scene {
  constructor(grid, animationDisplay, number) {
    super(grid, animationDisplay, number)
    this.addObject(new Background(BACKGROUND_SRC))

    let numberOfBoxers = Utils.random(1, 3)

    for (let x = 0; x < numberOfBoxers; x++) {
      let xCoord = Utils.random(1, grid.getNumberOfBlocksAcross() - 1)
      let boxer = new Boxer({grid: grid, x: xCoord, y: 6, width: 1.5, faceLeft: true});
      boxer.startKO()
      this.addObject(boxer)
    }

    this.addObject(new Door({
      grid: grid,
      x: 0,
      y: 6,
      width: 1,
      height: 2.2,
      showBoundingBox: true,
      function: (scene) => this.goToPreviousScene()
    }))

    this.addObject(new Door({
      grid: grid,
      x: 9,
      y: 6,
      width: 1,
      height: 2.2,
      showBoundingBox: true,
      function: (scene) => this.goToNextScene()
    }))

    this.audio = new Audio(MUSIC_SRC)
    this.audio.volume = 0.10
    this.audio.loop = true
  }

  getNextScene() {
    if (this.nextScene === undefined) {
      this.nextScene = new Bushes(this.grid, this.animationDisplay, this.number + 1)
      this.nextScene.setPreviousScene(this)
      this.nextScene.setPlayer(this.player)
    }
    return this.nextScene
  }

  getPreviousScene() {
    return this.previousScene
  }

  setPreviousScene(value) {
    this.previousScene = value
  }
}