// show the bounding box and make it smaller

let GridRectangle = require('./gridRectangle.1')
let STATES = require('./boxerStates')
let FRAMES = require('./boxerFrames')
let SOUNDS = require('./boxerSounds')
let BEHAVIOR = require ('./animationBehavior')
let STATE_BEHAVIOR = require('./boxerStateBehavior')
let MOVE_LENGTH = 0.1;
let Dot = require('./dot.1')
let HEIGHT_RATIO = 1.6
let IMAGE_RATIO = 2.3
let IMAGE_X_OFFSET_RATIO = 0.95
let IMAGE_Y_OFFSET_RATIO = 0.5

module.exports = 
class Boxer {
  constructor(input) {
    this._loadAnimations();
    this._loadSounds();
    this._makeDizzySlower();
    this.grid = input.grid;
    this.faceLeft = input.faceLeft === undefined ? false : input.faceLeft;
    this.returnState = STATES.IDLE;
    this.idle();
    this._setBoxes(input)
    this._setDots()
  }

  render(context) {  
    this._drawImageBox(context);
    this._drawBoundingBox(context);
    let currentImage = this._currentAnimation()[this.currentFrame];

    if (this.faceLeft) {
      this._drawBoxerLeft(currentImage, context)
    } else {
      this._drawBoxerRight(currentImage, context)
    }

    this._advanceFrame();
    this._moveDots();
    this.dot.render(context);
    this.dot2.render(context);
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

  idle() {
    this._playerSwitchToState(STATES.IDLE);
  }

  punchLeft() {
    this._playerSwitchToState(STATES.PUNCH_LEFT);
  }

  punchRight() {
    this._playerSwitchToState(STATES.PUNCH_RIGHT);
  }

  block() {
    this._playerSwitchToState(STATES.BLOCK);
  }

  dizzy() {
    this._playerSwitchToState(STATES.DIZZY);
  }

  hurt() {
    this._playerSwitchToState(STATES.HURT);
  }

  ko() {
    this._playerSwitchToState(STATES.KO);
  }

  punchUp() {
    this._playerSwitchToState(STATES.PUNCH_UP);
  }

  walk() {
    this._playerSwitchToState(STATES.WALK);
  }

  walkBack() {
    this._playerSwitchToState(STATES.WALK_BACK);
  }

  ok() {
    this._playerSwitchToState(STATES.OK);
  }

  stop() {
    this._playerSwitchToState(STATES.STOP);
  }

  stopBlock() {
    if (this.state === STATES.BLOCK) {
      this._switchToState(this.returnState);
    }
  }

  stopWalk() {
    if (this.state === STATES.WALK) {
      this._stopSound();
      this._switchToState(this.returnState);
    }
  }

  stopWalkBack() {
    if (this.state === STATES.WALK_BACK) {
      this._stopSound();
      this._switchToState(this.returnState);
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

  // Private Functions //

  _moveLength() {
    if (this.shiftMode) {
      return MOVE_LENGTH * 10;
    } else {
      return MOVE_LENGTH;
    }
  }

  _switchToState(state) {
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

  _playerSwitchToState(state) {
    if (this.state !== state) {
      this._stopSound();
    }

    this._switchToState(state);
  }

  _setBoxes(input) {
    let x = input.x === undefined ? 0 : input.x;
    let y = input.y === undefined ? 0 : input.y;
    let width = input.width === undefined ? 1 : input.width
    this.boundingBox = new GridRectangle({x: x, y: y, width: width, height: width * HEIGHT_RATIO, grid: this.grid});
    this.imageBox = new GridRectangle({
      x: x - width * IMAGE_X_OFFSET_RATIO, 
      y: y - width * IMAGE_Y_OFFSET_RATIO,
      width: width * IMAGE_RATIO,
      height: width * IMAGE_RATIO,
      grid: this.grid
    });
  }
  
  _setDots() {
    this.dot = new Dot({
      x: this.imageBox.xPixels(), 
      y: this.imageBox.yPixels(), 
      width: this.grid.pixels(0.5)
    });
    this.dot2 = new Dot({
      x: this.boundingBox.xPixels(), 
      y: this.boundingBox.yPixels(), 
      width: this.grid.pixels(0.3)
    });
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
    context.translate(this.x + currentImage.width, this.y);
    context.scale(-1,1);
    context.drawImage(currentImage, 0, 0, this.imageBox.widthPixels(), this.imageBox.heightPixels());
  }
  
  _drawBox(context, gridRectangle, color, lineWidth) {
    context.beginPath();  
    context.rect(gridRectangle.xPixels(), gridRectangle.yPixels(),
    gridRectangle.widthPixels(), gridRectangle.heightPixels());
    context.lineWidth = lineWidth;
    context.strokeStyle = color
    context.stroke();        
  }

  _drawBoundingBox(context) {
    this._drawBox(context, this.boundingBox, "#0000FF", 4)
  }
  
  _drawImageBox(context) {
    this._drawBox(context, this.imageBox, "#666666", 7)
  }

  _moveDots() {
    this.dot.x = this.imageBox.xPixels();
    this.dot.y = this.imageBox.yPixels();
    this.dot2.x = this.boundingBox.xPixels();
    this.dot2.y = this.boundingBox.yPixels();
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
        this._switchToState(this.returnState);
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