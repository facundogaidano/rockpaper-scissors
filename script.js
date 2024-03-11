function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
      case 0:
          choice = "Rock";
          break;
      case 1:
          choice = "Paper";
          break;
      case 2:
          choice = "Scissors";
          break;
  };
  return choice;
};

const buttons = document.querySelectorAll("button")

function getPlayerChoice() {
  return new Promise((resolve) => {
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        resolve(button.id)
      });
    })
  })
}

function playRound(playerSelection, computerSelection) {
  let win = `You Win! ${playerSelection} beats ${computerSelection}`
  let lose = `You Lose! ${computerSelection} beats ${playerSelection}`
  let tie = 'Tie!'

  const choiceComputer = document.getElementById('Computer')
  const choicePlayer = document.getElementById('You')

  switch(playerSelection) {
      case 'Rock':
          if (computerSelection === 'Rock') {
            console.log(tie);
            choicePlayer.textContent = `✊🏻`
            choiceComputer.textContent = `✊🏻`
            return 0;
          }
          if (computerSelection === 'Paper') {
            console.log(lose);
            choicePlayer.textContent = `✊🏻`
            choiceComputer.textContent = `✋🏻`
            return 1;
          }
          else {
            console.log(win);
            choicePlayer.textContent = `✊🏻`
            choiceComputer.textContent = `✌🏻`
            return 2;
          };
      case 'Paper':
          if (computerSelection === 'Rock') {
            choicePlayer.textContent = `✋🏻`
            choiceComputer.textContent = `✊🏻`
            console.log(win);
            return 2;
          }
          if (computerSelection === 'Paper') {
            choicePlayer.textContent = `✋🏻`
            choiceComputer.textContent = `✋🏻`
            console.log(tie);
            return 0;
          }
          else {
            console.log(lose);
            choicePlayer.textContent = `✋🏻`
            choiceComputer.textContent = `✌🏻`
            return 1;
          }
      case 'Scissor':
          if (computerSelection === 'Rock') {
            choicePlayer.textContent = `✌🏻`
            choiceComputer.textContent = `✊🏻`
            console.log(lose);
            return 1;
          }
          if (computerSelection === 'Paper') {
            choicePlayer.textContent = `✌🏻`
            choiceComputer.textContent = `✋🏻`
            console.log(win);
            return 2;
          }
          else {
            console.log(tie);
            choicePlayer.textContent = `✌🏻`
            choiceComputer.textContent = `✌🏻`
            return 0;
          }
  }
};

async function playGame() {
  let player = 0
  let computer = 0
  const roundInfoElement = document.getElementById('roundInfo')
  const scoreInfoElement = document.getElementById('scoreInfo')
  const roundStatusElement = document.getElementById('roundStatus')
  
  scoreInfoElement.textContent = `You: ${player} --- Computer: ${computer}`
  roundStatusElement.textContent = ``

  for (let step = 0; step < 5; step++) {
    console.log(`Round ${step + 1}`)
    let playerSelection = await getPlayerChoice();
    let computerSelection = getComputerChoice();
    switch(playRound(playerSelection, computerSelection)) {
      case 0:
        roundStatusElement.textContent = `TIE!`
        break
      case 1:
        roundStatusElement.textContent = `Computer won the round! ${computerSelection} beats ${playerSelection}.`
        computer++;
        break;
      case 2:
        roundStatusElement.textContent = `You won the round! ${playerSelection} beats ${computerSelection}.`
        player++;
        break;
      }
    scoreInfoElement.textContent = `Score: You: ${player}, Computer: ${computer}`
    console.log(playRound(playerSelection, computerSelection))
    }
  if (player > computer) {
    roundInfoElement.textContent = `You won the game! You: ${player}, Computer: ${computer}`
  }
  else if (computer > player) {
    roundInfoElement.textContent = `You lose the game! You: ${player}, Computer: ${computer}`
  }
  else {
    roundInfoElement.textContent = `Tie game! You: ${player}, Computer: ${computer}`
  }

};

function main() {
  playGame();
};

main();