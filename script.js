'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 'meu saco';
document.querySelector('.score').textContent = 'meu saco';

// input number
document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//DOM Again button
/*
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  guess = Number((document.querySelector('.guess').value = ''));

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
});

// DOM Check Button
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  //IN CASE NOT PUT THE GUESS
  if (!guess) {
    document.querySelector('.message').textContent =
      'Invalid number. Put a valid number!';

    // WHEN WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🏆🎈Congrats! CORRECT number!🎈🏆';
    document.querySelector('.number').textContent = secretNumber + `😍`;
    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //HIGHER GUESS
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'TOO HIGH! Decrese it 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😰 You lost the game!';
    }
    //LOWER GUESS
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'TOO LOW! Increase it 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😰 You lost the game!';
    }
  }
});
