// scene 5
let Boxer = require("./boxer.17")
let Scene = require('./scene.5')
let Background = require('./background.1')
let Utils = require('./utils.1')
let Door = require('./door.2')

let BACKGROUND_SRC = "../assets/backgrounds/bushes.jpg"
let MUSIC_SRC = "../assets/music/Off Limits.wav"
const RIGHT_DOOR_BLOCKS_OFFSET = 0.4 // Without this, he gets stuck on the right side of the screen.

module.exports = class Bushes extends Scene {
  constructor(grid, animationDisplay, number) {
    super(grid, animationDisplay, number)
    var self = this
    self.addObject(new Background(BACKGROUND_SRC))

    let numberOfBoxers = Utils.random(1, 3)

    for (let x = 0; x < numberOfBoxers; x++) {
      let xCoord = Utils.random(1, grid.getNumberOfBlocksAcross() - 1)
      let boxer = new Boxer({grid: grid, x: xCoord, y: 6, width: 1.5, faceLeft: true});
      boxer.startKO()
      self.addObject(boxer)
    }

    self.addObject(new Door({
      name: "Scene " + number + " left door",
      grid: grid,
      x: 0,
      y: 6,
      width: 1,
      height: 2.2,
      showBoundingBox: false,
      function: (scene) => self.goToPreviousScene()
    }))

    self.addObject(new Door({
      name: "Scene " + number + " right door",
      grid: grid,
      x: 9,
      y: 6,
      width: 1,
      height: 2.2,
      showBoundingBox: false,
      function: (scene) => self.goToNextScene()
    }))

    self.audio = new Audio(MUSIC_SRC)
    self.audio.volume = 0.10
    self.audio.loop = true
  }

  getNextScene() {
    if (this.nextScene === undefined) {
      this.nextScene = new Bushes(this.grid, this.animationDisplay, this.number + 1)
      this.nextScene.setPreviousScene(this)
      this.nextScene.setPlayer(this.player)
    }
    return this.nextScene
  }

  goToNextScene(beforeStartFunction) {
    console.log("BEFORESTARTFUCNCTION 1: ", beforeStartFunction)//!!ADRIAN
    console.log("bushes " + this.number + " gotonextscene")

    let fun = (scene) => {
      console.log("bushes next scene beforeStartFunction")
      this.player.setX(0)

      if (beforeStartFunction !== undefined) {
        console.log("BEFORESTARTFUCNCTION: ", beforeStartFunction)//!!ADRIAN
        beforeStartFunction(scene)
      }
    }

    super.goToNextScene(fun)
  }

  goToPreviousScene(beforeStartFunction) {
    console.log("bushes gotoprevious scene")

    let fun = (scene) => {
      console.log("Bushes previous scene beforestartfunction")
      this.player.setX(this.grid.getNumberOfBlocksAcross() - 1 - RIGHT_DOOR_BLOCKS_OFFSET)

      if (beforeStartFunction !== undefined) {
        beforeStartFunction(scene)
      }
    }

    super.goToPreviousScene(fun)
  }
}