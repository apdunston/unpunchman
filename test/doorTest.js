let assert = require('assert')
let Door = require('../src/door.2')
let GridRectangle = require("../src/gridRectangle.1")
let Grid = require('../src/grid.1')

// let boundingBox = new GridRectangle({
//   x: 0,
//   y: 0,
//   width: this.width,
//   height: this.height,
//   grid: this.grid
// })

let player = {
  getBoundingBox: function() {
    return boundingBox
  }
}

let scene = {
  getPlayer: function() {return player}
}

describe('DoorTest', () => {
  it('calls its function when entered', () => {
    // let functionFired = false
    // let functionArg = null
    // let fun = (scene) => {
    //   functionArg = scene
    //   functionFired = true
    // }
    // let door = new Door({grid: grid, x: 0, y: 6, width: 1, height: 2.2, showBoundingBox: true, function: fun})
    // door.tick(scene)

  })
})
