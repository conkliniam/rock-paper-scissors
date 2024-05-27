const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WIN = "You win! ";
const LOSE = "You lose! ";
const PAPER_COVERS_ROCK = "Paper covers Rock";
const ROCK_SMASHES_SCISSORS = "Rock smashes Scissors";
const SCISSORS_CUT_PAPER = "Scissors cut Paper";
let humanScore = 0;
let computerScore = 0;
let round = 1;
const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
const rounds = document.querySelector("#rounds");
const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#computer-score");

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

function getRandomInt(from, through) {
  return Math.floor(Math.random() * through + from);
}

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    let computerChoice = getComputerChoice();
    let humanChoice;

    switch (event.target.id) {
      case "rock-btn":
        humanChoice = ROCK;
        break;
      case "paper-btn":
        humanChoice = PAPER;
        break;
      case "scissors-btn":
        humanChoice = SCISSORS;
        break;
    }

    playRound(humanChoice, computerChoice);
    checkForWinner();
  });
}

function playRound(humanChoice, computerChoice) {
  let roundText = `Round #${round}: you chose ${humanChoice}, computer chose ${computerChoice}, `;

  if (humanChoice === computerChoice) {
    roundText += `It's a tie!`;
  } else if (humanChoice === ROCK && computerChoice === PAPER) {
    roundText += LOSE + PAPER_COVERS_ROCK;
    computerScore++;
  } else if (humanChoice === ROCK && computerChoice === SCISSORS) {
    roundText += WIN + ROCK_SMASHES_SCISSORS;
    humanScore++;
  } else if (humanChoice === PAPER && computerChoice === ROCK) {
    roundText += WIN + PAPER_COVERS_ROCK;
    humanScore++;
  } else if (humanChoice === PAPER && computerChoice === SCISSORS) {
    roundText += LOSE + SCISSORS_CUT_PAPER;
    computerScore++;
  } else if (humanChoice === SCISSORS && computerChoice === ROCK) {
    roundText += LOSE + ROCK_SMASHES_SCISSORS;
    computerScore++;
  } else if (humanChoice === SCISSORS && computerChoice === PAPER) {
    roundText += WIN + SCISSORS_CUT_PAPER;
    humanScore++;
  }

  addRoundText(roundText);
  updateScores();
  round++;
}

function addRoundText(roundText) {
  const roundListItem = document.createElement("li");
  roundListItem.textContent = roundText;
  rounds.appendChild(roundListItem);
}

function updateScores() {
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
}

function checkForWinner() {
  if (humanScore >= 5) {
    results.textContent = WIN;
    disableButtons();
  } else if (computerScore >= 5) {
    results.textContent = LOSE;
    disableButtons();
  }
}

function disableButtons() {
  for (const button of buttons) {
    button.disabled = true;
  }
}
