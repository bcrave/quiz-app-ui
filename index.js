({
  plugins: ["jsdom-quokka-plugin"],
});

// Counters
let counter = 0;
let userScore = 0;

// Element Lists
const questionCounters = document.querySelectorAll(".question-counter");
const questions = document.querySelectorAll(".question");
const answersGroups = document.querySelectorAll(".answers");

const answerOptions = answersGroups[counter].children;

// Button
const buttons = document.querySelectorAll(".submit");
buttons[counter].addEventListener("click", (e) => {
  e.preventDefault();

  if (counter >= 2) return;

  /* Get user input */
  const answers = document.getElementsByName(`answer${counter + 1}_option`);
  answers.forEach((answer) => {
    console.log(answer.checked.classList);
    // if (answer.checked.classList.includes("correct")) {
    //   // do something
    // }
  });

  /* Get new question and answer set */
  counter++;
  // remove active classes
  questionCounters.forEach((question) => question.classList.remove("active"));
  questions.forEach((question) => question.classList.remove("active"));
  answersGroups.forEach((group) => group.classList.remove("active"));
  // add active classes
  questionCounters[counter].classList.add("active");
  questions[counter].classList.add("active");
  answersGroups[counter].classList.add("active");
});
