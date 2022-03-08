const possibleMove = ["Rock", "Paper", "Scissors"];

// Represent computer move, will return either 1 of possibleMove
function computerPlay() {
  return possibleMove[Math.floor(Math.random() * 3)];
}

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

// Play out a single rock-paper-scissors match
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Keep playing while none of player or computer have reached the score of 5
  while (playerScore !== 5 && computerScore !== 5) {
    let playerSelection = prompt(
      "Please enter one of the following [rock, paper, scissors]:",
      "rock"
    );
    let computerSelection = computerPlay();
    let result = singleGameRound(playerSelection, computerSelection);
    console.log(result.message);
    playerScore += result.playerScore;
    computerScore += result.computerScore;
  }

  // Check whether player or computer wins the whole game
  if (playerScore > computerScore) {
    console.log("Congratulation, you won the game!");
  } else {
    console.log("Better luck next time, lol.");
  }
}

game();
