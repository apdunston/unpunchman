let idleFrames = [
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

let punchFrames = [
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_000.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_001.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_002.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_003.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_004.png",
  "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_005.png"
];

let STATES = {
  IDLE: 0,
  PUNCH: 1
}

module.exports = 
class Boxer {
  constructor() {
    this.idleFrames = [];
    this.punchFrames = [];

    for (var x = 0; x < idleFrames.length; x++) {
      var image = new Image();
      image.src = idleFrames[x];
      this.idleFrames.push(image);
      this.idleFrames.push(image);
    }

    for (var x = 0; x < punchFrames.length; x++) {
      var image = new Image();
      image.src = punchFrames[x];
      this.punchFrames.push(image);
      this.punchFrames.push(image);
    }

    this.state = STATES.IDLE;
    this.currentFrame = 0;
  }

  currentAnimation() {
    switch (this.state) {
      case STATES.IDLE: 
        return this.idleFrames;
      case STATES.PUNCH:
        return this.punchFrames;
    }
  }

  advanceFrame() {
    this.currentFrame += 1;

    if (this.currentFrame < this.currentAnimation().length) {
      return;
    }

    if (this.state === STATES.PUNCH) {
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

  punch() {
    this.state = STATES.PUNCH;
    this.currentFrame = 0;
  }
}