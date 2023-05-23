let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
  let compChoice = ["rock", "paper", "scissor"];
  const randomComputerChoice = Math.floor(Math.random() * compChoice.length);
  const item = compChoice[randomComputerChoice];
  return item;
}
function playRound(playerSelection, computerSelection) {
  if (computerSelection == "paper" && playerSelection === "rock") {
    compScore++;
    return "You Lose!, Paper Beats Rock";
  } else if (computerSelection == "rock" && playerSelection == "scissor") {
    compScore++;
    return "You Lose!, Rock beats Scissor";
  } else if (computerSelection == "scissor" && playerSelection == "paper") {
    compScore++;
    return "You Lose!, Scissor Beats Paper";
  } else if (computerSelection === playerSelection) {
    return "Draw";
  } else {
    playerScore++;
    return `You win! You chose ${playerSelection} and the computer chose ${computerSelection}`;
  }
}

function getPlayerChoice() {
  let choicePlayer = prompt("Enter Rock, Paper Or Scissor").toLowerCase();
  return choicePlayer;
}
function game() {
  console.log(playRound(getPlayerChoice(), getComputerChoice()));
  console.log(playRound(getPlayerChoice(), getComputerChoice()));
  console.log(playRound(getPlayerChoice(), getComputerChoice()));
  console.log(playRound(getPlayerChoice(), getComputerChoice()));
  console.log(playRound(getPlayerChoice(), getComputerChoice()));

  if (playerScore == 5) {
    finalScore();
    return "You win the game!!";
  } else if (compScore == 5) {
    finalScore();
    return "You lose the game!!";
  } else {
    finalScore();
    return "Draw";
  }
}
function finalScore() {
  console.log(
    `The Final score is ${playerScore} for player One and ${compScore} for computer`
  );
}
game();
