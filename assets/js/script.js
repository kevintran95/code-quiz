var scoreCount = 0;
var timer = 75;
var timerInterval;

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

