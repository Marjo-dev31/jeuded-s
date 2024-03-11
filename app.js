const newGame = document.getElementById("newGame");
const globalScore = document.getElementsByClassName("global");
const currentScore = document.getElementsByClassName("current");

const rollDice = document.getElementById("rollDice");
const resultOfDice = document.getElementById("result");
const currentScorePlayerOne = document.getElementById("currentPlayerOne");
let arrayScore = [];

const hold = document.getElementById('hold');
const globalScorePlayerOne = document.getElementById('globalPlayerOne')

function startNewGame() {
  for (element of globalScore) {
    element.firstChild.textContent = 0;
  }
  for (element of currentScore) {
    element.firstChild.textContent = 0;
  }
  arrayScore = [];
}

newGame.addEventListener("click", startNewGame);

function rollDiceGame() {
  resultOfDice.innerHTML = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  arrayScore.push(Number(resultOfDice.innerHTML));

  let totalScore = 0;

  if (resultOfDice.innerHTML == 1) {
    currentScorePlayerOne.innerHTML = 0;
    arrayScore = [];
  } else {
    for (let i = 0; i < arrayScore.length; i++) {
      totalScore += arrayScore[i];
      currentScorePlayerOne.innerHTML = totalScore;
    }
  }
  return;
}

rollDice.addEventListener("click", rollDiceGame);


function holdScore() {
  
  let globalNumber = Number(globalScorePlayerOne.innerHTML)
  globalNumber += Number(currentScorePlayerOne.innerHTML)
  globalScorePlayerOne.innerHTML = globalNumber;
  currentScorePlayerOne.innerHTML = 0;
  arrayScore= []
  
  if (globalScorePlayerOne.innerHTML >= 100){
    setTimeout(() => {
      alert('Vous avez gagné!')},1000);
  }
}

hold.addEventListener('click', holdScore)
