let counter = 0;

const questionCounters = document.querySelectorAll(".question-counter");
const questions = document.querySelectorAll(".question");
const answersGroups = document.querySelectorAll(".answers");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  if (counter >= 2) return;
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
