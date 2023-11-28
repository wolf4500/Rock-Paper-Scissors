function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 9);
    let choice;

    if (0 <= randomNum && randomNum <= 2) {
      choice = "rock";
    } else if (3 <= randomNum && randomNum <= 5) {
      choice = "scissors";
    } else if (6 <= randomNum && randomNum <= 8) {
      choice = "paper";
    } else {
      choice = "Error";
    }
    return choice;
  }

  let gamesWon = 0;
  let computerWon = 0;
  let tied = 0;

  function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection == "rock" && computerSelection == "scissors") {
      result = "You Win! Rock beats Scissors.";
      gamesWon++;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      result = "You Lose! Paper beats Rock.";
      computerWon++;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
      result = "Tied Game!";
      tied++;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "rock"
    ) {
      result = "You Lose! Rock beats Scissors.";
      computerWon++;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "scissors"
    ) {
      result = "Tied Game!";
      tied++;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "paper"
    ) {
      result = "You Win! Scissors beats Paper.";
      gamesWon++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      result = "You Win! Paper beats Rock.";
      gamesWon++;
    } else if (
      playerSelection == "paper" &&
      computerSelection == "scissors"
    ) {
      result = "You Lose! Scissors beats Paper.";
      computerWon++;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
      result = "Tied Game!";
      tied++;
    } else {
      result = "Error";
    }
    return result;
  }

  // Outputs result when clicking "Rock" button
  const rock = document.getElementById("rock");
  rock.addEventListener("click", game);
  function game()
  {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    result = playRound(playerSelection, computerSelection);
    console.log(result);
  };

  // Outputs result when clicking "Paper" button
  const paper = document.getElementById("paper");
  paper.addEventListener("click", game);
  function game()
  {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    result = playRound(playerSelection, computerSelection);
    console.log(result);
  };

  // Outputs result when clicking "Scissors" button
  const scissors = document.getElementById("scissors");
  scissors.addEventListener("click", game);
  function game()
  {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    result = playRound(playerSelection, computerSelection);
    console.log(result);
  };

//   function game() {
//     for (i = 0; i < 5; i++) {
//       let computerSelection = getComputerChoice();
//       let playerSelection = prompt("Enter Rock, Paper, or Scissors");

//       if (
//         playerSelection.toLowerCase() != "rock" &&
//         playerSelection.toLowerCase() != "scissors" &&
//         playerSelection.toLowerCase() != "paper"
//       ) {
//         console.log("Incorrect input. Try again.");
//         return;
//       }

//       result = playRound(playerSelection, computerSelection);
//       console.log(result);
//     }
//   }

  function gameResult() {
    if (gamesWon > computerWon) {
      console.log(
        " You win the game! " +
          "You: " +
          gamesWon +
          " Computer: " +
          computerWon +
          " Tied: " +
          tied
      );
    } else if (gamesWon < computerWon) {
      console.log(
        "You lost the game! " +
          "You: " +
          gamesWon +
          " Computer: " +
          computerWon +
          " Tied: " +
          tied
      );
    } else if ((gamesWon == computerWon) && (gamesWon != 0 && computerWon != 0)) {
      console.log(
        "Tied game! " +
          "You: " +
          gamesWon +
          " Computer: " +
          computerWon +
          " Tied: " +
          tied
      );
    }
  }

  gameResult();