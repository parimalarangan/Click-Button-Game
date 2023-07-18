var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var timeInput = document.getElementById('timeInput');
var timer = document.getElementById('timer');
var scoreDisplay = document.getElementById('score');
var gameButton = document.getElementById('gameButton');
var score = 0;
var timeLeft = 10;
var gameRunning = false;
var countdown;

startButton.addEventListener('click', function() {
  var selectedTime = parseInt(timeInput.value, 10);
  if (selectedTime >= 10 && selectedTime <= 60) {
    startGame(selectedTime);
  } else {
    alert('Please enter a valid time between 10 and 60 seconds.');
  }
});

gameButton.addEventListener('click', function() {
  if (gameRunning) {
    score++;
    scoreDisplay.textContent = score;
  }
});

resetButton.addEventListener('click', function() {
  resetGame();
});

function startGame(time) {
  gameRunning = true;
  startButton.disabled = true;
  timeInput.disabled = true;
  gameButton.disabled = false;
  resetButton.disabled = true;
  score = 0;
  scoreDisplay.textContent = score;
  timeLeft = time;
  timer.textContent = timeLeft + ' seconds';

  countdown = setInterval(function() {
    timeLeft--;
    timer.textContent = timeLeft + ' seconds';

    if (timeLeft === 0) {
      clearInterval(countdown);
      gameButton.disabled = true;
      resetButton.disabled = false;
      gameRunning = false;
      alert('Time\'s up! Your final score is ' + score);
    }
  }, 1000);
}

function resetGame() {
  clearInterval(countdown);
  startButton.disabled = false;
  timeInput.disabled = false;
  gameButton.disabled = true;
  resetButton.disabled = true;
  timer.textContent = '10 seconds';
}

resetGame();
