
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


let playerScore = document.createElement('p');
playerScore.setAttribute('id','playerScore');
playerScore.textContent = "0";
buttons.appendChild(playerScore);

let computerScore = document.createElement('p');
computerScore.setAttribute('id', 'computerScore');
computerScore.textContent = '0';
buttons.appendChild(computerScore);

let playerCount = 0;
let computerCount = 0;

let playerCounter = document.getElementById("playerScore");
let computerCounter = document.getElementById("computerScore");


function incrementPlayer(){
    if (playerCount == 5){
        alert("Congratulations Player, You have won!")
        playerCount = 0;
        computerCount = 0;
        playerCounter.innerHTML = 'Player Score: ' + playerCount;
        computerCounter.innerHTML = 'Computer Score: ' + computerCount;
    }
    else{
        playerCount ++;
        playerCounter.innerHTML = 'Player Score: ' + playerCount;
        
    }
}

function incrementComputer(){
    
    if (computerCount == 5){
        alert("Congratulations Computer, You have won!");
        playerCount = 0;
        computerCount = 0;
        playerCounter.innerHTML = 'Player Score: ' + playerCount;
        computerCounter.innerHTML = 'Computer Score: ' + computerCount;
    }
    else{
        computerCount ++;
        computerCounter.innerHTML = 'Computer Score: ' + computerCount;
        

    }
}



function rockClicked(e){
    let computerSelection = computerPlay();
    if (computerSelection == 'Paper'){
        console.log('Computer Wins! Paper beats Rock');
        incrementComputer()
        

    }
    else if(computerSelection == 'Scissors'){
        console.log('Player Wins! Rock beats Scissors');
        incrementPlayer();
    }
    else{
        console.log('its a tie! both picked rock');
    }
   
}

function paperClicked(e){
    let computerSelection = computerPlay();
    if (computerSelection == 'Rock'){
        console.log('Player Wins! paper beats rock!');
        incrementPlayer();
       
    }
    else if(computerSelection == 'Scissors'){
        console.log('Computer Wins! scissors beats paper!');
        incrementComputer()
       
    }
    else{
        console.log('its a tie! both picked paper');

    }
}

function scissorsClicked(e){
    let computerSelection = computerPlay();
    if (computerSelection == 'Paper'){
        console.log('Player Wins! scissors beats paper!');
        incrementPlayer();
         
    }
    else if(computerSelection == 'Rock'){
        console.log('Computer Wins! rock beats scissors!');
        incrementComputer()
        
    }
    else{
        console.log('its a tie! both picked scissors');
    }
}

rock.addEventListener('click', rockClicked);

paper.addEventListener('click', paperClicked);

scissors.addEventListener('click', scissorsClicked);



