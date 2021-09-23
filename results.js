({
  plugins: ["jsdom-quokka-plugin"],
});

const container = document.querySelector(".container");
const subheader = document.createElement("h2");
subheader.innerText = "It me, Gritty!";

container.appendChild(subheader);
