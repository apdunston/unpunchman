// Boxes display configurable showPunchBox, showImageBox, showBoundingBox

let GridRectangle = require('./gridRectangle.1')
let STATES = require('./boxerStates')
let FRAMES = require('./boxerFrames')
let SOUNDS = require('./boxerSounds')
let BEHAVIOR = require ('./animationBehavior')
let STATE_BEHAVIOR = require('./boxerStateBehavior')
let MOVE_LENGTH = 0.1;
let HEIGHT_RATIO = 1.6
let IMAGE_RATIO = 2.3
let IMAGE_X_OFFSET_RATIO = 0.95
let IMAGE_Y_OFFSET_RATIO = 0.5

module.exports = 
class Boxer {
  constructor(input) {
    this._validate(input)
    this._loadAnimations();
    this._loadSounds();
    this._makeDizzySlower();
    this.grid = input.grid;
    this.faceLeft = input.faceLeft === undefined ? false : input.faceLeft;
    this.returnState = STATES.IDLE;
    this.idle();
    this._setBoxes(input)
    this.showPunchBox = input.showPunchBox
    this.showImageBox = input.showImageBox
    this.showBoundingBox = input.showBoundingBox
  }

  render(context) {  
    let currentImage = this._currentAnimation()[this.currentFrame];

    if (this.faceLeft) {
      this._drawBoxerLeft(currentImage, context)
    } else {
      this._drawBoxerRight(currentImage, context)
    }

    this._advanceFrame();
    
    if (this.showPunchBox !== undefined) {
      this._drawPunchBox(context);
    }

    if (this.showImageBox !== undefined) {
      this._drawImageBox(context);
    }

    if (this.showBoundingBox !== undefined) {
      this._drawBoundingBox(context);
    }
  }

  getX() {
    return this.imageBox.getX()
  }

  getY() {
    return this.imageBox.getY()
  }

  setX(value) {
    this.imageBox.setX(value)
  }

  setY(value) {
    this.imageBox.setY(value)
  }

  xPixels() {
    return this.boundingBox.xPixels();
  }

  yPixels() {
    return this.boundingBox.yPixels();
  }  

  getState() {
    return this.state;
  }

  getBoundingBox() {
    return this.boundingBox
  }

  tick(scene) {
    this._handleMovement(scene);
  }

  improve() {
    switch (this.state) {
      case STATES.KO:
        this.state = STATES.DIZZY;
        break;
      case STATES.DIZZY:
        this.state = STATES.BLOCK;
        break;
      case STATES.BLOCK:
        this.state = STATES.STOP;
        break;
      case STATES.STOP:
        this.state = STATES.IDLE;
        break;
    }

    this.currentFrame = 0;
  }

  punched() {
    this.improve()
  }

  idle() {
    this._playerInitiatedStateTransition(STATES.IDLE);
  }

  punchLeft(scene) {
    this._playerInitiatedStateTransition(STATES.PUNCH_LEFT);
    this._punch(scene)
  }

  punchRight(scene) {
    this._playerInitiatedStateTransition(STATES.PUNCH_RIGHT);
    this._punch(scene)
  }

  block() {
    this._playerInitiatedStateTransition(STATES.BLOCK);
  }

  dizzy() {
    this._playerInitiatedStateTransition(STATES.DIZZY);
  }

  hurt() {
    this._playerInitiatedStateTransition(STATES.HURT);
  }

  ko() {
    this._playerInitiatedStateTransition(STATES.KO);
  }

  punchUp(scene) {
    this._playerInitiatedStateTransition(STATES.PUNCH_UP);
    this._punch(scene)
  }

  walk() {
    this._playerInitiatedStateTransition(STATES.WALK);
  }

  walkBack() {
    this._playerInitiatedStateTransition(STATES.WALK_BACK);
  }

  ok() {
    this._playerInitiatedStateTransition(STATES.OK);
  }

  stop() {
    this._playerInitiatedStateTransition(STATES.STOP);
  }

  stopBlock() {
    if (this.state === STATES.BLOCK) {
      this._stateTransition(this.returnState);
    }
  }

