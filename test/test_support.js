module.exports = (() => {
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

  return {
    canvas: canvas,
    context: context
  }
})()