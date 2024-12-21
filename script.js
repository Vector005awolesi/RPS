// Constants
var plName = prompt("Enter your name or code name");
const rock = document.getElementById("rockbtn");
const paper = document.getElementById("paperbtn");
const scissors = document.getElementById("scissorbtn");
const playerScore = document.getElementById("player2Score");
const computerScore = document.getElementById("player1Score");
const result = document.getElementById("results");
const round = 10;
const totalRound = 5;

// Points
let playerPoints = 0;
let computerPoints = 0;
let gameRound = 0;
let computer_won_round = 0;
let player_won_round = 0;
// Parse in userName
playerScore.innerHTML = `${plName}: 0`;
// Check name validity
if (!plName.length > 0) {
  alert("Input a valid name.");
  window.location.href = "game.html";
} else {
  alert(`Good luck ${plName} on beating the computer`);
}
// declare log inputs
let log = document.getElementById("log");
let log_btn = document.getElementById("log-btn");
let total_log = document.getElementById("total_log");
let round_log = document.getElementById("Rounds_log");
let player_log = document.getElementById("player_log");
let computer_log = document.getElementById("computer_log");
let result_log = document.getElementById("result-log");
// open and close log menu
log_btn.addEventListener("focusin", function () {
  log.style.opacity = "1";
});
log_btn.addEventListener("focusout", function () {
  log.style.opacity = "0";
});
// Play user's choice
function play(userChoice) {
  // Computer choice
  const computerChoice =
    Math.random() < 0.3 ? "rock" : Math.random() < 0.5 ? "paper" : "scissors";
  // Combos for winning
  const winningCombos = ["rockscissors", "paperrock", "scissorspaper"];
  // Check who wins
  if (winningCombos.includes(userChoice + computerChoice)) {
    result.innerHTML = ` <i class="fas fa-flag"></i> Player wins!`;
        // Updates player score
    playerPoints++;
  } else if (winningCombos.includes(computerChoice + userChoice)) {
    result.innerHTML = `<i class="fas fa-flag"></i> Computer wins!`;
    // Updates computer score
    computerPoints++;
  } else {
    result.innerHTML = `<i class="fas fa-bullseye "></i> It's a tie both choose ${userChoice}`;
  }
  // Change icons according to computer generated choices
  if (computerChoice === "rock") {
    document.getElementById(
      "aichoice"
    ).innerHTML = `<i class="fas fa-hand-rock fa-8x rotated-180 size"></i><br><br><p class="board-paragraph">Rock</p>`;
  } else if (computerChoice === "paper") {
    document.getElementById(
      "aichoice"
    ).innerHTML = `<i class="fas fa-hand-paper fa-8x size"></i> <br><br><p class="board-paragraph">Paper</p>`;
  } else if (computerChoice === "scissors") {
    document.getElementById(
      "aichoice"
    ).innerHTML = `<i class="fas fa-hand-scissors fa-8x size"></i> <br><br><p class="board-paragraph">Scissors</p>`;
  } else {
  }
  // Change icons according to user's inputs

  if (userChoice === "rock") {
    document.getElementById(
      "playerchoice"
    ).innerHTML = `<i class="fas fa-hand-rock fa-8x rotated-180-alt size"></i> <br><br><p class="board-paragraph">Rock</p>`;
  } else if (userChoice === "paper") {
    document.getElementById(
      "playerchoice"
    ).innerHTML = `<i class="fas fa-hand-paper fa-8x  size"></i> <br><br><p class="board-paragraph">Paper</p>`;
  } else if (userChoice === "scissors") {
    document.getElementById(
      "playerchoice"
    ).innerHTML = `<i class="fas fa-hand-scissors fa-8x size"></i> <br><br><p class="board-paragraph">Scissors</p>`;
  }
  // Parse in computer and users points to score-board
  computerScore.innerHTML = `Computer: ${computerPoints}`;
  playerScore.innerHTML = `${plName}: ${playerPoints}`;
  // Triggers climax moment
  if (playerPoints === 9 && computerPoints === 9) {
    alert(`So close ${plName} choose wisely`);
  } else {
  }
  // Check if player wins round
  if (playerPoints === round && computerPoints < round) {
    alert(`${plName} wins this round`);
    // Updates the round
    gameRound++;
    player_won_round++;
    // Reports winner of the round
    alert(` Congrats on beating the computer in this round
          Check the log for your win details`);
    // Parse in round and wins info into log
    round_log.innerHTML = `Round: ${gameRound}`;
    player_log.innerHTML = `Your round wins: ${player_won_round}`;
    computer_log.innerHTML = `Computer round wins: ${computer_won_round}`;
    // Restarts a new round
    playerPoints = 0;
    computerPoints = 0;
    // Resets the score
    document.getElementById(
      "player2Score"
    ).innerHTML = ` ${plName}: ${playerPoints}`;
    document.getElementById(
      "player1Score"
    ).innerHTML = `Computer: ${computerPoints}`;
  }
  // Checks if computer wins round
  else if (playerPoints < round && computerPoints === round) {
    // Reports computer
    alert(`Computer wins this round  ,Too bad computer beats you in this round.
    Check log for win statistics`);
    // Updates the round
    gameRound++;
    computer_won_round++;
    // Parse in round and wins info into log

    round_log.innerHTML = `Round: ${gameRound}`;
    player_log.innerHTML = `Your round wins: ${player_won_round}`;
    computer_log.innerHTML = `Computer round wins: ${computer_won_round}`;
    // Resets scores
    playerPoints = 0;
    computerPoints = 0;
    // Updates scores
    document.getElementById(
      "player1Score"
    ).innerHTML = `Computer: ${computerPoints}`;
    document.getElementById(
      "player2Score"
    ).innerHTML = ` ${plName}: ${playerPoints}`;
  } else {
  }
  // Checks when the game will end and who wins it
  // Checks if player wins
  if (
    gameRound === totalRound &&
    player_won_round === totalRound &&
    computer_won_round < totalRound
  ) {
    alert(`${plName} wins the game Nice!
    check log for more details`);
    result.innerHTML = `<br><i class='fas gold fa-trophy'></i> You win , Nice game`;
    result_log.innerHTML =
      "<br><i class='fas gold fa-trophy'></i> You win , Nice game";
    round_log.innerHTML = `Round: ${gameRound}`;
    player_log.innerHTML = `Your round wins: ${player_won_round}`;
    computer_log.innerHTML = `Computer round wins: ${computer_won_round}`;
  } 
  // Checks if computer wins
  else if (
    gameRound === totalRound &&
    player_won_round < totalRound &&
    computer_won_round === totalRound
  ) {
    alert(`Computer wins the game ,too bad, check log for your wins`);
    result.innerHTML = "<br><i class='fas gold fa-trophy'></i> Computer wins too bad <i class='fas fa-face-laugh gold'></i>";
    result_log.innerHTML =
      "<br><i class='fas gold fa-trophy'></i> Computer wins , Too bad <i class='fas fa-face-laugh gold'></i>";
    round_log.innerHTML = `Round: ${gameRound}`;
    player_log.innerHTML = `Your round wins: ${player_won_round}`;
    computer_log.innerHTML = `Computer round wins: ${computer_won_round}`;
  }
  // Checks if player wins 
  else if (
    player_won_round === totalRound &&
    computer_won_round < totalRound
  ) {
    alert(`${plName} wins the game Nice!
    check log for more details`);
    result.innerHTML = `<br><marquee width="280px"><i class='fas gold fa-trophy'></i> You win , Nice game</marquee>`;
    result_log.innerHTML =
      "<br><i class='fas gold fa-trophy'></i> <p>You win , Nice game</p>";
    round_log.innerHTML = `Round: ${gameRound}`;
    player_log.innerHTML = `Your round wins: ${player_won_round}`;
    computer_log.innerHTML = `Computer round wins: ${computer_won_round}`;
  }
  // Checks if computer wins 
  else if (
    player_won_round < totalRound &&
    computer_won_round === totalRound
  ) {
    alert(`Computer wins the game ,too bad, check log for your wins`);
    result.innerHTML = "<br><marquee width='280px'><i class='fas gold fa-trophy'></i> Computer wins too bad <i class='fas fa-face-laugh gold'></i></marquee>";
    result_log.innerHTML =
      "<br><i class='fas gold fa-trophy'></i> Computer wins , Too bad <i class='fas fa-face-laugh gold'></i>";
    round_log.innerHTML = `Round: ${gameRound}`;
    player_log.innerHTML = `Your round wins: ${player_won_round}`;
    computer_log.innerHTML = `Computer round wins: ${computer_won_round}`;
  } else {
  }
}
// User event handler
rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));
// Restart
function restart() {
  alert("By restarting every progress will be lost")
  window.location.href ="game.html"
}
// Leave game
function leaveGame() {
       document.getElementById("exitPopUp").style.opacity = 1;
       const confirmStayInGame = document.getElementById("stayInGame");
       const confirmExitGame = document.getElementById("exitGame");
       confirmStayInGame.addEventListener("click" , ()=>{
        document.getElementById("exitPopUp").style.opacity = 0;
       })
      confirmExitGame.addEventListener("click" , ()=>{
          window.location = "index.html"
      }) 
}

