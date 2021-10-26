var scoreCount = 0;
var timer = 75;
var timerInterval;
var startButton = document.querySelector ("#startBtn");
var headerOne = document.querySelector ("h1");
var userContainer = document.querySelector (".container");
var description = document.querySelector(".description");
var answerContainer = document.querySelector(".answerContainer");
var count = document.querySelector(".count");
var timerHTML = document.querySelector(".timer");
var allScores = [];
var ol = document.createElement ("ol");
var highScore = []
var buttonBox1 = document.createElement ("section");
var buttonBox2 = document.createElement ("section");
var buttonBox3 = document.createElement ("section");
var buttonBox4 = document.createElement ("section");
var buttonBox5 = document.createElement ("section");
var enterInitialsBox = document.createElement ("section")
var button1 = document.createElement ("button");
var button2 = document.createElement ("button");
var button3 = document.createElement ("button");
var button4 = document.createElement ("button");
var reveal = document.createElement ("p");
var enterIn = document.createElement("p");
var input = document.createElement ("input");
var submitB = document.createElement ("input");
var resetB = document.createElement ("button");
var clearScoreB = document.createElement ("button");
var inputingScore = document.createElement ("li");

function startQuiz (){
  
  // Changing Initial HTML Elements to Quiz Format //
  headerOne.textContent = "Which of the following is not JavaScript Data Types?";
  description.textContent = " ";
  description.setAttribute ("style", "margin: 0px; border: none");
  startButton.style.display = "none";
  count.textContent = "Answered Correct: " + scoreCount;
  timerHTML.textContent = "Timer: " + timer;
  answerContainer.style.display = "none";
  userContainer.appendChild(buttonBox1);
  buttonBox1.setAttribute ("style", "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: solid 1px gray;"); 
  
  
  
  appButtons1();

  // Adding Text to New Appended Buttons //
  button1.textContent = "Undefined";
  button2.textContent = "Number";
  button3.textContent = "Boolean";
  button4.textContent = "Float";

  // True False Answers //
  button1.value = "false";
  button2.value = "false";
  button3.value = "false";
  button4.value = "true";
  
  buttonBox1.addEventListener("click", function (event){
      questionTwo (event);
  })
  
}

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

// Updating Score //
function updatingScore (){

  var completeList = JSON.parse(localStorage.getItem("userInfo"));
  var addToCompleteList = []
  
  if (completeList != null){
      addToCompleteList = completeList;
  }
  
  if (input != null){

      var userInfo = {
          initials: input.value,
          score: timer
      }
  console.log(userInfo);
  addToCompleteList.push(userInfo);

  localStorage.setItem("userInfo", JSON.stringify(addToCompleteList));
  }
  
  renderHighS ();
}

// Switch to High Score View //
function highScoreForm (){
  headerOne.textContent = "High Scores";
  enterIn.textContent = ""
  startButton.style.display = "none"
  input.style.display = "none";
  submitB.style.display = "none";
  reveal.style.display = "none";
  description.textContent = "";
  description.appendChild (ol);
  ol.setAttribute ("style", "list-style-position: inside; margin-left: -30px");
  description.style.flexDirection = "column";
  container.appendChild(resetB);
  container.appendChild(clearScoreB);
  container.setAttribute ("style", "flex-direction: row; justify-content: center; border-bottom: solid 1px gray")
  resetB.textContent = "Play Again!";
  clearScoreB.textContent = "Reset Scores";
  description.style.justifyContent = "center";

}

// Switch to save score form //
function changeForm (){
  userContainer.appendChild(enterInitialsBox);
  enterInitialsBox.setAttribute ("style", "display: flex; flex-direction: row; justify-content: flex-start; padding: 10px; border-bottom: solid 1px gray");
  enterInitialsBox.style.justifyContent = "flex-start";
  enterInitialsBox.style.flexDirection = "row";
  description.style.display = "visible";
  description.textContent = "Your Final score is " + timer;

  enterInitialsBox.appendChild (enterIn);
  enterIn.textContent = "Enter Your Initials:";

  enterInitialsBox.appendChild (input);
  input.setAttribute("type", "text");
  input.setAttribute ("name", "FullName");
  input.setAttribute ("placeholder", "Initials");
  input.setAttribute ("style", "margin: 0px 10px");

  enterInitialsBox.appendChild (submitB);
  submitB.setAttribute ("type", "submit");
  submitB.setAttribute ("value", "Submit");
  submitB.setAttribute ("style", "margin: 0px 10px; font-size: 24px; background-color: purple; color: white");
}

// Function to view high score //
function viewHighScores (){
  
  // Removing from HTML //
  highScoreForm ();
  updatingScore ();
  
  event.stopPropagation()
  resetB.addEventListener("click", function (){
  location.reload();
  });

  clearScoreB.addEventListener("click", function (){
      localStorage.clear();
      description.textContent = "";
      return;
  })
}

// End saveScore Menu //
function storeScore (event){
  var element = event.target;

  if (element.matches("button")){

      timerCheck(element);
      clearInterval(timerInterval);
      // Removing Buttons From HTML //
      headerOne.textContent = "All Done!";
      button1.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "none";
      button4.style.display = "none";
      
      changeForm();
      

      submitB.addEventListener("click", function (){
          viewHighScores ();
          })
  }
}

