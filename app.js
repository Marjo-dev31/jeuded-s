const newGame = document.getElementById("newGame");
const globalScore = document.getElementsByClassName("global");
const currentScore = document.getElementsByClassName("current");

const rollDice = document.getElementById("rollDice");
const resultOfDice = document.getElementById("result");
const currentScorePlayerOne = document.getElementById("currentPlayerOne");
let array = [];

function startNewGame() {
  for (element of globalScore) {
    element.firstChild.textContent = 0;
  }
  for (element of currentScore) {
    element.firstChild.textContent = 0;
  }
  array = [];
}

newGame.addEventListener("click", startNewGame);

function rollDiceGame() {
  resultOfDice.innerHTML = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  array.push(Number(resultOfDice.innerHTML));
  console.log(array, "toto");

  let total = 0;

  if (resultOfDice.innerHTML == 1) {
    currentScorePlayerOne.innerHTML = 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    currentScorePlayerOne.innerHTML = total;
    console.log(total, "titi");
  }
  return;
}

rollDice.addEventListener("click", rollDiceGame);