  stopWalk() {
    if (this.state === STATES.WALK) {
      this._stopSound();
      this._stateTransition(this.returnState);
    }
  }

  stopWalkBack() {
    if (this.state === STATES.WALK_BACK) {
      this._stopSound();
      this._stateTransition(this.returnState);
    }
  }

  shiftOn() {
    this.shiftMode = true;
  }

  shiftOff() {
    this.shiftMode = false;
  }

  up() {
    this.imageBox.y -= this._moveLength();
  }

  down() {
    this.imageBox.y += this._moveLength();
  }

  left() {
    this.imageBox.x -= this._moveLength();
  }

  right() {
    this.imageBox.x += this._moveLength();
  }  

  startKO() {
    this.state = STATES.KO
    this._goToLastFrame()
  }

  // Private Functions //

  _punch(scene) {
    let objects = scene.getObjects();
    for (let x = 0; x < objects.length; x++) {
      let object = objects[x]
      if (object.punched !== undefined && 
          this.punchBox.overlapping(object.getBoundingBox())) {
        object.punched()
      }
    }
  }

  _goToLastFrame() {
    this.currentFrame = this._currentAnimation().length - 1
  }

  _validate(input) {
    if (input.grid === undefined) {
      throw new Error("Cannot instantiate a boxer (or any scene object) without a grid.")
    }
  }

  _moveLength() {
    if (this.shiftMode) {
      return MOVE_LENGTH * 10;
    } else {
      return MOVE_LENGTH;
    }
  }

  _stateTransition(state) {
    if (this.state === state) {
      return;
    }

    if (this.state === STATES.KO) {
      this.returnState = state;
      state = STATES.OK
    }

    this.state = state;
    this.currentFrame = 0;
    this._playSound();
  }

  _playerInitiatedStateTransition(state) {
    if (this.state !== state) {
      this._stopSound();
    }

    this._stateTransition(state);
  }

  _setBoxes(input) {
    let x = input.x === undefined ? 0 : input.x;
    let y = input.y === undefined ? 0 : input.y;
    let width = input.width === undefined ? 1 : input.width
    
    this.boundingBox = new GridRectangle({
      x: x,
      y: y,
      width: width,
      height: width * HEIGHT_RATIO,
      grid: this.grid
    })

    this.imageBox = new GridRectangle({
      x: x - width * IMAGE_X_OFFSET_RATIO, 
      y: y - width * IMAGE_Y_OFFSET_RATIO,
      width: width * IMAGE_RATIO,
      height: width * IMAGE_RATIO,
      grid: this.grid
    })

    this.punchBox = new GridRectangle({
        x: x + 1,
        y: y,
        width: 1,
        height: width * HEIGHT_RATIO,
        grid: this.grid
    })

    if (this.faceLeft) {
      this.boundingBox.setX(x - width * 0.6)
    }
  }
  
  _drawBoxerRight(currentImage, context) {
    context.drawImage(currentImage, 
      this.imageBox.xPixels(), 
      this.imageBox.yPixels(), 
      this.imageBox.widthPixels(), 
      this.imageBox.heightPixels()
    );
  }

  _drawBoxerLeft(currentImage, context) {
    context.save()
    context.translate(this.imageBox.xPixels() + this.imageBox.widthPixels(), this.imageBox.yPixels());
    context.scale(-1,1);
    context.drawImage(currentImage, 0, 0, this.imageBox.widthPixels(), this.imageBox.heightPixels());
    context.restore()
  }
  
  _drawBox(context, gridRectangle, color, lineWidth) {
    context.beginPath();  
    context.rect(gridRectangle.xPixels(), gridRectangle.yPixels(),
    gridRectangle.widthPixels(), gridRectangle.heightPixels());
    context.lineWidth = lineWidth;
    context.strokeStyle = color
    context.stroke();        
  }

  _drawPunchBox(context) {
    this._drawBox(context, this.punchBox, "#00FF00", 2)
  }

