var scoreCount = 0;
var timer = 75;
var timerInterval;
var startButton = document.querySelector ("#startButton");
var headerOne = document.querySelector ("h1");
var userBox = document.querySelector (".userBox");
var description = document.querySelector(".description");
var answerBox = document.querySelector(".answerBox");
var count = document.querySelector(".count");
var timerHTML = document.querySelector(".timer");
var allScores = [];


// Countdown
function timerCountdown() {
  timerInterval = setInterval(function() {
    if (timer > 0){
    timer--
    timerHTML.textContent = "Timer: " + timer;      
    }
    if (timer <= 0){
      clearInterval (timerInterval);
      alert("GameOver");
      location.reload();
    }
    if (timer.value === "true"){
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Show highscore
function showHighscore () {
  var highScore = JSON.parse(localStorage.getItem('userInfo'));
  console.log(highScore);
  allScores = highScore;

  for (var i = 0; i < allScores.length; i++) {
    var singleScore = allScores[i];

    var li = document.createElement('li');
    li.textContent = 'Initials: ' + singleScore.initials + "Time: " +singleScore.score;
    
    ol.appendChild(li);
  }

}

