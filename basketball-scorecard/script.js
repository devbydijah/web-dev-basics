// Define Global Variables
let homeScoreValue = 0; 
let awayScoreValue = 0; 
let timer; 
let seconds = 0; 
let minutes = 12; 
let quarter = 1; 

// Timer Functions
// Start the timer and update the display every second
function startTimer() {
  timer = setInterval(function () {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        alert("End of Quarter");
        return;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    // Update the timer display
    document.getElementById("timer").innerText = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }, 1000);
}

// Pause the timer
function pauseTimer() {
  clearInterval(timer);
}

// Reset the timer to the default time
function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 12;
  // Set the timer display to the starting time
  document.getElementById("timer").innerText = "12:00";
}

// Handle game over state: stop the timer and reset game state
function gameOver() {
  clearInterval(timer);
  alert("Game Over!");
  resetTimer();
  resetScores();
  quarter = 1;
  // Reset the quarter display
  document.getElementById("quarter").innerText = quarter;
}

// Update the score display for both teams
function updateScore() {
  document.getElementById("home-score").innerText = homeScoreValue;
  document.getElementById("away-score").innerText = awayScoreValue;
}

// Increase the home team's score by a specified number of points
function homeScore(points) {
  homeScoreValue += points;
  updateScore();
}

// Increase the away team's score by a specified number of points
function awayScore(points) {
  awayScoreValue += points;
  updateScore();
}

// Add 1 point to the home team's score for a free throw
function homeFreeThrow() {
  homeScore(1);
}

// Add 1 point to the away team's score for a free throw
function awayFreeThrow() {
  awayScore(1);
}

// Move to the next quarter and reset the timer
function nextQuarter() {
  if (quarter < 4) {
    quarter++;
    // Update the quarter display
    document.getElementById("quarter").innerText = quarter;
    resetTimer();
  } else {
    alert("End of Game");
    gameOver();
  }
}

// Reset both teams' scores to zero and update the display
function resetScores() {
  homeScoreValue = 0;
  awayScoreValue = 0;
  updateScore();
  resetTimer();
}

// Add event listeners for user interactions
document
  .querySelector(".quarter-section button")
  .addEventListener("click", nextQuarter); // Next quarter button

document
  .querySelector(".timer-section button:nth-child(1)")
  .addEventListener("click", startTimer); // Start timer button

document
  .querySelector(".timer-section button:nth-child(2)")
  .addEventListener("click", pauseTimer); // Pause timer button

document
  .querySelector(".timer-section button:nth-child(3)")
  .addEventListener("click", resetTimer); // Reset timer button

document
  .querySelector(".timer-section button:nth-child(4)")
  .addEventListener("click", gameOver); // Game over button

document
  .querySelector(".home-team button:nth-child(1)")
  .addEventListener("click", () => homeScore(1)); // Home team +1 button

document
  .querySelector(".home-team button:nth-child(2)")
  .addEventListener("click", () => homeScore(2)); // Home team +2 button

document
  .querySelector(".home-team button:nth-child(3)")
  .addEventListener("click", () => homeScore(3)); // Home team +3 button

document
  .querySelector(".home-team button:nth-child(4)")
  .addEventListener("click", homeFreeThrow); // Home team free throw button

document
  .querySelector(".away-team button:nth-child(1)")
  .addEventListener("click", () => awayScore(1)); // Away team +1 button

document
  .querySelector(".away-team button:nth-child(2)")
  .addEventListener("click", () => awayScore(2)); // Away team +2 button

document
  .querySelector(".away-team button:nth-child(3)")
  .addEventListener("click", () => awayScore(3)); // Away team +3 button

document
  .querySelector(".away-team button:nth-child(4)")
  .addEventListener("click", awayFreeThrow); // Away team free throw button

document.querySelector(".reset-scores").addEventListener("click", resetScores); // Reset scores button
