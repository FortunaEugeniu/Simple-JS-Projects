'use strict';

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0")
const current1El = document.querySelector("#current--1")
const section0El = document.querySelector(".player--0")
const section1El = document.querySelector(".player--1")

const diceEl = document.querySelector(".dice")

const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

// Starting condition.

let scores;
let currentScore;
let activePlayer;

function init() {

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden")
  section0El.classList.remove("player--winner")
  section1El.classList.remove("player--winner")
  section0El.classList.add("player--active")
  section1El.classList.remove("player--active")
  document.querySelector(`#name--0`).textContent = "Player 1"
  document.querySelector(`#name--1`).textContent = "Player 2"

  btnRoll.disabled = false
  btnHold.disabled = false

}
init();




// Rolling dice functionality.

function rollDice() {
  return Math.trunc(Math.random() * 6) + 1
}

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0
  currentScore = 0;
  section0El.classList.toggle("player--active")
  section1El.classList.toggle("player--active")
}

btnRoll.addEventListener("click", function () {

  const dice = rollDice()

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {

    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

  } else {
    switchPlayer()
  }
})

function showWinnerPlayer() {

  if (scores[activePlayer] >= 100) {

    btnHold.disabled = true;
    btnRoll.disabled = true;

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner")

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active")

    document
      .querySelector(`#name--${activePlayer}`)
      .textContent = document
        .querySelector(`#name--${activePlayer}`)
        .textContent + " Win"
  } else {
    switchPlayer()
  }
}

btnHold.addEventListener("click", function () {

  scores[activePlayer] += currentScore;
  document
    .getElementById(`score--${activePlayer}`)
    .textContent = scores[activePlayer]

  showWinnerPlayer()
})

btnNew.addEventListener("click", function () {
  init()
})


