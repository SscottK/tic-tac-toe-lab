/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

/*---------------------------- Variables (state) ----------------------------*/
let board;
let winner;
let tie;
let turn;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const resetButtonEl = document.querySelector("#reset");

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;
  render();
};

const render = () => {
  updateBoard();
  updateMessage();
};

const updateBoard = () => {
  squareEls.forEach((element) => {
    element.textContent = board[element.id];
  });
};

const handleClick = (event) => {
  const squareIndex = Number(event.target.id);
  if (
    event.target.textContent === "X" ||
    event.target.textContent === "O" ||
    winner === true
  ) {
    return;
  }

  placePiece(squareIndex);
  checkForWinner();
  chechForTie();
  switchPlayerTurn();
  render();
};

const updateMessage = () => {
  if (tie === true) {
    messageEl.textContent = "Cat's Game!";
  } else if (winner === true) {
    messageEl.textContent = `${turn} is the winner!`;
  } else {
    messageEl.textContent = `It is ${turn}'s turn!`;
  }
};

const placePiece = (index) => {
  if (board[index] === "") {
    board[index] = turn;
  }
};

const checkForWinner = () => {
  winningCombos.forEach((combo) => {
    if (
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]] &&
      board[combo[0]] !== ""
    ) {
      winner = true;
    }
  });
};

const chechForTie = () => {
  if (winner === false && !board.includes("")) {
    tie = true;
  }
};

const switchPlayerTurn = () => {
  if (winner === true) {
    return;
  } else if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
};

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach((square) => {
  square.addEventListener("click", handleClick);
});

addEventListener("load", init());

resetButtonEl.addEventListener("click", init);
