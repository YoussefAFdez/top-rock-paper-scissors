document.addEventListener("DOMContentLoaded", main);

function main() {

  console.log(playRound(prompt("Choose your action:"), getComputerChoice()));
}

/**
 * Evaluates the player choice and computer's and returns the result of the match
 * @param {*} playerChoice Choice asked from the player
 * @param {*} computerChoice Choice generated randomly
 * @returns The result of the game
 */
function playRound(playerChoice, computerChoice) {
  //Transform values to lower case for better comparison
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  //Loose: 0, Win: 1, Draw: 2
  let result = "";

  //We evaluate the game, and provide a result value (0 equals to loose, 1 equals to win, 2 equals to draw)
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

  //We evaluate the result, returning a value in each case
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

/**
 * Generates a number between 0 and 2, and returns a value of an array in this index.
 * @returns Random value between "Rock", "Paper", "Scissors"
 */
function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);

  return choices[choice];
}