  _drawBoundingBox(context) {
    this._drawBox(context, this.boundingBox, "#0000FF", 4)
  }
  
  _drawImageBox(context) {
    this._drawBox(context, this.imageBox, "#666666", 7)
  }
  
  _soundAvailable() {
    return typeof window.Audio === 'function';
  }

  _loadSounds() {
    this.sounds = {};
    if (this._soundAvailable()) {
      let dizzy = new Audio();
      dizzy.src = SOUNDS.DIZZY;
      let walk = new Audio();
      walk.src = SOUNDS.WALK;
      walk.loop = true;
      let punch = new Audio();
      punch.src = SOUNDS.PUNCH;
      let hurt = new Audio();
      hurt.src = SOUNDS.HURT;
      let ko = new Audio();
      ko.src = SOUNDS.KO;
      let ok = new Audio();
      ok.src = SOUNDS.OK;
      this.sounds[STATES.PUNCH_UP] = punch;
      this.sounds[STATES.PUNCH_LEFT] = punch;
      this.sounds[STATES.PUNCH_RIGHT] = punch;
      this.sounds[STATES.DIZZY] = dizzy;
      this.sounds[STATES.HURT] = hurt;
      this.sounds[STATES.WALK] = walk;
      this.sounds[STATES.WALK_BACK] = walk;
      this.sounds[STATES.KO] = ko;
      this.sounds[STATES.OK] = ok;
    }
  }

  _loadAnimations() {
    this.frames = {};
    let keys = Object.keys(STATES);
    
    for (var x = 0; x < keys.length; x++) {
      var key = keys[x];
      var state = STATES[key];
      this.frames[state] = [];
      this._loadAnimation(FRAMES[state], this.frames[state]);
    }
  }

  _loadAnimation(sourceList, destinationList) {
    for (var x = 0; x < sourceList.length; x++) {
      var image = new Image();
      image.src = sourceList[x];
      destinationList.push(image);
      destinationList.push(image);
    }
  }

  _makeDizzySlower() {
    let newDizzy = [];
    let frames = this.frames[STATES.DIZZY];

    for (var x = 0; x < frames.length; x++) {
      newDizzy.push(frames[x]);
      newDizzy.push(frames[x]);
      newDizzy.push(frames[x]);
    }

    this.frames[STATES.DIZZY] = newDizzy;
  }

  _currentAnimation() {
    return this.frames[this.state];
  }

  _advanceFrame() {
    this.currentFrame += 1;

    if (this.currentFrame < this._currentAnimation().length) {
      return;
    }

    let behavior = STATE_BEHAVIOR[this.state];

    switch (behavior) {
      case BEHAVIOR.LOOP:
        this.currentFrame = 0;
        break;
      case BEHAVIOR.STOP:
        this.currentFrame -= 1;
        break;
      case BEHAVIOR.RETURN:
        this._stateTransition(this.returnState);
        this.returnState = STATES.IDLE;
    }
  }

  _tryMoveX(moveLength, sceneBoundingBox) {
    let priorX = this.boundingBox.getX()
    this.boundingBox.setX(this.boundingBox.getX() + moveLength)

    if (!this.boundingBox.inside(sceneBoundingBox)) {
      this.boundingBox.setX(priorX)
      return
    }

    this.punchBox.setX(this.punchBox.getX() + moveLength)
    this.imageBox.setX(this.imageBox.getX() + moveLength)
  }

  _handleMovement(scene) {
    let sceneBoundingBox = scene.getBoundingBox()

    if (this.state == STATES.WALK) {
      this._tryMoveX(MOVE_LENGTH, sceneBoundingBox)
      return
    }

    if (this.state == STATES.WALK_BACK) {
      this._tryMoveX(-MOVE_LENGTH, sceneBoundingBox)
    }
  }

  _playSound() {
    let self = this;
    let sound = this.sounds[this.state];

    if (sound != null) {
      sound.play();
    }
  }

  _stopSound() {
    let sound = this.sounds[this.state];

    if (sound != null) {
      sound.pause();
      sound.currentTime = 0;
    }
  }
}