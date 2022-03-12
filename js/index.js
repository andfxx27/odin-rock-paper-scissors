let playerScore = 0;
let computerScore = 0;

const possibleMove = ["Rock", "Paper", "Scissors"];

const buttons = document.querySelectorAll("button:not(#btn-replay)");
const btnReplay = document.querySelector("#btn-replay");
const computerScoreParagraph = document.querySelector(".computer-score");
const playerScoreParagraph = document.querySelector(".player-score");
const resultParagraph = document.querySelector(".result-paragraph");

// Return winner by checking both computer and player's score
const checkForWinner = (computerScore, playerScore) => {
  // Winner is the first to reach score of 5
  let winner = "";
  const winningScore = 5;
  if (computerScore === winningScore) {
    winner = "computer";
  } else if (playerScore === winningScore) {
    winner = "player";
  }

  return winner;
};

// Represent computer move, will return either 1 of possibleMove
function computerPlay() {
  return possibleMove[Math.floor(Math.random() * 3)];
}

// Re-render computer and player score on the page
const displayScore = (computerScore, playerScore) => {
  computerScoreParagraph.textContent = computerScore;
  playerScoreParagraph.textContent = playerScore;
};

// Play out a single rock-paper-scissors game round
function singleGameRound(playerSelection = "", computerSelection = "") {
  let playerMove = playerSelection.toLowerCase();
  let computerMove = computerSelection.toLowerCase();
  let roundResult = {};

  if (playerMove === computerMove) {
    roundResult = {
      message: "Draw! What an amazing battle...",
      playerScore: 0,
      computerScore: 0,
    };
  } else if (playerMove === "rock" && computerMove === "paper") {
    roundResult = {
      message: "You lose! Paper beats Rock.",
      playerScore: 0,
      computerScore: 1,
    };
  } else if (playerMove === "rock" && computerMove === "scissors") {
    roundResult = {
      message:
        "You win! Scissors is just a poser when it comes to beating rock...",
      playerScore: 1,
      computerScore: 0,
    };
  } else if (playerMove === "scissors" && computerMove === "rock") {
    roundResult = {
      message: "You lose! Rock will destroy scissors.",
      playerScore: 0,
      computerScore: 1,
    };
  } else if (playerMove === "scissors" && computerMove === "paper") {
    roundResult = {
      message: "You win! Paper is no match for scissors!",
      playerScore: 1,
      computerScore: 0,
    };
  } else if (playerMove === "paper" && computerMove === "scissors") {
    roundResult = {
      message: "You lose! Shouldn't have gone against the scissors...",
      playerScore: 0,
      computerScore: 1,
    };
  } else if (playerMove === "paper" && computerMove === "rock") {
    roundResult = {
      message: "You win! No more words to say.",
      playerScore: 1,
      computerScore: 0,
    };
  }

  return roundResult;
}

const replay = (e) => {
  computerScore = 0;
  playerScore = 0;
  displayScore(computerScore, playerScore);
  resultParagraph.textContent = "";
  btnReplay.classList.toggle("hidden");
};

displayScore(computerScore, playerScore);

btnReplay.addEventListener("click", replay);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const computerSelection = computerPlay();
    const roundResult = singleGameRound(e.target.id, computerSelection);

    playerScore += roundResult.playerScore;
    computerScore += roundResult.computerScore;
    displayScore(computerScore, playerScore);

    const winner = checkForWinner(computerScore, playerScore);
    if (winner === "") {
      resultParagraph.textContent = roundResult.message;
      return;
    }

    // Display message accordingly based on the winner & show replay button
    btnReplay.classList.toggle("hidden");
    if (winner === "computer") {
      resultParagraph.textContent =
        "You lose to a computer? Better luck next time, lol.";
    } else {
      resultParagraph.textContent = "Congratulation hehe...";
    }
  });
});
