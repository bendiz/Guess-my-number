let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const selectMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const selectNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const selectBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const selectNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const selectScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const selectHighScore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

const acessGuessValue = function (number) {
  document.querySelector('.guess').value = number;
};

const loseGame = function () {
  score = 0;
  selectScore(score);
  selectBackgroundColor('#d80000');
  selectMessage('You lost the game 💔');
  acessGuessValue(null);
};

const lowerScore = function () {
  score--;
  selectScore(score);
};

// STARTS THE GAME BY CLICKING CHECK! BUTTON
document.querySelector('.check').addEventListener('click', function playGame() {
  const guess = Number(document.querySelector('.guess').value);

  // NO INPUT
  if (!guess) {
    selectMessage('❌ No number');

    // PLAYER WINS
  } else if (guess === secretNumber) {
    selectMessage('🏆 YOU WIN!');
    selectBackgroundColor('#29e83c');
    selectNumberWidth('30rem');
    selectNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      selectHighScore(highScore);
    }

    // GUESS IS WRONG
  } else if (guess !== secretNumber) {
    lowerScore();
    selectMessage(guess > secretNumber ? '⏫ Too high!' : '⏬ Too low!');
  }
  if (score < 1) {
    loseGame();
  }
});

// RESETS THE GAME BY CLICKING AGAIN! BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  acessGuessValue('');
  selectNumber('?');
  selectBackgroundColor(null);
  selectNumberWidth(null);
  selectMessage('Start guessing...');
  selectScore(score);
});
