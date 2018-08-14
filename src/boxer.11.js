// enforce bounding box against scene's bounding box

let GridRectangle = require('./gridRectangle.1')
let STATES = require('./boxerStates')
let FRAMES = require('./boxerFrames')
let SOUNDS = require('./boxerSounds')
let BEHAVIOR = require ('./animationBehavior')
let STATE_BEHAVIOR = require('./boxerStateBehavior')
let MOVE_LENGTH = 0.1;
let Dot = require('./dot.1')

module.exports = 
class Boxer {
  constructor(input) {
    this.idleFrames = [];
    this.punchLeftFrames = [];
    this.punchRightFrames = [];
    this._loadAnimations();
    this._loadSounds();
    this._makeDizzySlower();
    this.repeatAnimation = true;
    this.returnState = STATES.IDLE;
    this.idle();
    this.grid = input.grid;
    let x = input.x === undefined ? 0 : input.x;
    let y = input.y === undefined ? 0 : input.y;
    let width = input.width === undefined ? 1 : input.width
    this.imageBox = new GridRectangle({x: x, y: y, width: width, height: width, grid: this.grid});
    this.faceLeft = input.faceLeft === undefined ? false : input.faceLeft;
    this.dot = new Dot({x: this.xPixels(), y: this.yPixels, width: this.grid.pixels(0.5)});
    this.boundingBox = new GridRectangle({x: x, y: y, width: width, height: width, grid: this.grid});
  }

  render(context) {  
    this._drawBox(context);
    let currentImage = this._currentAnimation()[this.currentFrame];

    if (this.faceLeft) {
      this._drawBoxerLeft(currentImage, context)
    } else {
      this._drawBoxerRight(currentImage, context)
    }

    this._advanceFrame();
    this._moveDot();
    this.dot.render(context);
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
    return this.imageBox.xPixels();
  }

  yPixels() {
    return this.imageBox.yPixels();
  }  

  getState() {
    return this.state;
  }

  xPixels() {
    return this.imageBox.xPixels();
  }

  yPixels() {
    return this.imageBox.yPixels();
  }

  tick(scene) {
    this._handleMovement(scene);
  }

  switchToState(state) {
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

  playerSwitchToState(state) {
    if (this.state !== state) {
      this._stopSound();
    }

    this.switchToState(state);
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
    this.playerSwitchToState(STATES.IDLE);
  }

  punchLeft() {
    this.playerSwitchToState(STATES.PUNCH_LEFT);
  }

  punchRight() {
    this.playerSwitchToState(STATES.PUNCH_RIGHT);
  }

  block() {
    this.playerSwitchToState(STATES.BLOCK);
  }

  dizzy() {
    this.playerSwitchToState(STATES.DIZZY);
  }

  hurt() {
    this.playerSwitchToState(STATES.HURT);
  }

  ko() {
    this.playerSwitchToState(STATES.KO);
  }

  punchUp() {
    this.playerSwitchToState(STATES.PUNCH_UP);
  }

  walk() {
    this.playerSwitchToState(STATES.WALK);
  }

  walkBack() {
    this.playerSwitchToState(STATES.WALK_BACK);
  }

  ok() {
    this.playerSwitchToState(STATES.OK);
  }

  stop() {
    this.playerSwitchToState(STATES.STOP);
  }

  stopBlock() {
    if (this.state === STATES.BLOCK) {
      this.switchToState(this.returnState);
    }
  }

  stopWalk() {
    if (this.state === STATES.WALK) {
      this._stopSound();
      this.switchToState(this.returnState);
    }
  }

  stopWalkBack() {
    if (this.state === STATES.WALK_BACK) {
      this._stopSound();
      this.switchToState(this.returnState);
    }
  }

  shiftOn() {
    this.shiftMode = true;
  }

  shiftOff() {
    this.shiftMode = false;
  }

  moveLength() {
    if (this.shiftMode) {
      return MOVE_LENGTH * 10;
    } else {
      return MOVE_LENGTH;
    }
  }

  up() {
    this.imageBox.y -= this.moveLength();
  }

  down() {
    this.imageBox.y += this.moveLength();
  }

  left() {
    this.imageBox.x -= this.moveLength();
  }

  right() {
    this.imageBox.x += this.moveLength();
  }  

  // Private Functions //

  _drawBoxerRight(currentImage, context) {
    context.drawImage(currentImage, 
      this.xPixels(), 
      this.yPixels(), 
      this.imageBox.widthPixels(), 
      this.imageBox.heightPixels()
    );
  }

  _drawBoxerLeft(currentImage, context) {
    context.translate(this.x + currentImage.width, this.y);
    context.scale(-1,1);
    context.drawImage(currentImage, 0, 0, this.imageBox.widthPixels(), this.imageBox.heightPixels());
  }

  _drawBox(context) {
    context.beginPath();  
    context.rect(this.imageBox.xPixels(), this.imageBox.yPixels(),
    this.imageBox.widthPixels(), this.imageBox.heightPixels());
    context.lineWidth = 7;
    context.strokeStyle = "#FFFFFF"
    context.stroke();    
  }

  _moveDot() {
    this.dot.x = this.xPixels();
    this.dot.y = this.yPixels();
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
        this.switchToState(this.returnState);
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