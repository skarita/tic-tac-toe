var playerOne = true;
var board = document.getElementById('board');
var winnerFound = false;
var playerXScore = 0;
var playerOScore = 0;

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

// add event listener to the board
board.addEventListener('click', function(event) {
  if (winnerFound === false) {



    if (!$(event.target).hasClass('empty')) {
        return false;
    }
    // update board and switch players
    if (playerOne) {
      event.target.textContent = 'X';
      event.target.style.backgroundColor = '#FF68A8';
      // $(event.target).addClass('X');
      $(event.target).removeClass('empty');
      playerOne = false;
    } else {
      event.target.textContent = 'O';
      event.target.style.backgroundColor = '#4AF9F8';
      // $(event.target).addClass('O');
      $(event.target).removeClass('empty');
      playerOne = true;
    }
    // check for wins
    checkWin();

  }
});

// function to check if winner has been found
function checkWin() {

  // if there are no empty spaces, then its a draw!
  if ($('#board div').hasClass('empty') === false) {
    document.getElementById('won').innerHTML = "It's a tie!";
  }
  // return 'draw';

  for (var i = 0; i < wins.length; i++) {
    var combo = '';
    for (var O = 0; O < wins[i].length; O++) {
      combo += wins[i][O].innerHTML;
    }
    if (combo === 'XXX') {
      document.getElementById('won').innerHTML = 'Player X wins!';
      winnerFound = true;
      playerXScore += 1;
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
    clearSquares[i].style.backgroundColor = 'white';
  }
};

// Button that calls the clear board function which resets to new game
var newGame = document.getElementById("reset");
reset.addEventListener('click', clearBoard);


// var board = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
// var labels= 'abcdefghi';

// function isWinner(board) {
//   for (var i = 0; i < wins.length; i++) {
//     var a, b, c;
//     // these variable become what the board is holding 'x', 'o', or 0
//     a = board[wins[i][0]];
//     b = board[wins[i][1]];
//     c = board[wins[1][2]];
//
//     if(a == b && a == c && a !== 0) {
//       return a;
//     }
//   }
//   return false;
// }
