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

function getHumanChoice(human_choice) {
  return human_choice;
}

let div = document.createElement("div");
let humanScore = 0;
let computerScore = 0;
let pscore = document.querySelector("#pscore");
let cscore = document.querySelector("#cscore");
let roundNo = document.querySelector("#round-no");
let round = 0;

function updatePscore() {
  humanScore = humanScore + 1;
  pscore.innerHTML = humanScore;
}

function updateCscore() {
  computerScore = computerScore + 1;
  cscore.innerHTML = computerScore;
}

function updateround() {
  round = round + 1;
  roundNo.innerHTML = round;
  if (round > 5) {
    if (humanScore > computerScore) {
      resultsdiv.innerHTML = `you win.\n your score: ${humanScore}\ncomputer score:${computerScore}`;
    } else {
      resultsdiv.innerHTML = `you lose.\n your score: ${humanScore}\ncomputer score:${computerScore}`;
    }
    round = 0;
    humanScore = 0;
    computerScore = 0;
    roundNo.innerHTML = 0;
    pscore.innerHTML = 0;
    cscore.innerHTML = 0;
  }
}

function playround(user_choice, computer_choice) {
  if (user_choice == 0) {
    if (computer_choice == 0) {
      div.innerHTML = " draw. you both chose rock";
    }
    if (computer_choice == 1) {
      div.innerHTML = "you lose.you chose rock and the computer chose paper";
      updateCscore();
    }
    if (computer_choice == 2) {
      div.innerHTML = "you win.you chose rock and the computer chose scissors";
      updatePscore();
    }
  }
  if (user_choice == 1) {
    if (computer_choice == 0) {
      div.innerHTML = "you win.you chose paper and the computer chose rock";
      updatePscore();
    }
    if (computer_choice == 1) {
      div.innerHTML = "draw.you both chose paper";
    }
    if (computer_choice == 2) {
      div.innerHTML = "you lose.you chose paper the computer chose scissors";
      updateCscore();
    }
  }
  if (user_choice == 2) {
    if (computer_choice == 0) {
      div.innerHTML = "you lose.you chose scissors and the computer chose rock";
      updateCscore();
    }
    if (computer_choice == 1) {
      div.innerHTML = "you win.you chose scissors and the computer chose paper";
      updatePscore();
    }
    if (computer_choice == 2) {
      div.innerHTML = "draw.you both chose scissors";
    }
  }

  document.body.appendChild(div);
}

resultsdiv = document.createElement("div");
document.body.appendChild(resultsdiv);

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  updateround();
  playround(0, getComputerChoice());
});

paper.addEventListener("click", () => {
  updateround();
  playround(1, getComputerChoice());
});

scissors.addEventListener("click", () => {
  updateround();
  playround(2, getComputerChoice());
});
