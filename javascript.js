function getComputerChoice() {
  const compChoice = ["Rock", "Paper", "Scissor"];
  const randomComputerChoice = Math.floor(Math.random() * compChoice.length);
  let item = compChoice[randomComputerChoice];
  return item;
}
function playRound(playerSelection, computerSelection) {
  if (computerSelection == "paper" && playerSelection == "rock") {
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
    console.log(
      `You win! You chose ${playerSelection} and the computer chose ${computerSelection}`
    );
    playerScore++;
  }
}
