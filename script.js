let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const gameOptions = ["Rock", "Paper", "Scissors"];
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

// Declaring Win, loss or Draw
function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection === computerSelection:
      container.textContent = `It's a Draw Score: P-${playerScore} & C-${computerScore}`;
      break;
    case playerSelection === "Rock" && computerSelection === "Scissors":
    case playerSelection === "Paper" && computerSelection === "Rock":
    case playerSelection === "Scissors" && computerSelection === "Paper":
      playerScore++;
      container.textContent = `You Won Score: P-${playerScore} & C-${computerScore}`;
      break;
    default:
      computerScore++;
      container.textContent = `You Lose! ${computerSelection} beats ${playerSelection} Score: P-${playerScore} & C-${computerScore}`;
  }
}

function playGame(e) {
  const playerSelection = e.target.textContent;
  const computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
  showScore();
}

const buttons = document.querySelectorAll("button");
const container = document.querySelector(".container");
buttons.forEach((button) => button.addEventListener("click", playGame));

// Declaring final winner
function showScore() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      container.textContent = "You Won";
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      container.textContent = "Computer Won";
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === playerScore) {
      container.textContent = "It's a draw";
      playerScore = 0;
      computerScore = 0;
    }
  }
}
