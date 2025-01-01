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
function getHumanChoice(human_choice) {
  // let human_choice;
  // human_choice = prompt(
  //  "ENTER A NUMBER:\nChoose:\nFor rock:0\nFor paper:1\nFor scissor:2"
  //);
  //human_choice = parseInt(human_choice);
  /*if (human_choice == 0) {
    console.log("you chose rock");
  }
  if (human_choice == 1) {
    console.log("you chose paper");
  }
  if (human_choice == 2) {
    console.log("you chose scissors");
  }*/
  return human_choice;
}
let div = document.createElement("div");
let humanScore = 0;
let computerScore = 0;
let pscore = document.querySelector("#pscore");
let cscore = document.querySelector("#cscore");
function updatePscore() {
  humanScore = humanScore + 1;
  pscore.innerHTML = humanScore;
}
function updateCscore() {
  computerScore = computerScore + 1;
  cscore.innerHTML = computerScore;
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
    }
    if (computer_choice == 2) {
      div.innerHTML = "draw.you both chose scissors";
    }
  }
  document.body.appendChild(div);
}

//let round = 1;
/*while (round <= 5) {
  playround(getHumanChoice(), getComputerChoice());
  round++;
}*/
if (humanScore > computerScore) {
  console.log(
    `you win.\n your score: ${humanScore}\ncomputer score:${computerScore}`
  );
} else
  console.log(
    `you lose.\n your score: ${humanScore}\ncomputer score:${computerScore}`
  );
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
rock.addEventListener("click", () => {
  playround(0, getComputerChoice());
});
paper.addEventListener("click", () => {
  playround(1, getComputerChoice());
});
scissors.addEventListener("click", () => {
  playround(2, getComputerChoice());
});
