// Chooses randomized option for computer
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

  // Toggle to disable the buttons after game is finished
  buttons = document.querySelectorAll("button");
  function disableButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
    })
  }

  let gamesWon = 0;
  let computerWon = 0;
  let tied = 0;

  // Plays 1 round and get the result 
  function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection == "rock" && computerSelection == "scissors") {
        gamesWon++;
        result = "You Win! Rock beats Scissors." + "<br><br>Player Score: " + gamesWon + "<br>Computer Score: " + computerWon + "<br>Tied: " + tied;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerWon++;
        result = "You Lose! Paper beats Rock." + "<br><br>Player Score: " + gamesWon + "<br>Computer Score: " + computerWon + "<br>Tied: " + tied;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        tied++;
        result = "Tied Game!" + "<br><br>Player Score: " + gamesWon + "<br>Computer Score: " + computerWon + "<br>Tied: " + tied;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "rock"
    ) {
        computerWon++;
        result = "You Lose! Rock beats Scissors." + "<br><br>Player Score: " + gamesWon + "<br>Computer Score: " + computerWon + "<br>Tied: " + tied;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "scissors"
    ) {
        tied++;
        result = "Tied Game!" + "<br><br>Player Score: " + gamesWon + "<br>Computer Score: " + computerWon + "<br>Tied: " + tied;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "paper"
    ) {
        gamesWon++;
        result = "You Win! Scissors beats Paper." + "<br><br>Player Score: " + gamesWon + "<br>Computer Score: " + computerWon + "<br>Tied: " + tied;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        gamesWon++;
        result = "You Win! Paper beats Rock." + "<br><br>Player Score: " + gamesWon + "<br>Computer Score: " + computerWon + "<br>Tied: " + tied;
    } else if (
      playerSelection == "paper" &&
      computerSelection == "scissors"
    ) {
        computerWon++;
        result = "You Lose! Scissors beats Paper." + "<br><br>Player Score: " + gamesWon + "<br>Computer Score: " + computerWon + "<br>Tied: " + tied;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        tied++;
        result = "Tied Game!" + "<br><br>Player Score: " + gamesWon + "<br>Computer Score: " + computerWon + "<br>Tied: " + tied;
    } else {
      result = "Error";
    }

    if(gamesWon == 5 || computerWon == 5)
    {
        document.getElementById("roundResult").innerHTML = result;
        gameResult();
        disableButtons();
    }

    return result;
  }

  gameEnd = document.getElementById("gameResult");

  // Outputs result when clicking "Rock" button
  const rock = document.getElementById("rock");
  rock.addEventListener("click", game);
  function game()
  {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    result = playRound(playerSelection, computerSelection);
    document.getElementById("roundResult").innerHTML = result;
  };

  // Outputs result when clicking "Paper" button
  const paper = document.getElementById("paper");
  paper.addEventListener("click", game2);
  function game2()
  {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    result = playRound(playerSelection, computerSelection);
    document.getElementById("roundResult").innerHTML = result;

  };

  // Outputs result when clicking "Scissors" button
  const scissors = document.getElementById("scissors");
  scissors.addEventListener("click", game3);
  function game3()
  {
    let computerSelection = getComputerChoice();
    let playerSelection = "paper";
    result = playRound(playerSelection, computerSelection);
    document.getElementById("roundResult").innerHTML = result;
  };

  // Outputs game result
  function gameResult() {
    if (gamesWon > computerWon) {
        gameEnd.innterHTML = "You Win the game! Refresh to play again.";
    } else {
        gameEnd.innerHTML = 
        "You lost the game! Refresh to play again.";
    }
  };