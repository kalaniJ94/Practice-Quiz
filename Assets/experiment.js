var gameEnded = false;
var containers = document.querySelector("#container");

var timerEl = document.getElementById("timer-text");
var startButton = document.getElementById("start-button");

var questionBlank = document.getElementById("question-blank");
var wordBlank = document.querySelector("#wordblank");

var questBox = document.getElementsByClassName("box")

var questions = [
  {
    question: "Hello There",
    choices: ["true", "General Kenobi", "General Kenobi", "General Kenobi"],
    correctAnswer: "true",
  },
  {
    question: "Hello There",
    choices: ["true", "General Kenobi", "General Kenobi", "General Kenobi"],
    correctAnswer: "true",
  }, {
    question: "Hello There",
    choices: ["true", "General Kenobi", "General Kenobi", "General Kenobi"],
    correctAnswer: "true",
  }, {
    question: "Hello There",
    choices: ["true", "General Kenobi", "General Kenobi", "General Kenobi"],
    correctAnswer: "true",
  },
  {
    question: "Hello There",
    choices: ["true", "General Kenobi", "General Kenobi", "General Kenobi"],
    correctAnswer: "true",
  },
  {
    question: "Hello There",
    choices: ["true", "General Kenobi", "General Kenobi", "General Kenobi"],
    correctAnswer: "true",
  },
];

var currentQuestionIndex = 0;
var highscore = 0;
var timer;

function startGame() {
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
          endgame();
          clearInterval(timer);
      }
  }
      , 1000);
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    clearInterval(timer);
    endgame();
    return;
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
    if(!initials){
      return;
    }
  }
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push({ initials: initials, score: highscore });
  localStorage.setItem("highScores", JSON.stringify(highScores));

  var repeat = window.confirm("Play again?");
  if (repeat) {
    gameEnded = false;
    currentQuestionIndex = 0;
    highscore = 0;
    startGame();
  }
}

startButton.addEventListener("click", startGame);
