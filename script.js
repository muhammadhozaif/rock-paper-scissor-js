//to get computers choice of either rock,paper or scissors
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
//to get humans choice of either rock,paper or scissors
function getHumanChoice() {
  let human_choice;
  human_choice = prompt(
    "ENTER A NUMBER:\nChoose:\nFor rock:0\nFor paper:1\nFor scissor:2"
  );
  if (human_choice == 0) {
    console.log("you chose rock");
  }
  if (human_choice == 1) {
    console.log("you chose paper");
  }
  if (human_choice == 2) {
    console.log("you chose scissors");
  }
  return human_choice;
}
let humanScore = 0;
let computerScore = 0;
function playround(user_choice, computer_choice) {
  if (user_choice == 0) {
    if (computer_choice == 0) {
      console.log("draw. you both chose rock");
    }
    if (computer_choice == 1) {
      console.log("you lose.you chose rock and the computer chose paper");
      computerScore += 1;
    }
    if (computer_choice == 2) {
      console.log("you win.you chose rock and the computer chose scissors");
      humanScore += 1;
    }
  }
  if (user_choice == 1) {
    if (computer_choice == 0) {
      console.log("you win.you chose paper and the computer chose rock");
      humanScore += 1;
    }
    if (computer_choice == 1) {
      console.log("draw.you both chose paper");
    }
    if (computer_choice == 2) {
      console.log("you lose.you chose paper the computer chose scissors");
      computerScore += 1;
    }
  }
  if (user_choice == 2) {
    if (computer_choice == 0) {
      console.log("you lose.you chose scissors and the computer chose rock");
      computerScore += 1;
    }
    if (computer_choice == 1) {
      console.log("you win.you chose scissors and the computer chose paper");
      computerScore += 1;
    }
    if (computer_choice == 2) {
      console.log("draw.you both chose scissors");
    }
  }
}
let round = 1;
while (round <= 5) {
  playround(getHumanChoice(), getComputerChoice());
  round++;
}
if (humanScore > computerScore) {
  console.log(
    `you win.\n your score: ${humanScore}\ncomputer score:${computerScore}`
  );
} else
  console.log(
    `you lose.\n your score: ${humanScore}\ncomputer score:${computerScore}`
  );
