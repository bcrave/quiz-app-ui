({
  plugins: ["jsdom-quokka-plugin"],
});

const answers = ["ShopCommerce", "All the above", "All the above"];
const userAnswers = [];
const totalAnswers = answers.length;

const results = document.getElementById("results");
const searchParams = new URLSearchParams(window.location.search);

const getNumOfCorrectAnswers = (object) => {
  let correctAnswers = 0;
  object.forEach((name) => {
    userAnswers.push(name);
  });
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === answers[i]) {
      correctAnswers++;
    }
  }
  return correctAnswers;
};

const numOfCorrectAnswers = getNumOfCorrectAnswers(searchParams);

results.append(
  `You got ${numOfCorrectAnswers} out of ${totalAnswers} questions right!`
);
