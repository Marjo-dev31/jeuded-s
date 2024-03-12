const newGame = document.getElementById("newGame");
const globalScore = document.getElementsByClassName("global");
const currentScore = document.getElementsByClassName("current");

const rollDice = document.getElementById("rollDice");
const resultOfDice = document.getElementById("result");
const hold = document.getElementById('hold');

let arrayScore = [];
let activePlayer = 0;


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

  let totalCurrentScore = 0;

  if (resultOfDice.innerHTML == 1) {
    currentScore[activePlayer].innerHTML = 0;
    arrayScore = [];
    switchPlayer();
  } else {
    for (let i = 0; i < arrayScore.length; i++) {
      totalCurrentScore += arrayScore[i];
      currentScore[activePlayer].innerHTML = totalCurrentScore;
    }
  }
  return;
}

rollDice.addEventListener("click", rollDiceGame);


function holdScore() {
  
  let globalNumber = Number(globalScore[activePlayer].innerHTML);
  globalNumber += Number(currentScore[activePlayer].innerHTML);
  globalScore[activePlayer].innerHTML = globalNumber;
  currentScore[activePlayer].innerHTML = 0;
  arrayScore= []
  
  if (globalScore[activePlayer].innerHTML >= 100){
    setTimeout(() => {
      alert(`Player ${activePlayer + 1}, Vous avez gagné!`)},1000);
  }

  switchPlayer()
}

hold.addEventListener('click', holdScore)


function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1
  } else {
    activePlayer = 0
  }
}

