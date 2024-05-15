const ROCK_PAPER_SCISSORS = ["rock", "paper", "scissors"];
const ROCK_INDEX = 0;
const PAPER_INDEX = 1;
const SCISSORS_INDEX = 2;

function getComputerChoice() {
  const choiceIndex = getRandomInt(ROCK_INDEX, SCISSORS_INDEX);

  return ROCK_PAPER_SCISSORS[choiceIndex];
}

function getRandomInt(from, through) {
  return Math.floor(Math.random() * through + from);
}

function getHumanChoice() {
  let humanChoice = prompt(`Enter "rock", "paper", or "scissors":`);

  while (!ROCK_PAPER_SCISSORS.includes(humanChoice) && humanChoice !== null) {
    humanChoice = prompt(
      'Invalid choice, enter "rock", "paper", or "scissors":'
    );
  }

  return humanChoice;
}
