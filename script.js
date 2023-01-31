let startButton = document.querySelector(".start-button");
let quizContainer = document.querySelector(".quiz-container");
let resultContainer = document.querySelector(".result-container");
let numberOfCurrentQuestion = document.querySelector(
  ".number-of-current-question"
);
let numberOfQuestions = document.querySelector(".number-of-questions");
let question = document.querySelector(".question");
let answers = document.querySelectorAll(".answer");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let next = document.querySelector(".next");
let userScore = document.querySelector(".user-score");
let restart = document.querySelector(".restart");

let currentQuestion = 0;
let score = 0;

const quizArray = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "Who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
  {
    id: "3",
    question: "Which of these foods will never spoil?",
    options: ["Cereal", "Honey", "Beef", "Beans"],
    correct: "Honey",
  },
  {
    id: "4",
    question: "How many rings appear on the Olympic flag?",
    options: ["1", "3", "5", "4"],
    correct: "5",
  },
];

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  quizContainer.style.display = "block";
  startQuiz();
});

function startQuiz() {
  numberOfQuestions.innerHTML = quizArray.length;
  quizCreater();
}

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  userScore.innerHTML = score;
}

function quizCreater() {
  numberOfCurrentQuestion.innerHTML = currentQuestion + 1;

  question.innerHTML = quizArray[currentQuestion].question;
  answer1.innerHTML = quizArray[currentQuestion].options[0];
  answer2.innerHTML = quizArray[currentQuestion].options[1];
  answer3.innerHTML = quizArray[currentQuestion].options[2];
  answer4.innerHTML = quizArray[currentQuestion].options[3];

  next.disabled = true;
}

function checkAnswer(userAnswer) {
  next.disabled = false;
  if (userAnswer.innerText === quizArray[currentQuestion].correct) {
    score++;
    userAnswer.classList.add("correct");
  } else {
    userAnswer.classList.add("incorrect");

    answers.forEach((ans) => {
      if (ans.innerText === quizArray[currentQuestion].correct) {
        ans.classList.add("correct");
      }
    });
  }

  disableTrue();
}

next.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion == quizArray.length) {
    showResult();
  } else {
    answers.forEach((answer) => removeClassName(answer));

    disableFalse();
    quizCreater();
  }
});

function removeClassName(answer) {
  if (answer.classList.contains("correct")) {
    answer.classList.remove("correct");
  }

  if (answer.classList.contains("incorrect")) {
    answer.classList.remove("incorrect");
  }
}

function disableFalse() {
  answer1.disabled = false;
  answer2.disabled = false;
  answer3.disabled = false;
  answer4.disabled = false;
}

function disableTrue() {
  answer1.disabled = true;
  answer2.disabled = true;
  answer3.disabled = true;
  answer4.disabled = true;
}

restart.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  quizContainer.style.display = "block";
  resultContainer.style.display = "none";

  answers.forEach((answer) => removeClassName(answer));

  disableFalse();
  startQuiz();
});
