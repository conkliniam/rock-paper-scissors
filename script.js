const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
const ROCK_STRING = "rock";
const PAPER_STRING = "paper";
const SCISSORS_STRING = "scissors";

function getComputerChoice() {
  const choice = getRandomInt(ROCK, SCISSORS);

  switch (choice) {
    case ROCK:
      return ROCK_STRING;
    case PAPER:
      return PAPER_STRING;
    case SCISSORS:
      return SCISSORS_STRING;
  }
}

function getRandomInt(from, through) {
  return Math.floor(Math.random() * through + from);
}
