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
const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.value);

  if (counter >= 2) return;
  counter++;
  changeActiveElement();
});
