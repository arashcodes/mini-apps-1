let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let playerO = false;

// click functionality and players taking turns
let squares = document.getElementsByClassName("square");

for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = function (event) {
    let idx = event.target.id;
    if (event.target.innerHTML === '' && playerO === false) {
      event.target.innerHTML = 'X'
      playerO = true;
      board.splice(idx, 1, 'X');
    } else if (event.target.innerHTML === '' && playerO === true) {
      event.target.innerHTML = 'O'
      playerO = false;
      board.splice(idx, 1, 'O');
    } else if (event.target.innerHTML !== '') {
      return null;
    }
    winner();
  };
}

// refresh the board
let refresh = function () {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }
}

// rules of the game: win or tie
let winner = function () {
  if (board[0] === board[1] && board[1] === board[2]) {
    alert('Player ' + board[0] + ' Wins')
    refresh();
  }
  else if (board[3] === board[4] && board[4] === board[5]) {
    alert('Player ' + board[3] + ' Wins')
    refresh();
  }
  else if (board[6] === board[7] && board[7] === board[8]) {
    alert('Player ' + board[6] + ' Wins')
    refresh();
  }
  else if (board[0] === board[3] && board[3] === board[6]) {
    alert('Player ' + board[0] + ' Wins')
    refresh();
  }
  else if (board[1] === board[4] && board[4] === board[7]) {
    alert('Player ' + board[1] + ' Wins')
    refresh();
  }
  else if (board[2] === board[5] && board[5] === board[8]) {
    alert('Player ' + board[2] + ' Wins')
    refresh();
  }
  else if (board[0] === board[4] && board[4] === board[8]) {
    alert('Player ' + board[0] + ' Wins')
    refresh();
  }
  else if (board[2] === board[4] && board[4] === board[6]) {
    alert('Player ' + board[2] + ' Wins')
    refresh();
  }
  else {
    let result = null;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === 'X' || board[i] === 'O') {
        result = `It's a tie!`;
      } else {
        return null;
      }
    }
    alert(result);
    refresh();
  }
}