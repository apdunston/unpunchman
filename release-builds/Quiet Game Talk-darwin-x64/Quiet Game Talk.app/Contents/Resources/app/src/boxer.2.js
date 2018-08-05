let STATES = {
  IDLE: 0,
  PUNCH_LEFT: 1,
  PUNCH_RIGHT: 2,
  BLOCKING: 3,
  DIZZY: 4,
  HURT: 5,
  KO: 6,
  PUNCH_UP: 7,
  WALK: 8,
  WALK_BACK: 9,
  STOP: 10
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
FRAMES[STATES.BLOCKING] = [
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

module.exports = 
class Boxer {
  constructor() {
    this.idleFrames = [];
    this.punchLeftFrames = [];
    this.punchRightFrames = [];
    this.loadAnimations();

    this.state = STATES.IDLE;
    this.currentFrame = 0;
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

  currentAnimation() {
    return this.frames[this.state];
  }

  advanceFrame() {
    this.currentFrame += 1;

    if (this.currentFrame < this.currentAnimation().length) {
      return;
    }

    if (this.state !== STATES.IDLE) {
      this.idle();
      return;
    }

    this.currentFrame = 0;
  }

  render(context) {
    context.drawImage(this.currentAnimation()[this.currentFrame], 10, 50);
    this.advanceFrame();
  }

  idle() {
    this.state = STATES.IDLE;
    this.currentFrame = 0;
  }

  punchLeft() {
    this.state = STATES.PUNCH_LEFT;
    this.currentFrame = 0;
  }

  punchRight() {
    this.state = STATES.PUNCH_RIGHT;
    this.currentFrame = 0;
  }

  block() {
    this.state = STATES.BLOCKING;
    this.currentFrame = 0;
  }

  dizzy() {
    this.state = STATES.DIZZY;
    this.currentFrame = 0;
  }

  hurt() {
    this.state = STATES.HURT;
    this.currentFrame = 0;
  }

  ko() {
    this.state = STATES.KO;
    this.currentFrame = 0;
  }

  punchUp() {
    this.state = STATES.PUNCH_UP;
    this.currentFrame = 0;
  }

  walk() {
    this.state = STATES.WALK;
    this.currentFrame = 0;
  }

  walkBack() {
    this.state = STATES.WALK_BACK;
    this.currentFrame = 0;
  }
}