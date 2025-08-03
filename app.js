import {
  MongoDBQuestions,
  ExpressQuestions,
  ReactQuestions,
  NodeQuestions,
} from "./questions.js";


// variable for Questions
const showQuestions = document.getElementById("questions");
const allcoursesCards = document.getElementById("quizCards");
const quizcardTitle = document.getElementById("cardTitle");
const quitQuizBtn = document.getElementById("quitBtn");

// variables for Result  
const resultCard = document.getElementById("result");
const resultCardTitle = document.getElementById("resultTitle");
const scoreDisplay = document.getElementById("score");
const percentageDisplay = document.getElementById("percentage");
const exitResultBtn = document.getElementById("exitResult");

// mongo DB
document.getElementById("mongoBtn").addEventListener("click", () => {
  quizcardTitle.innerHTML = "MongoDB Quiz";
  resultCardTitle.innerHTML = "MongoDB Quiz";
  quizPage();
  startQuiz(MongoDBQuestions);
});

// express js
document.getElementById("expressBtn").addEventListener("click", () => {
  quizcardTitle.innerHTML = "Express.js Quiz";
  resultCardTitle.innerHTML = "Express.js Quiz";
  quizPage();
  startQuiz(ExpressQuestions);
});

// react js
document.getElementById("reactBtn").addEventListener("click", () => {
  quizcardTitle.innerHTML = "React.js Quiz";
  resultCardTitle.innerHTML = "React.js Quiz";
  quizPage();
  startQuiz(ReactQuestions);
});

// node js 
document.getElementById("nodeBtn").addEventListener("click", () => {
  quizcardTitle.innerHTML = "Node.js Quiz";
  resultCardTitle.innerHTML = "Node.js Quiz";
  quizPage();
  startQuiz(NodeQuestions);
});

// start Quiz
const quizPage = () => {
  showQuestions.style.display = "flex";
  allcoursesCards.style.display = "none";
};

// quit Quiz
const Quit = () => {
  showQuestions.style.display = "none";
  allcoursesCards.style.display = "flex";
  quizHeader.style.display = 'block'
};

// show questions

const Question = document.getElementById("questionDisplay");
const Options = document.getElementById("optionsDisplay");
const nextBtn = document.getElementById("nextBtnDisplay");
const quizHeader = document.getElementById("header")

const startQuiz = (questions) => {
  let currentIndex = 0;
  let score = 0;
  quizHeader.style.display = 'none'
  nextBtn.innerHTML = "Next";

  const showQuestion = () => {
    Options.innerHTML = "";
    let currentQuestion = questions[currentIndex];
    let QuestionNumber = currentIndex + 1;
    Question.innerHTML = `${QuestionNumber}. ${currentQuestion.question}`;

    currentQuestion.options.forEach((eachOption) => {
      const button = document.createElement("button");
      button.textContent = eachOption;
      button.classList.add("btn");
      Options.appendChild(button);

      button.addEventListener("click", () => {
        if (eachOption === currentQuestion.correctOption) {
          button.classList.add("correct");
          score++;
        } else {
          button.classList.add("wrong");
        }

        Array.from(Options.children).forEach((btn) => {
          if (btn.textContent === currentQuestion.correctOption) {
            btn.classList.add("correct");
          }
          btn.disabled = true;
        });
      });
    });
  };

  // quit quiz
  quitQuizBtn.addEventListener("click", () => {
    Quit();
    currentIndex = 0;
    score = 0;
  });

  // exit quiz
  exitResultBtn.addEventListener("click", () => {
    Quit();
    currentIndex = 0;
    score = 0;
  });

  // next question
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  // result
  const showResult = () => {
    resultCard.style.display = "flex";
    quizcardTitle.style.display = "flex";
    scoreDisplay.innerHTML = `Your score is ${score} out of ${questions.length}`;
    showQuestions.style.display = "none";
    const percent = Math.round((score / questions.length) * 100);
    percentageDisplay.innerHTML = percent + "%";
    exitResultBtn.innerHTML = "Exit";
  };
  showQuestion();
};
