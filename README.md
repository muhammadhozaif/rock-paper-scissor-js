# Rock-Paper-Scissors Game

This is a simple Rock-Paper-Scissors game implemented using HTML, CSS, and JavaScript. The game allows a player to compete against the computer, with both the player and the computer choosing between rock, paper, or scissors. The game runs for five rounds and displays the score after each round, along with the final result.

## Features

- **Interactive**: The player can select Rock, Paper, or Scissors by clicking buttons.
- **Score Tracking**: The game keeps track of both the player's score and the computer's score.
- **Round Limit**: The game ends after 5 rounds, with the winner being determined based on the score.
- **Dynamic Display**: Results and scores are displayed dynamically after each round.

## How It Works

### Game Logic

- The player selects one of three options: Rock (0), Paper (1), or Scissors (2).
- The computer randomly selects one of the three options.
- The choices are compared, and the winner of the round is determined:
  - Rock beats Scissors.
  - Paper beats Rock.
  - Scissors beats Paper.
- A round can end in a draw if both the player and the computer choose the same option.

### Scoring

- Each time the player wins a round, their score is incremented by 1.
- Similarly, the computer's score is updated when the computer wins a round.
- After 5 rounds, the game will display whether the player has won or lost based on the scores.

### Game Flow

1. The game starts with 0 rounds.
2. After each round, the round number is updated, and the current scores are displayed.
3. If the round limit of 5 is reached, the game ends, and the winner is displayed.

## Files

- **index.html**: The main HTML file where the game interface is located.
- **styles.css**: CSS file for styling the game interface.
- **script.js**: JavaScript file that implements the logic of the game.

## How to Play

1. Open the game in a web browser.
2. Click on the **Rock**, **Paper**, or **Scissors** buttons to choose your move.
3. The game will display the result of each round and update the score.
4. After 5 rounds, the game will show whether you won or lost and reset the scores.

## Code Breakdown

### getComputerChoice()

The `getComputerChoice` function generates a random number (0, 1, or 2) to simulate the computer's choice of Rock, Paper, or Scissors. The function then returns the corresponding value to be compared with the player's choice.

```javascript
function getComputerChoice() {
  let comp_rand = Math.floor(Math.random() * 3);
  let comp_selection;
  if (comp_rand == 0) {
    comp_selection = "rock";
  }
  if (comp_rand == 1) {
    comp_selection = "paper";
  }
  if (comp_rand == 2) {
    comp_selection = "scissors";
  }
  console.log(`computer chose ${comp_selection}`);
  return comp_rand;
}
```
