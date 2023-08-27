
let yourScore = 0;
let compScore = 0; 
const choices = ['rock', 'paper', 'scissors']; 


const _img = document.getElementsByClassName('image'); 
const rock = document.getElementById('rock');
const paper = document.getElementById('paper'); 
const scissors = document.getElementById('scissors'); 
 
const output = document.querySelector('#output'); 

const _yourScore = document.querySelector('#player-score'); 
const _compScore = document.querySelector('#comp-score'); 

init();


rock.addEventListener('click', function(){
    getCompChoice();
    gamePlay('r'); 
});

paper.addEventListener('click', function(){
    getCompChoice();
    gamePlay('p'); 
});

scissors.addEventListener('click', function(){
    getCompChoice();
    gamePlay('s'); 
});



function init(){
    yourScore = 0;
    compScore = 0;  
}

function getCompChoice(){
    
    const randNum = Math.floor(Math.random() * 3); 
    const choices_short = ['r', 'p', 's']; 
    return choices_short[randNum]; 
}

function gamePlay(choice){
    const compChoice = getCompChoice();
    switch (choice + compChoice){
        case 'rp':
        case 'ps':
        case 'sr':
            losing();
            break;

        case 'rs':
        case 'pr':
        case 'sp':
            winning();
            break; 

        default:
            output.textContent = 'Game is a tie!'; 
            
    }

}

function losing(){
    output.textContent = 'You loose!'; 
    compScore ++;
    _compScore.textContent = `Computer score: ${compScore} `; 
}

function winning(){
    output.textContent = 'You win!'; 
    yourScore++;
    _yourScore.textContent = `Your score: ${yourScore}`; 
}



