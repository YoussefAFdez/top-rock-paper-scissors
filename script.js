document.addEventListener("DOMContentLoaded", main);

function main() {
  console.log(prompt("Choose your Action:"), getComputerChoice());
}

function playRound(playerChoice, computerChoice) {

}

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);

  // debugger;

  return choices[choice];
}