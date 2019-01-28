let assert = require('assert')
let Door = require('../src/door.2')
let GridRectangle = require("../src/gridRectangle.1")

let TestSupport = require('./test_support.js')
const WAIT_TIME = TestSupport.WAIT_TIME
const MAX_TICKS = TestSupport.MAX_TICKS
let context = TestSupport.context
let canvas = TestSupport.canvas
let grid = TestSupport.grid

let boundingBox = new GridRectangle({
  x: 0,
  y: 6,
  width: 2,
  height: 2,
  grid: grid
})

let player = {
  getBoundingBox: function() {
    return boundingBox
  }
}

let scene = {
  getPlayer: function() {return player}
}

describe('DoorTest', () => {
  it.only('calls its function when entered', () => {
    let functionFiredTimes = 0
    let functionArg = null
    let fun = (scene) => {
      functionArg = scene
      functionFiredTimes += 1
    }
    let door = new Door({grid: grid, x: 0, y: 6, width: 1, height: 2.2, showBoundingBox: true, function: fun})
    door.tick(scene)
    assert(door.readied == false)
    assert(functionFiredTimes == 0)
    boundingBox.setX(8)
    door.tick(scene)
    assert(door.readied == true, "Door didn't ready")
    assert(functionFiredTimes == 0)
    boundingBox.setX(0)
    door.tick(scene)
    assert(functionFiredTimes == 1, "Door function fired " + functionFiredTimes + " instead of 1")    
    assert(functionArg === scene)
  })
})
