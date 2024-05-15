const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WIN = "You win! ";
const LOSE = "You lose! ";
const PAPER_COVERS_ROCK = "Paper covers Rock";
const ROCK_SMASHES_SCISSORS = "Rock smashes Scissors";
const SCISSORS_CUT_PAPER = "Scissors cut Paper";

function getComputerChoice() {
  switch (getRandomInt(1, 3)) {
    case 1:
      return ROCK;
    case 2:
      return PAPER;
    case 3:
      return SCISSORS;
  }
}

function getHumanChoice() {
  let humanChoice = prompt(
    `Enter "Rock", "Paper", or "Scissors":`
  )?.toLowerCase();

  while (!isValidChoice(humanChoice)) {
    humanChoice = prompt(
      'Invalid choice, enter "Rock", "Paper", or "Scissors":'
    )?.toLowerCase();
  }

  return humanChoice;
}

function isValidChoice(choice) {
  return (
    choice === undefined ||
    choice === ROCK ||
    choice === PAPER ||
    choice === SCISSORS
  );
}

function getRandomInt(from, through) {
  return Math.floor(Math.random() * through + from);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    playRound(humanChoice, computerChoice);
  }

  let finalScore = `You: ${humanScore}, Computer: ${computerScore}`;
  if (computerScore > humanScore) {
    console.log(LOSE + finalScore);
  } else if (humanScore > computerScore) {
    console.log(WIN + finalScore);
  } else {
    console.log("It's a tie! " + finalScore);
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie, both players chose ${humanChoice}`);
    } else if (humanChoice === ROCK && computerChoice === PAPER) {
      console.log(LOSE + PAPER_COVERS_ROCK);
      computerScore++;
    } else if (humanChoice === ROCK && computerChoice === SCISSORS) {
      console.log(WIN + ROCK_SMASHES_SCISSORS);
      humanScore++;
    } else if (humanChoice === PAPER && computerChoice === ROCK) {
      console.log(WIN + PAPER_COVERS_ROCK);
      humanScore++;
    } else if (humanChoice === PAPER && computerChoice === SCISSORS) {
      console.log(LOSE + SCISSORS_CUT_PAPER);
      computerScore++;
    } else if (humanChoice === SCISSORS && computerChoice === ROCK) {
      console.log(LOSE + ROCK_SMASHES_SCISSORS);
      computerScore++;
    } else if (humanChoice === SCISSORS && computerChoice === PAPER) {
      console.log(WIN + SCISSORS_CUT_PAPER);
      humanScore++;
    }
  }
}
