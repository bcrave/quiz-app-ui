let counter = 0;

// Question Counters
const questionCounter1 = document.getElementById("question-counter1");
const questionCounter2 = document.getElementById("question-counter2");
const questionCounter3 = document.getElementById("question-counter3");
const questionCounters = document.querySelectorAll(".question-counter");

// Questions
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const questions = document.querySelectorAll(".question");

// Answers
const answersGroup1 = document.getElementById("answers1");
const answersGroup2 = document.getElementById("answers2");
const answersGroup3 = document.getElementById("answers3");
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
