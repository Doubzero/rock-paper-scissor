function getComputerChoice() {
  const compChoice = ["Rock", "Paper", "Scissor"];
  const randomComputerChoice = Math.floor(Math.random() * compChoice.length);
  let item = compChoice[randomComputerChoice];
  return item;
}
