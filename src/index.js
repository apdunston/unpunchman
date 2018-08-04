global.$ = require("jquery");
global.jQuery = $;
global.HC = require("hollow-cart");
global.HollowCart = HC.HollowCart;
global.Gamespace = HC.Gamespace;

global.AnimationDisplay = require("./animationDisplay.js");
global.Boxer = require("./boxer.js");
global.Boxer1 = require("./boxer.1.js");
global.Boxer2 = require("./boxer.2.js");
global.Boxer3 = require("./boxer.3.js");
global.Boxer4 = require("./boxer.4.js");
global.Boxer5 = require("./boxer.5.js");
global.Boxer6 = require("./boxer.6.js");
global.Boxer7 = require("./boxer.7.js");

var QuietGameTalk = function() {
  
  var idle = [
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

  var punch = [
    "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_000.png",
    "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_001.png",
    "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_002.png",
    "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_003.png",
    "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_004.png",
    "../assets/MiniBoxing/MiniBoxingSpriteLite/PunchLeft/__Boxing04_PunchLeft_005.png"
  ];

  function init() {
    this.hollowCart = new HollowCart();
    this.hollowCart.adjustCanvas(1,1);
    

    this.displaySpeed = 100;
    this.displayDriver = new HC.DisplayDriver($('canvas')[0], this.displaySpeed);
    this.canvas = this.displayDriver.getCanvas();
    this.context = this.displayDriver.getContext();
    this.display = new HC.Display(this.displayDriver);
    this.display.setColor("black");

    this.idleImages = [];
    
    for (var x = 0; x < idle.length; x++) {
      var image = new Image();
      image.src = idle[x];
      this.idleImages.push(image);
    }

    this.interrupt = false;
  }

  function render() {
    this.display.backgroundOnly = false;
    this.display.render();
  }

  function clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  function drawImage(src) {
    var self = this;
    var imageObj = new Image();

    imageObj.onload = function() {
      self.context.drawImage(imageObj, 10, 50);
    };
    imageObj.src = src;          
  }

  function drawIdle(x) {
    this.context.drawImage(this.idleImages[x], 10, 50);
  }

  function idleAnimation() {
    window.requestAnimationFrame(() => {idleFrame(this, 0)});
  }

  function idleFrame(self, x) {
    self.clearCanvas();
    self.render();
    self.drawIdle(x);
    if (x == self.idleImages.length - 1) {
      x = 0;
    }

    if (!self.interrupt) {
      window.requestAnimationFrame(() => {idleFrame(self, x+1)});
    }
  }

  return {
    frameDelay: 40,
    init: init,
    render: render,
    clearCanvas: clearCanvas,
    drawImage: drawImage,
    idle: idle,
    punch: punch,
    idleAnimation: idleAnimation,
    drawIdle: drawIdle
  }
}();

global.QuietGameTalk = QuietGameTalk;