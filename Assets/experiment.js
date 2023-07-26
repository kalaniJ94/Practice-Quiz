var gameEnded = false;
var containers = document.querySelector("#container");

var timerEl = document.getElementById("timer-text");
var startButton = document.getElementById("start-button");
var questionBlank = document.getElementById("question-blank");
var intro = document.getElementById("intro")

var wordBlank = document.querySelector("#wordblank");

var questBox = document.getElementsByClassName("box")

var questions = [
  {
    question: "How many championships have the Green Bay Packers won in their history?",
    choices: ["13", "4", "0", "8"],
    correctAnswer: "13",
  },
  {
    question: "During what year was the United States Constitution ratified?",
    choices: ["1780", "1776 ", " 1788", "1778"],
    correctAnswer: "1788",
  }, {
    question: "Potatoes originated from which area?",
    choices: ["Morocco", "Russia", "Ireland", "Peru"],
    correctAnswer: "Peru",
  }, {
    question: "What year was the Iphone released",
    choices: ["2007", "2006", "2010", "2009"],
    correctAnswer: "2007",
  },
  {
    question: "What injury did Lord Nelson receive during the Napoleon Wars ",
    choices: ["Lost his arm", "Lost his leg", "Became incontinent", "Lost his ear"],
    correctAnswer: "true",
  },
  {
    question: "What is the name of Louise Belcher's favorite toy?",
    choices: ["Coochie Kopi", "Coochie Koo", "Coochie Wopi", "Coochie Belcher"],
    correctAnswer: "Coochie Kopi",
  },
];

var currentQuestionIndex = 0;
var highscore = 0;
var timer;

function startGame() {
  gameEnded = false;
  timerCount = 60;
  startTimer();
  showQuestion();
}

function startTimer() {
  // Starts timer
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount > 0) {
      startButton.disabled = true;
    }
    if (timerCount === 0) {
      clearInterval(timer);
      endgame();
    }
  }
    , 1000);
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    clearInterval(timer);
    endgame();
  }

  var currentQuestion = questions[currentQuestionIndex];
  questionBlank.innerHTML = currentQuestion.question;

  for (var i = 0; i < questBox.length; i++) {
    questBox[i].innerHTML = currentQuestion.choices[i];
    questBox[i].addEventListener("click", checkAnswer);
  }
}

function checkAnswer(event) {
  var element = event.target;
  var currentQuestion = questions[currentQuestionIndex];

  if (element.matches(".box")) {
    if (element.textContent === currentQuestion.correctAnswer) {
      highscore += 10;
      wordBlank.innerHTML = "Correct!";
    } else {
      wordBlank.innerHTML = "Wrong!";
      timerCount -= 10;
    }

    currentQuestionIndex++;
    setTimeout(function () {
      wordBlank.innerHTML = "";
      for (var i = 0; i < questBox.length; i++) {
        questBox[i].removeEventListener("click", checkAnswer);
      }
      showQuestion();
    }, 1000);
  }
}

function endgame() {
  if (!gameEnded) {
    gameEnded = true;
  }

  var initials = window.prompt(
    "Your score is: " + highscore + "! Enter your initials to view your place on the high score list!"
  );
  {
    if (!initials) {
      return;
    }
  }
  if (initials.length > 2) {
    window.alert("Please enter initials only");
    endgame();
    return;
  }
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push({ initials: initials, score: highscore });
  localStorage.setItem("highScores", JSON.stringify(highScores));

  var playAgain = window.confirm("Play again?");
  if (playAgain) {
    gameEnded = false;
    currentQuestionIndex = 0;
    highscore = 0;
    startGame();
  }
  else{
    window.alert("Thanks for playing!");
  }
}

startButton.addEventListener("click", startGame);