// Question 5 Function //
function questionFive (event){
  var element = event.target;
  console.log(element);

  if (element.matches("button")){

      //Erasing Buttons & Appending New Set
      buttonBox4.innerHTML = "";
      userContainer.appendChild(buttonBox5);
      buttonBox5.setAttribute ("style", "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: solid 1px gray;");
      appButtons5();
          
      timerCheck(element);  

      // Adding New Question & Answer Text //
      headerOne.textContent = "Choose the correct HTML element for the largest heading: ";
      button1.textContent = "<head>";
      button2.textContent = "<h1>";
      button3.textContent = "<h6>";
      button4.textContent = "<heading>";

      // True False Answers //
      button1.value = "false";
      button2.value = "true";
      button3.value = "false";
      button4.value = "false";

      buttonBox5.addEventListener("click", function (event){
          storeScore (event);
      })
  } 
}


// Question 4  //
function questionFour (event){
  var element = event.target;
  console.log(element);

  if (element.matches("button")){

      //Erasing Buttons & Appending New Set
      buttonBox3.innerHTML = "";
      userContainer.appendChild(buttonBox4);
      buttonBox4.setAttribute ("style", "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: solid 1px gray;");
      appButtons4();
          
      timerCheck(element);    

      // Adding New Question & Answer Text //
      headerOne.textContent = "What does HTML stand for?";
      button1.textContent = "Home Tool Markup Language";
      button2.textContent = "Hyperlinks and Test Markup Language";
      button3.textContent = "Hyper Through Mass Language";
      button4.textContent = "Hyper Test Markup Language";

      // Answers //
      button1.value = "false";
      button2.value = "false";
      button3.value = "false";
      button4.value = "true";

      buttonBox4.addEventListener("click", function (event){
          questionFive (event);
      });
  } 
}

// Question 3 //
function questionThree (event){
  var element = event.target;
  console.log(element);

  if (element.matches("button")){

      //Erasing Buttons & Appending New Set
      buttonBox2.innerHTML = "";
      userContainer.appendChild(buttonBox3);
      buttonBox3.setAttribute ("style", "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: solid 1px gray;");
      appButtons3();
          
      timerCheck(element);

      // Adding New Question & Answer Text //
      headerOne.textContent = "What is the correct to link Javascript file to the HTML file?";
      button1.textContent = "<meta>";
      button2.textContent = "<head>";
      button3.textContent = "<script>";
      button4.textContent = "<style>";

      // Answers //
      button1.value = "false";
      button2.value = "false";
      button3.value = "true";
      button4.value = "false";

      buttonBox3.addEventListener("click", function (event){
          questionFour (event);
      }); 
  } 
}

// Question 2 //
function questionTwo (event){
  var element = event.target;
  console.log(element);

  if (element.matches("button")){

      userContainer.appendChild (reveal);
      reveal.setAttribute ("style", "font-size: 16px; color: gray; font-style: italic; border-bottom: solid 2px gray; padding-bottom: 10px;")
      
      buttonBox1.innerHTML = "";
      userContainer.appendChild(buttonBox2);
      buttonBox2.setAttribute ("style", "display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; border-bottom: solid 1px gray;");
      appButtons2(); 

      timerCheck(element);

      // Adding New Question & Answer Text //
      headerOne.textContent = "Which company developed JavaScript?";
      button1.textContent = "Netscape";
      button2.textContent = "Bell Labs";
      button3.textContent = "Sun Microsystems";
      button4.textContent = "IBM";

      // Answers //
      button1.value = "true";
      button2.value = "false";
      button3.value = "false";
      button4.value = "false";

      
      buttonBox2.addEventListener("click", function (event){
      questionThree (event);
  });
  }      
}




//Start Button//
startButton.addEventListener ("click", function(){
  startQuiz ();
  timerCountdown();
});
 

// Function to decrease time if incorrect answer//
function timerCheck(element){
  if (element.value == "true"){
      scoreCount++;
      count.textContent = "Answered Correct: " + scoreCount;
      reveal.textContent = "You answered the last question Correct!";
  } else {
      
      if (timer >= 10){
          timer = timer - 10;
          timerHTML.textContent = "Timer: " + timer;
          reveal.textContent = "You answered the last question Wrong!";
      } else {
          timer = 0;
          timerHTML.textContent = "Timer: " + timer;

      }
  }
}

// Functions to append buttons to new button to boxes //
function appButtons1(){
buttonBox1.appendChild (button1);
buttonBox1.appendChild (button2);
buttonBox1.appendChild (button3);
buttonBox1.appendChild (button4);
}

function appButtons2(){
  buttonBox1.remove();
  buttonBox2.innerHTML = "";
  buttonBox2.appendChild (button1);
  buttonBox2.appendChild (button2);
  buttonBox2.appendChild (button3);
  buttonBox2.appendChild (button4);
}

function appButtons3(){
  buttonBox2.remove();
  buttonBox3.innerHTML = "";
  buttonBox3.appendChild (button1);
  buttonBox3.appendChild (button2);
  buttonBox3.appendChild (button3);
  buttonBox3.appendChild (button4);
}

function appButtons4(){
  buttonBox3.remove();
  buttonBox4.innerHTML = "";
  buttonBox4.appendChild (button1);
  buttonBox4.appendChild (button2);
  buttonBox4.appendChild (button3);
  buttonBox4.appendChild (button4);
}

function appButtons5(){
  buttonBox4.remove();
  buttonBox5.innerHTML = "";
  buttonBox5.appendChild (button1);
  buttonBox5.appendChild (button2);
  buttonBox5.appendChild (button3);
  buttonBox5.appendChild (button4);
}