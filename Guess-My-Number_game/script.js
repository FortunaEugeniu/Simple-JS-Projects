'use strict';

let text = document.querySelector(".message");
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let guessValue = document.querySelector(".guess");
let highScore = document.querySelector(".highscore");
let body = document.querySelector("body");

let rightAnswer = "Correct Number! 🥳";
let secretNumber = getRandomNumber();

number.textContent = "?";
score.textContent = 20;
console.log(secretNumber);

guessValue.value = Number(document.addEventListener('keydown', () => console.log()));


function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}


function checkNumber() {
  let guess = +guessValue.value;

  if (!guess) {
    text.textContent = "No Number 🙅‍♂️";
    body.style.backgroundColor = "tomato";
  } else if (guess === secretNumber) {
    text.textContent = rightAnswer;
    number.textContent = secretNumber;

    if (score.textContent > highScore.textContent) {
      highScore.textContent = score.textContent;
    }

    body.style.backgroundColor = "#60b347";
  } else {
    score.textContent -= 1;

    if (guess > secretNumber) {
      text.textContent = "Too High 👇";
    } else {
      text.textContent = "Too Low 👆";
    }

    body.style.backgroundColor = "#222";
  }
}


const againButton = document
  .querySelector(".again")
  .addEventListener('click', () => {
    secretNumber = getRandomNumber();
    number.textContent = '?';
    score.textContent = 20;
    guessValue.value = "";
    body.style.backgroundColor = "#222";
  });


const checkButton = document
  .querySelector(".check")
  .addEventListener('click', checkNumber);
