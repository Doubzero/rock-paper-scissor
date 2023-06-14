let playerScore = 0;
let compScore = 0;
let update = "";
const buttons = document.querySelectorAll("input");

function getComputerChoice() {
  let compChoice = ["rock", "paper", "scissor"];
  const randomComputerChoice = Math.floor(Math.random() * compChoice.length);
  const item = compChoice[randomComputerChoice];
  return item;
}

function playRound(playerSelection) {
  let compChoice = getComputerChoice();
  let result = "";
  if (
    (playerSelection == "rock" && compChoice == "scissor") ||
    (playerSelection == "paper" && compChoice == "rock") ||
    (playerSelection == "scissor" && compChoice == "paper")
  )
    playerScore++;
  result = `YOU WIN THE ROUND! Current Score: Computer: ${compScore} Player-score: ${playerScore}`;
  if (playerScore == 5) {
    result =
      "You win the Game!!!" +
      "Final Score:" +
      " " +
      "Computer Score:" +
      " " +
      compScore +
      "Player Score:" +
      " " +
      playerScore;
  } else if (playerSelection == compChoice) {
    result = `"Tie; No Change in Score Current Score: Computer: ${compScore} Player-score: ${playerScore}"`;
  } else {
    compScore++;
    result = `You lose this round. Current Score: Computer: ${compScore} Player-score: ${playerScore}`;
    if (compScore == 5) {
      result = `Computer wins the game!! Try again Current Score: Computer: ${compScore} Player-score: ${playerScore}`;
    }
  }
  document.getElementById("result").innerHTML = result;
}

//player choice
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    playRound(button.value);
  });
});
