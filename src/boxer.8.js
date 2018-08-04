let STATES = {
  IDLE: 0,
  PUNCH_LEFT: 1,
  PUNCH_RIGHT: 2,
  BLOCK: 3,
  DIZZY: 4,
  HURT: 5,
  KO: 6,
  PUNCH_UP: 7,
  WALK: 8,
  WALK_BACK: 9,
  STOP: 10,
  OK: 11
}

let FRAMES = {};
FRAMES[STATES.IDLE] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_009.png'
]; 
FRAMES[STATES.PUNCH_LEFT] = [
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_000.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_001.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_002.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_003.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_004.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_005.png"      
];
FRAMES[STATES.PUNCH_RIGHT] = [
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_000.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_001.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_002.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_003.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_004.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchRight/__Boxing04_PunchRight_005.png"      
];
FRAMES[STATES.BLOCK] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Blocking/__Boxing04_Blocking_009.png'    
];
FRAMES[STATES.DIZZY] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Dizzy/__Boxing04_Dizzy_007.png'
];
FRAMES[STATES.HURT] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Hurt/__Boxing04_Hurt_007.png'
];
FRAMES[STATES.KO] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_009.png'   
];
FRAMES[STATES.PUNCH_UP] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/PunchUp/__Boxing04_PunchUp_006.png'    
];
FRAMES[STATES.WALK] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Walk/__Boxing04_Walk_009.png'
];
FRAMES[STATES.WALK_BACK] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_000.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/WalkBack/__Boxing04_WalkBack_009.png'
];
FRAMES[STATES.STOP] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/Idle/__Boxing04_Idle_000.png',
];
FRAMES[STATES.OK] = [
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_009.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_008.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_007.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_006.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_005.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_004.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_003.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_002.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_001.png',
  '../assets/MiniBoxing/MiniBoxingSpriteLite/KO/__Boxing04_KO_000.png'   
];

SOUNDS = {
  DIZZY: "../assets/sounds/boxer/dizzy.wav",
  HURT: "../assets/sounds/boxer/hurt.wav",
  PUNCH: "../assets/sounds/boxer/punch.wav",
  WALK: "../assets/sounds/boxer/walk.wav",
  KO: "../assets/sounds/boxer/ko.wav",
  OK: "../assets/sounds/boxer/ok.wav"
}

let BEHAVIOR = {
  LOOP: 1,    // Replay the animation
  STOP: 2,    // Stop on the last frame
  RETURN: 3   // Return to idle animation
}

let STATE_BEHAVIOR = {};
STATE_BEHAVIOR[STATES.IDLE] =         BEHAVIOR.LOOP;
STATE_BEHAVIOR[STATES.PUNCH_LEFT] =   BEHAVIOR.RETURN;
STATE_BEHAVIOR[STATES.PUNCH_RIGHT] =  BEHAVIOR.RETURN;
STATE_BEHAVIOR[STATES.BLOCK] =        BEHAVIOR.LOOP;
STATE_BEHAVIOR[STATES.DIZZY] =        BEHAVIOR.LOOP;
STATE_BEHAVIOR[STATES.HURT] =         BEHAVIOR.RETURN;
STATE_BEHAVIOR[STATES.KO] =           BEHAVIOR.STOP;
STATE_BEHAVIOR[STATES.PUNCH_UP] =     BEHAVIOR.RETURN;
STATE_BEHAVIOR[STATES.WALK] =         BEHAVIOR.LOOP;
STATE_BEHAVIOR[STATES.WALK_BACK] =    BEHAVIOR.LOOP;
STATE_BEHAVIOR[STATES.STOP] =         BEHAVIOR.LOOP;
STATE_BEHAVIOR[STATES.OK] =           BEHAVIOR.RETURN;

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
    this.x = input.x || 10;
    this.y = input.y || 50;
    this.width = input.width || 400;
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

  render(context) {
    let currentImage = this.currentAnimation()[this.currentFrame];
    context.save();

    if (this.faceLeft) {
      context.translate(this.x + currentImage.width, this.y);
      context.scale(-1,1);
      context.drawImage(currentImage, 0, 0, this.width, this.width);
    } else {
      context.drawImage(currentImage, this.x, this.y, this.width, this.width);
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
}