"use strict";

var SingleDisplayGame = require('./game.js');
var Gamespace = require('../../gamespace.js');
var Colors = require('../../enums/colors.js');

module.exports = function() {
  var UnpunchGame = function UnpunchGame(keyboardDriver, display) {
    var self = this;

    SingleDisplayGame.call(self);
    this.display = display;
    this.displays = [display];
    this.keyboardDriver = keyboardDriver;
  };

  UnpunchGame.prototype = Object.create(SingleDisplayGame.prototype);

  UnpunchGame.prototype.start = function() {
    var self = this;

    if (this.playerNumber == null) {
      throw("Player number cannot be null");
    }

    SingleDisplayGame.prototype.start.call(self);

    this.reset();
  };

  UnpunchGame.prototype.drawLoop = function() {
    this.display.render();
  };

  UnpunchGame.prototype.clearDisplaysCommon = function() {
    SingleDisplayGame.prototype.clearDisplays.call(this);
    this.display.addObject(this.player);
    this.display.addObject(this.goalObject);
    this.display.addObject(this.countdownTimer);

    if (this.score) {
      this.display.addObject(this.score);
    }

    for (var x = 0; x < this.players.length; x++) {
      this.display.addObject(this.players[x]);
    }
  }

  UnpunchGame.prototype.clearDisplays = function() {
    this.clearDisplaysCommon();
    this.display.addObject(this.maze);
    this.drawLoop();
  };

  UnpunchGame.prototype.reset = function(maze) {
    this.players = [];
    this.addPlayer();
    this.countdownTimer.stop();
    this.countdownTimer.setTimeRemaining(this.timeRemaining);
    this.countdownTimer.start();
    this.won = false;

    if (maze == null || maze.drawMap == null) {
      var map = MazeData.generate(this.gridLength, this.gridLength);
      var drawMap = MazeData.translate(map);
      this.maze = new Maze(drawMap, this.squareLength);
    } else {
      this.maze = new Maze(maze.drawMap, this.squareLength);
    }
    
    this.player = new Player(this.gridLength, this.squareLength, this);
    var goalSquareLocation = this.gridLength * this.squareLength - this.squareLength / 2;
    this.goalObject = new Circle(goalSquareLocation, goalSquareLocation, this.squareLength / 4, "green");
    this.clearDisplays();
  };

  UnpunchGame.prototype.getMoveForEvent = function(evt) {
    var self = this;

    switch (evt.keyCode) {
      case Gamespace.LEFT_CODE:
        return function() {
          var success = self.player.left();          
          success && self.showerOfSparks(2, 0);
          return success;
        };
      case Gamespace.UP_CODE:
        return function() {
          var success = self.player.up()
          success && self.showerOfSparks(1, 1);
          return success;
        };
      case Gamespace.RIGHT_CODE:
        return function() {
          var success = self.player.right()
          success && self.showerOfSparks(0, 0);
          return success;
        };
      case Gamespace.DOWN_CODE:
        return function() {
          var success = self.player.down()
          success && self.showerOfSparks(1, -0.75);
          return success;
        };
    }

    return function() {};
  }

  UnpunchGame.prototype.performMove = function(move) {
    var self = this;
    var success = move();

    if (self.winCondition()) {
      self.win();
      return;
    }

    this.continueMovement(move, success);
  };

  UnpunchGame.prototype.keyDown = function (evt) {
    if (!this.running) {
      return;
    }
    var move = this.getMoveForEvent(evt);
    this.performMove(move);
  };

  UnpunchGame.prototype.winCondition = function() {
    return false
  };

  UnpunchGame.prototype.win = function() {
  };

  SingleDisplayGame.prototype.lose = function() {
  }

  return UnpunchGame;
}();