const quizData = [
  {
    question: "what is the first letter in the alphabet?",
    options: ["G", "F", "A", "T"],
    answer: "A"
  },
  {
    question: "what is the last letter in the alphabet?",
    options: ["Z", "V", "R", "Y"],
    answer: "Z"
  },
  {
    question: "what is the letter come after L?",
    options: ["C", "M", "Q", "N"],
    answer: "M"
  },
 {
    question: " which one is small letter G? ",
    options: ["h", "e", "i", "g"],
    answer: "g"
  },
 {
    question: " which word is start with letter B?",
    options: ["Ball", "Cat", "Apple", "Dog"],
    answer: "Ball"
  },
{
    question: " What letter comes after A in the English alphabet?",
    options: ["B", "C", "A", "D"],
    answer: "B"
  },
 {
    question: " Which of the following words starts with the letter  O ?",
    options: ["Banana", "Orange", "Cherry", "Dog"],
    answer: "Orange"
  },
 {
    question: " What letter comes before  G in the English alphabet?",
    options: ["A", "E", "F", "H"],
    answer: "F"
  },
 {
    question: " Which of the following words starts with the letter  M ?",
    options: ["Watermelon", "Monkey", "Lemon"],
    answer: "Monkey"
  },
 {
    question: " What letter comes after  R  in the English alphabet?",
    options: ["P", "Q", "T", "S"],
    answer: "S"
  }
];

const questionEl = document.querySelector(".question");
const optionsEl = document.querySelector(".options");
const submitBtn = document.querySelector("#submit");
const resultEl = document.querySelector(".result");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const question = quizData[currentQuestion].question;
  const options = quizData[currentQuestion].options;
  questionEl.textContent = question;
  optionsEl.innerHTML = "";
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const button = document.createElement("button");
    button.textContent = option;
    optionsEl.appendChild(button);
    button.addEventListener("click", () => {
      checkAnswer(button.textContent);
    });
  }
}

function checkAnswer(answer) {
  const correctAnswer = quizData[currentQuestion].answer;
  if (answer === correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  resultEl.textContent = `You scored ${score} out of ${quizData.length}!`;
}

loadQuestion();
submitBtn.addEventListener("click", () => {
  const selected = document.querySelector("button.selected");
  if (selected) {
    checkAnswer(selected.textContent);
  }
});
