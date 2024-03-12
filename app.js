const newGame = document.getElementById("newGame");
const globalScore = document.getElementsByClassName("global");
const currentScore = document.getElementsByClassName("current");

const rollDice = document.getElementById("rollDice");
const resultOfDice = document.getElementById("result");
const hold = document.getElementById("hold");

const circlePlayerActive = document.getElementsByClassName("fa-circle");

const gameBoardPlayerOne = document.getElementsByClassName("playerOne");
const gameBoardPlayerTwo = document.getElementsByClassName("playerTwo");

let arrayScore = [];
let activePlayer = 0;
let resultOfDiceRoll = 2;

newGame.addEventListener("click", startNewGame);
rollDice.addEventListener("click", rollDiceGame);
hold.addEventListener("click", holdScore);

function startNewGame() {
  for (element of globalScore) {
    element.firstChild.textContent = 0;
  }
  for (element of currentScore) {
    element.firstChild.textContent = 0;
  }
  arrayScore = [];
  gameActiveDisplay();
}

function rollDiceGame() {
  resultOfDiceRoll = Math.floor(Math.random() * 6 + 1);
  arrayScore.push(resultOfDiceRoll);
  let totalCurrentScore = 0;

  if (resultOfDiceRoll == 1) {
    currentScore[activePlayer].innerHTML = 0;
    arrayScore = [];
    switchPlayer();
  } else {
    for (let i = 0; i < arrayScore.length; i++) {
      totalCurrentScore += arrayScore[i];
      currentScore[activePlayer].innerHTML = totalCurrentScore;
    }
  }
  getDiceImg()
}

function holdScore() {
  let globalNumber = Number(globalScore[activePlayer].innerHTML);
  globalNumber += Number(currentScore[activePlayer].innerHTML);
  globalScore[activePlayer].innerHTML = globalNumber;
  // currentScore[activePlayer].innerHTML = 0;
  arrayScore = [];

  gameWin();
  switchPlayer();
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  gameActiveDisplay();
}

function gameActiveDisplay() {
  if (activePlayer === 0) {
    circlePlayerActive[0].style.visibility = "visible";
    circlePlayerActive[1].style.visibility = "hidden";
    gameBoardPlayerOne[0].classList.add("bgColor");
    gameBoardPlayerTwo[0].classList.remove("bgColor");
  } else {
    circlePlayerActive[0].style.visibility = "hidden";
    circlePlayerActive[1].style.visibility = "visible";
    gameBoardPlayerOne[0].classList.remove("bgColor");
    gameBoardPlayerTwo[0].classList.add("bgColor");
  }
}

function gameWin() {
  if (globalScore[activePlayer].innerHTML >= 100) {
    // setTimeout(() => {
    //   alert(`Player ${activePlayer +1}, Vous avez gagné!`)},1000);
    alert(`Player ${activePlayer + 1}, vous avez gagné!`);
  }
}

function getDiceImg() {
  resultOfDice.setAttribute("src", `/images/dice${resultOfDiceRoll}.png`);
}
