//Function called computerPlay that will **randomly** return Rock, Paper or Scissors
let computer = '';
function computerPlay(){
    // ---use math.random that outputs number from 1-3 1==Rock, 2==Paper 3==Scissors
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




// Write a Function that plays a single round of RPS
// takes in two parameters playerSelection and computerSelection
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toString().toLowerCase();
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
// returns a String that declares the winner like so: "You Lose! Paper beats Rock"
// singleRound function takes in playerSelection and computerSelection
// if playerSelection is Rock && computerSelection is Paper == playerSelection wins
// else if playerSelection is Scissors && computerSelection is Paper == playerSelection wins
// else if playerSelection is Paper && computerSelection is Rock == playerSelection wins
// else if playerSelection === computerSelection == tie!
// else computerSelection wins


function game(){
    for (let i = 0; i<=5; i++){
        let playerDecision = prompt("Rock Paper or Scissors?");
        playRound(playerDecision);
    }

}

game();




