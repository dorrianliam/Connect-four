var cells = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 'O';
const num = 7

function toggleTurn() {

  turn = turn == 'O' ? 'X' : 'O';
  demo.innerHTML = 'Turn : ' + turn;
  return turn;
}

function canvasClicked(cell) {
  var cellIndex = cell.getAttribute('cell');
  if (!cells[cellIndex]) {
    cells[cellIndex] = toggleTurn();
    if (turn == 'X') {
      cell.innerHTML = "<img src='images/yellow.png' style='width:80px; height:80px'>";
      $("td").eq(cellIndex - num).addClass("test2")
      $("td").eq(cellIndex - 1).addClass("animated bounceInDown ")
    } else {
      cell.innerHTML = "<img src='images/red.png' style='width:80px; height:80px'>";
      $("td").eq(cellIndex - num).addClass("test2")
      $("td").eq(cellIndex - 1).addClass("animated bounceInDown ")


    }
    checkWinner();
  }
}

function checkWinner() {
  winningCombinations = [
    [1, 2, 3, 4],
    [1, 7, 13, 19],
    [2, 3, 4, 5],
    [7, 13, 19, 25],
    [3, 4, 5, 6],
    [13, 19, 25, 31],
    [7, 8, 9, 10],
    [2, 8, 14, 20],
    [8, 9, 10, 11],
    [8, 14, 20, 26],
    [9, 10, 11, 12],
    [14, 20, 26, 32],
    [13, 14, 15, 16],
    [3, 9, 15, 21],
    [14, 15, 16, 17],
    [9, 15, 21, 27],
    [15, 16, 17, 18],
    [15, 21, 27, 33],
    [19, 20, 21, 22],
    [4, 10, 16, 22],
    [20, 21, 22, 23],
    [10, 16, 22, 28],
    [21, 22, 23, 24],
    [16, 22, 28, 34],
    [25, 26, 27, 28],
    [5, 11, 17, 23],
    [26, 27, 28, 29],
    [6, 12, 28, 24],
    [27, 28, 29, 30],
    [17, 23, 29, 35],
    [31, 32, 33, 34],
    [6, 12, 18, 24],
    [32, 33, 34, 35],
    [12, 18, 24, 30],
    [33, 34, 35, 36],
    [18, 24, 30, 36],
    [31, 26, 21, 16],
    [32, 27, 22, 17],
    [35, 28, 23, 18],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 10, 17, 24],
    [34, 27, 20, 13],
    [35, 28, 21, 14],
    [36, 29, 22, 15],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [6, 11, 16, 21],
    [26, 21, 16, 11],
    [27, 22, 17, 12],
    [25, 20, 15, 10],
    [28, 21, 14, 7],
    [29, 22, 15, 8],
    [30, 25, 16, 9]

  ]; //all possible combinations :P
  for (var index = 0; index < winningCombinations.length; index++) {
    winCond = winningCombinations[index];
    if (cells[winCond[0]] != 0 &&
      cells[winCond[0]] == cells[winCond[1]] &&
      cells[winCond[1]] == cells[winCond[2]] &&
      cells[winCond[2]] == cells[winCond[3]]) {
      alert(turn + ' is winner');
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
    $("table").addClass("test1")
  }
}

function restart() {
  location.reload();
};