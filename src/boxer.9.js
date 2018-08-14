// Switch to Grid numbers
// Pull out the enums
// up, down, left, right

let GridRectangle = require('./gridRectangle.1')
let STATES = require('./boxerStates')
let FRAMES = require('./boxerFrames')
let SOUNDS = require('./boxerSounds')
let BEHAVIOR = require ('./animationBehavior')
let STATE_BEHAVIOR = require('./boxerStateBehavior')
let MOVE_LENGTH = 0.2;

module.exports = 
class Boxer {
  constructor(input) {
    this.idleFrames = [];
    this.punchLeftFrames = [];
    this.punchRightFrames = [];
    this.loadAnimations();
    this.loadSounds();
    this.makeDizzySlower();
    this.repeatAnimation = true;
    this.returnState = STATES.IDLE;
    this.idle();
    this.grid = input.grid;
    let x = input.x === undefined ? 0 : input.x;
    let y = input.y === undefined ? 0 : input.y;
    let width = input.width === undefined ? 1 : input.width
    this.rectangle = new GridRectangle({x: x, y: y, width: width, height: width, grid: this.grid});
    this.faceLeft = input.faceLeft === undefined ? false : input.faceLeft;
  }

  getState() {return this.state;}

  soundAvailable() {
    return typeof window.Audio === 'function';
  }

  loadSounds() {
    this.sounds = {};
    if (this.soundAvailable()) {
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

  loadAnimations() {
    this.frames = {};
    let keys = Object.keys(STATES);
    
    for (var x = 0; x < keys.length; x++) {
      var key = keys[x];
      var state = STATES[key];
      this.frames[state] = [];
      this.loadAnimation(FRAMES[state], this.frames[state]);
    }
  }

  loadAnimation(sourceList, destinationList) {
    for (var x = 0; x < sourceList.length; x++) {
      var image = new Image();
      image.src = sourceList[x];
      destinationList.push(image);
      destinationList.push(image);
    }
  }

  makeDizzySlower() {
    let newDizzy = [];
    let frames = this.frames[STATES.DIZZY];

    for (var x = 0; x < frames.length; x++) {
      newDizzy.push(frames[x]);
      newDizzy.push(frames[x]);
      newDizzy.push(frames[x]);
    }

    this.frames[STATES.DIZZY] = newDizzy;
  }

  currentAnimation() {
    return this.frames[this.state];
  }

  advanceFrame() {
    this.currentFrame += 1;

    if (this.currentFrame < this.currentAnimation().length) {
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

  flipHorizontally(img,x,y){
    // move to x + img's width
    ctx.translate(x+img.width,y);

    // scaleX by -1; this "trick" flips horizontally
    ctx.scale(-1,1);
    
    // draw the img
    // no need for x,y since we've already translated
    ctx.drawImage(img,0,0);
    
    // always clean up -- reset transformations to default
    ctx.setTransform(1,0,0,1,0,0);
  }

  getX() {
    return this.rectangle.getX()
  }

  getY() {
    return this.rectangle.getY()
  }

  setX(value) {
    this.rectangle.setX(value)
  }

  setY(value) {
    this.rectangle.setY(value)
  }

  xPixels() {
    return this.rectangle.xPixels();
  }

  yPixels() {
    return this.rectangle.yPixels();
  }

  render(context) {
    let currentImage = this.currentAnimation()[this.currentFrame];
    context.save();

    if (this.faceLeft) {
      context.translate(this.x + currentImage.width, this.y);
      context.scale(-1,1);
      context.drawImage(currentImage, 0, 0, this.rectangle.widthPixels(), this.rectangle.heightPixels());
    } else {
      context.drawImage(currentImage, 
        this.xPixels(), 
        this.yPixels(), 
        this.rectangle.widthPixels(), 
        this.rectangle.heightPixels()
      );
    }

    context.restore();
    this.advanceFrame();
  }

  playSound() {
    let self = this;
    let sound = this.sounds[this.state];

    if (sound != null) {
      sound.play();
    }
  }

  stopSound() {
    let sound = this.sounds[this.state];

    if (sound != null) {
      sound.pause();
      sound.currentTime = 0;
    }
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
    this.playSound();
  }

  playerSwitchToState(state) {
    if (this.state !== state) {
      this.stopSound();
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
      this.stopSound();
      this.switchToState(this.returnState);
    }
  }

  stopWalkBack() {
    if (this.state === STATES.WALK_BACK) {
      this.stopSound();
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
    // this.rectangle.setY(this.getY() - this.moveLength())
    this.rectangle.point.y -= this.moveLength();
  }

  down() {
    this.rectangle.point.y += this.moveLength();
  }

  left() {
    this.rectangle.point.x -= this.moveLength();
  }

  right() {
    this.rectangle.point.x += this.moveLength();
  }  
}