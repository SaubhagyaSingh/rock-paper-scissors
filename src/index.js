const computer_choice_display = document.getElementById("computer-choice");
const user_choice_display = document.getElementById("user-choice");
const result_display = document.getElementById("result");

let result;
let userchoice;
let computer_choice;
const possible_choices = document.querySelectorAll("button");

possible_choices.forEach((possible_choices) =>
  possible_choices.addEventListener("click", (e) => {
    userchoice = e.target.id;
    user_choice_display.innerHTML = userchoice;

    computer_choice == gencompchoice();
    console.log(computer_choice);
    computer_choice_display.innerHTML = computer_choice;
    getresults();
    result_display.innerHTML = result;
  })
);

function gencompchoice() {
  var random_number = Math.floor(Math.random() * 3) + 1;
  if (random_number === 1) {
    computer_choice = "rock";
    return computer_choice;
  } else if (random_number === 2) {
    computer_choice = "paper";
    return computer_choice;
  } else if (random_number === 3) {
    computer_choice = "scissors";
    return computer_choice;
  }
}

function getresults() {
  if (userchoice === computer_choice) {
    result = "DRAW!";
  } else if (computer_choice === "scissors" && userchoice === "paper") {
    result = "You Lost! :( ";
  } else if (computer_choice === "scissors" && userchoice === "rock") {
    result = "You Won! :) ";
  } else if (computer_choice === "rock" && userchoice === "scissors") {
    result = "You Lost! :( ";
  } else if (computer_choice === "rock" && userchoice === "paper") {
    result = "You Won! :) ";
  } else if (computer_choice === "paper" && userchoice === "rock") {
    result = "You Lost! :( ";
  } else if (computer_choice === "paper" && userchoice === "scissor") {
    result = "You Lost! :) ";
  }
}
