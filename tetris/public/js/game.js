$(document).ready(function() {

  $('#start-game-button').on('click', function(event) {
    game.startGameCycle();
  })

function Game() {
  this.board = new Board();
  this.boardView = new BoardView();
  this.frameRate = 25;
  this.coreTimer = 0;
  this.timeRunning = 0;
  this.difficultyLevel = 1;
  this.activePiece = this.newPiece();
  this.intervalId = null
}

var shapesArray = ["L", "J", "T", "LINE", "Z", "S", "BOX"]

Game.prototype.newPiece = function() {
  return new Piece(shapesArray[Math.floor(Math.random()*7)], "red")
};

var game = new Game();

Game.prototype.updateTime = function() {
  $('#timer').html(this.secondsRunning());
};

Game.prototype.secondsRunning = function() {
  return Math.floor(this.coreTimer / this.frameRate);
};

Game.prototype.coreGameLoop = function() {
  if (!this.board.deadSquareAtTop(this.board)) {
    this.coreTimer++;

    if (this.coreTimer % 10 === 0) {
      this.updateTime();
    }

    if (this.coreTimer % 10 === 0) {
      if (this.board.canMoveDown(this.activePiece)) {
        this.activePiece.moveDown();
      } else {
        this.board.settle(this.activePiece);
        this.activePiece = this.newPiece();
      }
    };
    this.board.clearActivePiece();
    this.board.placeActivePiece(this.activePiece);
    this.boardView.clearBoard(this.board);
    this.boardView.renderBoard(this.board);
    this.board.deleteCompleteRows(this.board);
  } else {
    this.endGameCycle()
  }
};

Game.prototype.startGameCycle = function() {
  this.intervalId = setInterval(this.coreGameLoop.bind(this), 1000 / this.frameRate);
};

Game.prototype.endGameCycle = function() {
  clearInterval(this.intervalId)
  $('#hidden').show();
};

$(document).on('keyup', function(event) {
    if(event.keyCode == 37 && game.board.canMoveLeft(game.activePiece)) {
      game.activePiece.moveLeft();
    };
    if(event.keyCode == 38 && game.board.canRotate(game.activePiece)) {
      game.activePiece.rotate();
    };
    if(event.keyCode == 39 && game.board.canMoveRight(game.activePiece)) {
      game.activePiece.moveRight();
    };
    if(event.keyCode == 40 && game.board.canMoveDown(game.activePiece)) {
       game.activePiece.moveDown();
    };
  });

});

