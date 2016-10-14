var playerOne = true;
var board = document.getElementById('board');
var winnerFound = false;
var playerXScore = 0;
var playerOScore = 0;

// add event listener to the board
board.addEventListener('click', function(event) {
  if (winnerFound === false) {
    // Clicking on square with piece does nothing
    if (!$(event.target).hasClass('empty')) {
        return false;
    }
    // update board and switch players
    if (playerOne) {
      // write X on square clicked
      event.target.textContent = 'X';
      // added background color to the square clicked
      event.target.style.backgroundColor = '#d2b29b';
      // $(event.target).addClass('X');
      // removed the class 'empty' from the div clicked
      $(event.target).removeClass('empty');
      playerOne = false;
    } else {
      event.target.textContent = 'O';
      event.target.style.backgroundColor = '#7dd0b6';
      // $(event.target).addClass('O');
      $(event.target).removeClass('empty');
      playerOne = true;
    }
    // call checkWin function
    checkWin();
  }
});

// Possible winning combinations
var wins = [
  [first, second, third],
  [fourth, fifth, sixth],
  [seventh, eighth, ninth],
  [first, fourth, seventh],
  [second, fifth, eighth],
  [third, sixth, ninth],
  [first, fifth, ninth],
  [third, fifth, seventh]
];
// function to check if winner has been found
function checkWin() {
  // if there are no empty spaces, then its a draw!
  if ($('#board div').hasClass('empty') === false) {
    document.getElementById('won').innerHTML = "It's a tie!";
  }
// loops through the array of winning combinations
  for (var i = 0; i < wins.length; i++) {
    var combo = '';
    for (var j = 0; j < wins[i].length; j++) {
      combo += wins[i][j].innerHTML;
    }
    if (combo === 'XXX') {
      // Writes player X wins to the dom
      document.getElementById('won').innerHTML = 'Player X wins!';
      winnerFound = true;
      playerXScore += 1;
      // Keeps score by adding each win to player X
      document.getElementById('playerXScore').innerHTML = playerXScore;

    } else if (combo === 'OOO') {
      document.getElementById('won').innerHTML = 'Player O wins!';
      winnerFound = true;
      playerOScore += 1;
      document.getElementById('playerOScore').innerHTML = playerOScore;
    }
  }
}

// Function which clears the board
var clearBoard = function(event) {
  var clearSquares = document.getElementsByClassName('inGame');
  for (var i = 0; i < clearSquares.length; i++) {
    clearSquares[i].innerHTML = '';
    $('.inGame').addClass('empty');
    winnerFound = false;
    document.getElementById('won').innerHTML = '';
    clearSquares[i].style.backgroundColor = '#6B9796';
  }
};

// Button that calls the clear board function which resets to new game
var newGame = document.getElementById("reset");
reset.addEventListener('click', clearBoard);
