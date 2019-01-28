module.exports = (() => {
  let GridRectangle = require('../src/gridRectangle.1')
  let Grid = require('../src/grid.1')

  const jsdom = require('jsdom');
  const { JSDOM } = jsdom;
  const { document } = new JSDOM('<!doctype html><html><body></body></html>').window
  const MAX_TICKS = 20
  const TICK_TIME = 5
  const HEDGE = 30
  const WAIT_TIME = (MAX_TICKS + HEDGE) * TICK_TIME

  global.ticks = 0
  global.document = document
  global.window = document.defaultView
    
  global.requestAnimationFrame = callback => {
    console.log("requestAnimationFrame")
    if (global.ticks < MAX_TICKS) {
      setTimeout(callback, TICK_TIME)
      global.ticks += 1
    }
  };

  global.window.requestAnimationFrame = global.requestAnimationFrame
  function Image() {this.src = "SRC_VALUE"; this.width = 5;}
  global.Image = Image
  global.GridRectangle = GridRectangle
  function Audio() {
    this.pause = () => {}
  }
  global.Audio = Audio
  
  let canvas = {width: 100, height: 100}
  let context = {
    canvas: canvas,
    clearRect: () => {}, 
    drawImage: () => {},
    save: () => {},
    translate: () => {},
    scale: () => {},
    restore: () => {},
    beginPath: () => {},
    rect: () => {},
    stroke: () => {}
  }
  let grid = new Grid(canvas)


  return {
    canvas: canvas,
    context: context,
    grid: grid,
    WAIT_TIME: WAIT_TIME,
    MAX_TICKS: MAX_TICKS,
    TICK_TIME: TICK_TIME
  }
})()