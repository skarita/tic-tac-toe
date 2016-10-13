var first = document.getElementById('first');
// first.addEventListener('click', function() {
//   first.textContent = 'X';
// });
//
// var second = document.getElementById('second');

var playerOne = true;
var board = document.getElementById('board');
var winnerFound = false;
var playerXScore = 0;
var playerOScore = 0;

board.addEventListener('click', function(event) {
  console.log(event);

  // if there is a piece already on event.target, return false;
  // if (event.target.textContent = 'O' || 'X')
  // return false;
  // update board
  if (playerOne) {
    event.target.textContent = 'X';
    playerOne = false;
  } else {
    event.target.textContent = 'O';
    playerOne = true;
  }
  // switch players
  // if (playerOne) {
  //   playerOne = false;
  // } else {
  //   playerOne = true;
  // }

  // check for wins
  checkWin();
});

var board = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
// var labels= 'abcdefghi';
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

function checkWin() {

  // if there are no empty spaces, then its a draw!

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

var clearBoard = function(event) {
  var clearSquares = document.getElementsByClassName('inGame');
  for (var i = 0; i < clearSquares.length; i++) {
    clearSquares[i].innerHTML = '';
    winnerFound = false;
  }
};

var newGame = document.getElementById("reset");
reset.addEventListener('click', clearBoard);

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

// var getWinner = function() {
//   if (winnerIs('x')) {
//     return 'x';
//   }
//   if (winnerIs('o')) {
//     return 'o';
//   }
//   return null;
// };
//
// var winnerIs = function(player) {
//   return winsRow(player) || winsColumn(player) || winsDiagonal(player);
// };
//
// var winsRow = function(player) {
//   return allThree(player, cells('a'), cells('b'), cells('c')) ||
//          allThree(player, cells('d'), cells('e'), cells('f')) ||
//          allThree(player, cells('g'), cells('h'), cells('i'));
// };
//
// var winsColumn = function(player) {
//   return allThree(player, cells('a'), cells('d'), cells('g')) ||
//          allThree(player, cells('b'), cells('e'), cells('h')) ||
//          allThree(player, cells('c'), cells('f'), cells('i'));
// };
//
// var winsDiagonal = function(player) {
//   return allThree(player, cells('a'), cells('e'), cells('i')) ||
//          allThree(player, cells('c'), cells('e'), cells('g'));
// };
//
// var allThree = function(player, cellOne, cellTwo, cellThree) {
//   return (cellOne === player) && (cellTwo === player) && (cellThree === player);
// };
