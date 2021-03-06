let assert = require('assert')

let AnimationDisplay = require('../src/animationDisplay.6')
let Bushes = require('../src/bushes.8')
let Boxer = require('../src/boxer.17')

let TestSupport = require('./test_support.js')
const WAIT_TIME = TestSupport.WAIT_TIME
const MAX_TICKS = TestSupport.MAX_TICKS
let context = TestSupport.context
let canvas = TestSupport.canvas
let grid = TestSupport.grid


// Mocks

describe('BushTest', () => {
  let display = null
  let object = null
  let scene = null
  let boxer = null
  let interval = null

  function getObject() {
    return {
      ticks: 0,
      tick: function(scene) {
        let self = this
        self.ticks += 1
        console.log("Object tick ", self.ticks)
      },
      render: () => {}
    }    
  }

  function restartDisplay() {
    global.ticks = 0
    display.start()
  }

  function performStepsAtIntervals(steps, waitTime, done) {
    let clauseIndex = 0
    let nextClause = () => {
      steps[clauseIndex](done)
      clauseIndex += 1
    }
    interval = setInterval(nextClause, waitTime)
  }

  function moveBoxerFarRight() {
    boxer.setX(grid.getNumberOfBlocksAcross() - 1)
  }

  function moveBoxerFarLeft() {
    boxer.setX(0)
  }

  function moveBoxerToMiddle() {
    boxer.setX(grid.getNumberOfBlocksAcross() / 2 - 0.5)
  }

  beforeEach((done) => {  
    global.ticks = 0
    display = new AnimationDisplay(canvas, context)
    object = getObject()
  
    scene = new Bushes(grid, display, 1)
    boxer = new Boxer({grid: grid, x: 0, y: 6, width: 1.5})
    scene.setPlayer(boxer) // UnPunchMan on top
    scene.addObject(object)
    display.setScene(scene)
    done()
  })

  afterEach((done) => {display.stop(); done()})

  describe('scene.start', () => {
    // Because I want to make sure that the system can start more than one scene properly.
    it('scene 1 gets ticks then scene 2 gets ticks', function(done) {
      display.start()
      scene.start()
      setTimeout(() => {
        assert(object.ticks == MAX_TICKS, "Object 1 didn't get all the ticks. Got " + object.ticks + " ticks")

        let scene2 = new Bushes(grid, display, 2)
        let object2 = getObject()
        scene2.addObject(object2)
        scene2.setPlayer(boxer) // UnPunchMan on top
        display.setScene(scene2)
        global.ticks = 0

        scene.stop()
        display.start()
        scene2.start()
        
        setTimeout(() => {
          assert(object2.ticks == MAX_TICKS, "Object 2 didn't get all the ticks. Got " + object2.ticks + " ticks")
          done()
        }, WAIT_TIME)

      }, WAIT_TIME)
    })


    // Because I want to make sure that multiple tests can work in tandem.
    it('gets the ticks2', function(done) {
      display.start()
      scene.start()
      setTimeout(() => {assert(object.ticks == MAX_TICKS, "Object 1 didn't get all the ticks. Got " + object.ticks + " ticks"); done()}, WAIT_TIME)
    })
  })

  describe('scene.stop', () => {
    it('stops the ticks', function(done) {
      display.start()
      scene.start()
      scene.stop()
      object.tick = function(scene) {
        let self = this
        self.ticks += 1
        console.log("bad object tick ", self.ticks)
      }
      let stopTimeTicks = object.ticks      
      console.log("stopped at ", stopTimeTicks, " ticks")
      setTimeout(() => {
        assert(object.ticks == stopTimeTicks, "assertion time ticks: " + object.ticks + " and stop time ticks: " + stopTimeTicks)
        done()
      }, WAIT_TIME)
    })
  })

  describe('.goToNextScene and .goToPreviousScene', () => {
    // Because there's a bug where the door won't go to the previous scene
    it('should actually go to the next scene, then go back, and each scene should have ticks', (done) => {
      scene2 = scene.getNextScene()
      object2 = getObject()
      scene2.addObject(object2)
      display.start()
      scene.start()
      let scene1Ticks = 0
      let scene2Ticks = 0

      let steps = [
        () => {
          restartDisplay()
          scene.goToNextScene()
          assert(display.getScene() == scene2, "Display is not on scene2")
          scene1Ticks = object.ticks  
        },
        () => {
          restartDisplay()
          scene2.goToPreviousScene()
          scene2Ticks = object2.ticks  
        },
        (done) => {
          restartDisplay()
          scene.stop()
          assert(scene1Ticks > 0, "Scene 1 didn't start the first time")
          assert(scene2Ticks > 0, "Scene 2 didn't start at all")
          assert(object.ticks > scene1Ticks, "Scene 1 didn't resume")
          assert(object2.ticks == scene2Ticks, "Scene 2 didn't stop")
          assert(display.getScene() == scene, "Display is not on scene1")
          clearInterval(interval)
          done()
        }
      ]

      performStepsAtIntervals(steps, WAIT_TIME/2, done)
    })

    describe('.goToNextScene and .goToPreviousScene by moving the boxer', () => {
      // Because there's a bug where the door won't go to the previous scene
      it('should actually go to the next scene, then go back, and each scene should have ticks', (done) => {
        scene2 = scene.getNextScene()
        object2 = getObject()
        scene2.addObject(object2)
        display.start()
        scene.start()
        let scene1Ticks = 0
        let scene2Ticks = 0
  
        let steps = [
          () => {
            restartDisplay()
            moveBoxerFarRight()
          },
          () => {
            assert(display.getScene() == scene2, "Display is not on scene2")
            scene1Ticks = object.ticks  
          },
          () => {
            restartDisplay()
            moveBoxerToMiddle()
          },
          () => {
            restartDisplay()
            moveBoxerFarLeft()
            scene2Ticks = object2.ticks  
          },
          (done) => {
            restartDisplay()
            assert(display.getScene() == scene, "Display is not on scene1. It's on scene: " + display.getScene().number)
            scene.stop()
            assert(scene1Ticks > 0, "Scene 1 didn't start the first time")
            assert(scene2Ticks > 0, "Scene 2 didn't start at all")
            assert(object.ticks > scene1Ticks, "Scene 1 didn't resume")
            assert(object2.ticks == scene2Ticks, "Scene 2 didn't stop")
            clearInterval(interval)
            done()
          }
        ]
 
        performStepsAtIntervals(steps, WAIT_TIME/2, done)
      })
    })
  })
})