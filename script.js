document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(playRound(prompt("Choose your action:"), getComputerChoice()));
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  //Loose: 0, Win: 1, Draw: 2
  let result = "";

  switch (playerChoice) {
    case "rock":
      if (computerChoice === "rock") result = 2;
      else if (computerChoice === "paper") result = 0;
      else result = 1;
      break;
    case "paper":
      if (computerChoice === "rock") result = 1;
      else if (computerChoice === "paper") result = 2;
      else result = 0;
      break;
    case "scissors":
      if (computerChoice === "rock") result = 0;
      else if (computerChoice === "paper") result = 1;
      else result = 2;
  }

  switch (result) {
    case 0:
      return `You loose! ${computerChoice} beats ${playerChoice}!`;
      break;
    case 1:
      return `You win! ${playerChoice} beats ${computerChoice}`;
      break;
    case 2:
      return `It's a Draw!`;
  }
}

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);

  return choices[choice];
}