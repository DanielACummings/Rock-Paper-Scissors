let options = ['rock', 'paper', 'scissors'];

function play(playerChoice) {
  let compChoice = options[Math.floor(Math.random() * (3 - 0))]
  debugger; switch (playerChoice) {
    case 'rock': if (compChoice == 'rock') {
      document.querySelector("#resultHeader").innerHTML = `<h5>Tie</h5>`
    } else if (compChoice == 'paper') {
      document.querySelector("#resultHeader").innerHTML = `<h5>You lose :(</h5>`
    } else {
      document.querySelector("#resultHeader").innerHTML = `<h5>Victorious!</h5>`
    }
      break;

    case 'paper': if (compChoice == 'rock') {
      document.querySelector("#resultHeader").innerHTML = `<h5>You win!</h5>`
    } else if (compChoice == 'paper') {
      document.querySelector("#resultHeader").innerHTML = `<h5>Alright, then, we'll call it a draw</h5>`
    } else {
      document.querySelector("#resultHeader").innerHTML = `<h5>You've been defeated</h5>`
    }
      break;

    case 'scissors': if (compChoice == 'rock') {
      document.querySelector("#resultHeader").innerHTML = `<h5>Alas, you have lost</h5>`
    } else if (compChoice == 'paper') {
      document.querySelector("#resultHeader").innerHTML = `<h5>Computer defeated!</h5>`
    } else {
      document.querySelector("#resultHeader").innerHTML = `<h5>It's a draw</h5>`
    }
      break;
  }
}
// only results from case 'scissors' are being output to browser regardless of what button is clicked

//check position of break;s