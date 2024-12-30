# Rock, Paper, Scissors Game

A simple implementation of the classic Rock, Paper, Scissors game in JavaScript. The game pits the user against the computer, where each round both the user and the computer make a choice. The game then determines the winner based on the rules:

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

The game consists of 5 rounds, and at the end, the winner is announced based on the accumulated scores.

## How to Play

1. The user will be prompted to choose either Rock, Paper, or Scissors by entering a number:
   - `0` for Rock
   - `1` for Paper
   - `2` for Scissors
2. The computer will make its own random choice from the same options.
3. The winner of each round is decided based on the following rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
4. The game will continue for 5 rounds.
5. At the end, the final scores will be displayed, showing whether the user won or lost.

## Features

- Random computer choice for each round.
- User input to choose Rock, Paper, or Scissors.
- Score tracking across 5 rounds.
- Detailed round results in the console (whether you win, lose, or draw).
- Final score and winner displayed after 5 rounds.

## Code Explanation

### `getComputerChoice()`

This function generates a random choice for the computer, selecting between Rock, Paper, and Scissors. The random selection is represented by the numbers 0, 1, and 2.

### `getHumanChoice()`

Prompts the user to choose between Rock, Paper, or Scissors. The user is asked to input a number:
- `0` for Rock
- `1` for Paper
- `2` for Scissors

### `playround()`

This function compares the user's and computer's choices and determines the outcome of each round:
- If both choices are the same, it’s a draw.
- Otherwise, it determines whether the user wins or loses based on the rules.

### `while` Loop

The game runs for 5 rounds. After each round, the current score is updated, and the result is printed.

### Final Result

At the end of 5 rounds, the program checks the scores and prints whether the user wins or loses based on their performance.

## Example

```bash
ENTER A NUMBER:
Choose:
For rock:0
For paper:1
For scissor:2
```

After 5 rounds, the output could look like:

```bash
you win.
your score: 3
computer score: 2
```

Or:

```bash
you lose.
your score: 2
computer score: 3
```

## Requirements

- A web browser with developer tools to run the JavaScript.
- Console access to view the prompts and results.

## License

This project is open source. Feel free to modify or extend it!

---

Enjoy playing Rock, Paper, Scissors!
