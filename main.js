
let computer = '';
function computerPlay(){
 
    let picker = Math.floor(Math.random() * 3);
    if (picker == 1){
        return computer = "Rock";
    }
    else if (picker == 2){
        return computer = "Paper";
    }
    else{
        return computer = "Scissors";
    }

}

/*
function playRound(playerSelection, computerSelection){
    //playerSelection = playerSelection.toString().toLowerCase();
    computerSelection = computerPlay();
    if (playerSelection === 'rock' && computerSelection === 'Paper'){
        return console.log("Player Wins! Rock beats Paper!")
    }
    else if(playerSelection === 'scissors' && computerSelection === 'Paper'){
        return console.log ("PLayer Wins! Scissors beats Paper!");
    }
    else if (playerSelection === 'paper' && computerSelection === 'Rock'){
        return console.log ("Player Wins! Paper beats Rock!");
    }
    else{
        return console.log("Computer Wins!");
    }

}
*/

let buttons = document.querySelector('#buttons');
let rock = document.createElement('button');
rock.textContent = 'Rock';
buttons.appendChild(rock);

let paper = document.createElement('button');
paper.textContent = 'Paper';
buttons.appendChild(paper);

let scissors = document.createElement('button');
scissors.textContent = 'Scissors';
buttons.appendChild(scissors);

let results = document.createElement('div');
results.textContent = "results: ";
buttons.appendChild(results);

function rockClicked(e){
    let computerSelection = computerPlay();
    if (computerSelection == 'Paper'){
        console.log('Computer Wins! Paper beats Rock');
    }
    else if(computerSelection == 'Scissors'){
        console.log('Player Wins! Rock beats Scissors');
    }
    else{
        console.log('its a tie! both picked rock');
    }
   
}

function paperClicked(e){
    let computerSelection = computerPlay();
    if (computerSelection == 'Rock'){
        console.log('Player Wins! paper beats rock!');
    }
    else if(computerSelection == 'Scissors'){
        console.log('Computer Wins! scissors beats paper!');
    }
    else{
        console.log('its a tie! both picked paper');
    }
}

function scissorsClicked(e){
    let computerSelection = computerPlay();
    if (computerSelection == 'Paper'){
        console.log('Player Wins! scissors beats paper!');
    }
    else if(computerSelection == 'Rock'){
        console.log('Computer Wins! rock beats scissors!');
    }
    else{
        console.log('its a tie! both picked scissors');
    }
}

rock.addEventListener('click', rockClicked);

paper.addEventListener('click', paperClicked);

scissors.addEventListener('click', scissorsClicked);



