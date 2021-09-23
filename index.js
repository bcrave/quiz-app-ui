let counter = 0;
// Question Counters
const questionCounters = document.querySelectorAll(".question-counter");
// Questions
const questions = document.querySelectorAll(".question");
// Answers
const answersGroups = document.querySelectorAll(".answers");

const changeActiveElements = () => {
  // remove active classes
  questionCounters.forEach((question) => question.classList.remove("active"));
  questions.forEach((question) => question.classList.remove("active"));
  answersGroups.forEach((group) => group.classList.remove("active"));
  // add active classes
  questionCounters[counter].classList.add("active");
  questions[counter].classList.add("active");
  answersGroups[counter].classList.add("active");
};

// Buttons
const submitButton = document.querySelector("button[type=submit]");
const nextButton = document.querySelector(".next");
const backButton = document.querySelector(".back");

// Get next question
nextButton.addEventListener("click", () => {
  counter++;
  changeActiveElements();
  if (counter !== 0) backButton.classList.remove("hide");
  if (counter === questions.length - 1) {
    nextButton.classList.add("hide");
    submitButton.classList.remove("hide");
    return;
  }
});

// Go back to previous question
backButton.addEventListener("click", () => {
  counter--;
  changeActiveElements();
  if (counter < questions.length - 1) {
    nextButton.classList.remove("hide");
    submitButton.classList.add("hide");
  }
  if (counter === 0) {
    backButton.classList.add("hide");
  }
});
