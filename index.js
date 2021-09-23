({
  plugins: ["jsdom-quokka-plugin"],
});

let counter = 0;

// Question Counters
const questionCounters = document.querySelectorAll(".question-counter");
// Questions
const questions = document.querySelectorAll(".question");
// Answers
const answersGroups = document.querySelectorAll(".answers");

const changeActiveElement = () => {
  // remove active classes
  questionCounters.forEach((question) => question.classList.remove("active"));
  questions.forEach((question) => question.classList.remove("active"));
  answersGroups.forEach((group) => group.classList.remove("active"));
  // add active classes
  questionCounters[counter].classList.add("active");
  questions[counter].classList.add("active");
  answersGroups[counter].classList.add("active");
};

// Submit Handler
const nextButton = document.querySelector(".next");
const submitButton = document.querySelector("button[type=submit]");

nextButton.addEventListener("click", () => {
  counter++;
  console.log(counter);
  changeActiveElement();

  if (counter === questions.length - 1) {
    nextButton.classList.add("hide");
    submitButton.classList.remove("hide");
    return;
  }
});
