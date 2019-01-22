var cells = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 'one';
const num = 8
const num1 = 1

function toggleTurn() {

  turn = turn == 'one' ? 'two' : 'one';
  demo.innerHTML = 'Player: ' + turn;
  return turn;
}

function canvasClicked(cell) {
  var cellIndex = cell.getAttribute('cell');
  if (!cells[cellIndex]) {
    cells[cellIndex] = toggleTurn();
    if (turn == 'two') {
      cell.innerHTML = "<img src='images/red.png' style='width:80px; height:80px'>";
      $("td").eq(cellIndex - num).addClass("test2")
      $("td").eq(cellIndex - num1).addClass("animated bounceInDown ")
    } else {
      cell.innerHTML = "<img src='images/yellow.png' style='width:80px; height:80px'>";
      $("td").eq(cellIndex - num).addClass("test2")
      $("td").eq(cellIndex - num1).addClass("animated bounceInDown ")
    }
    checkWinner();
  }
}

function checkWinner() {
  winningCombinations = [
    [1, 2, 3, 4],
    [8, 9, 10, 11],
    [15, 16, 17, 18],
    [22, 23, 24, 25],
    [29, 30, 31, 32],
    [36, 37, 38, 39],
    [2, 3, 4, 5],
    [9, 10, 11, 12],
    [16, 17, 18, 19],
    [23, 24, 25, 26],
    [30, 31, 32, 33],
    [37, 38, 39, 40],
    [3, 4, 5, 6],
    [10, 11, 12, 13],
    [17, 18, 19, 20],
    [24, 25, 26, 27],
    [31, 32, 33, 34],
    [38, 39, 40, 41],
    [4, 5, 6, 7],
    [11, 12, 13, 10],
    [18, 19, 20, 21],
    [25, 26, 27, 28],
    [32, 33, 34, 35],
    [39, 40, 41, 42],

    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 10, 17, 24],
    [4, 11, 18, 25],
    [5, 12, 19, 26],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 22, 29, 36],
    [16, 23, 30, 37],
    [17, 24, 31, 38],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
    [21, 28, 35, 42],

    [22, 16, 10, 4],
    [29, 23, 17, 11],
    [23, 17, 11, 5],
    [36, 30, 24, 18],
    [30, 24, 18, 12],
    [37, 31, 25, 19],
    [31, 25, 19, 13],
    [25, 19, 13, 7],
    [38, 32, 26, 20],
    [32, 26, 20, 14],
    [39, 33, 27, 21],
    [28,20,12,4],
    [35,27,19,11],
    [27,19,11,3],
    [42,34,26,18],
    [34,26,18,10],
    [26,18,10, 2],
    [41,33,25,17],
    [33,25,17,9],
    [25,17,9,1],
    [40,32,24,16],
    [32,24,16,8],
    [39,31,23,15],

  ]; //all possible combinations :P
  for (var index = 0; index < winningCombinations.length; index++) {
    winCond = winningCombinations[index];
    if (cells[winCond[0]] != 0 &&
      cells[winCond[0]] == cells[winCond[1]] &&
      cells[winCond[1]] == cells[winCond[2]] &&
      cells[winCond[2]] == cells[winCond[3]]) {
      alert('Player ' + turn + ' is winner');
      playAgain();
      return;
    }
  }

  var allCellsFilled = 1;
  for (var index = 1; index < cells.length; index++) {
    if (!cells[index]) {
      allCellsFilled = 0;
      break;
    }
  }
  if (allCellsFilled) {
    alert('game finsihed in a draw');
    playAgain();
  }
}

function playAgain() { // just another function to reset the game
  y = confirm("PLAY AGAIN?");
  if (y == true) {
    location.reload();
  } else {
    alert('Good Bye Then!!');
  }
}

function restart() {
  location.reload();
};