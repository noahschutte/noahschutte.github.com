var BoardView = function() {
  for (i = 0; i < 24; i++) {
    $('#boardView').append('<tr id="row-' + i + '"></tr>')
  }
  for (i = 0; i < 24; i++) {
    for (c = 0; c < 10; c++) {
      $('#row-' + i).append('<td class="col-' + c + '">[]</td>')
    }
  }
}

BoardView.prototype.renderBoard = function(board) {
  for (var r = 0; r < board.grid.length; r++) {
    for (var c = 0; c < board.grid[r].length; c++) {
      if (board.grid[r][c] === "X" || board.grid[r][c] === "C") {
        $('#row-' + r + ' .col-' + c).addClass('full');
      }
      if (board.grid[r][c] === "X") {
        $('#row-' + r + ' .col-' + c).addClass('active');
      }
    }
  }
}

BoardView.prototype.clearBoard = function(board) {
  for (var r = 0; r < board.grid.length; r++) {
    for (var c = 0; c < board.grid[r].length; c++) {
      $('#row-' + r + ' .col-' + c).removeClass('full');
      $('#row-' + r + ' .col-' + c).removeClass('active');
    }
  }
}
