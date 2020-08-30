let userscore = 0;
let cpuscore = 0;
const userscore_span = document.getElementById("user-score");
const cpuscore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

function computerPlay() {
    let signs = ["rock", "paper", "scissor"];
    let randindex = Math.round(Math.random()*2);
    console.log(randindex);
    return signs[randindex];
}

function playRound(p1, cpu) {
    if (p1==="rock"){
        if (cpu==="rock"){
            return "Tie!";
        }
        if (cpu==="paper"){
            return "You lose! Paper beats Rock";
        }
        if (cpu==="scissor"){
            return "You win! Rock beats Scissors";
        }
    }
    if (p1==="paper"){
        if (cpu==="rock"){
            return "You win! Paper beats Rock";
        }
        if (cpu==="paper"){
            return "Tie!";
        }
        if (cpu==="scissor"){
            return "You lose! Scissors beats Paper";
        }
    }
    if (p1==="scissor"){
        if (cpu==="rock"){
            return "You lose! Rock beats Scissors";
        }
        if (cpu==="paper"){
            return "You win! Scissors beats Paper";
        }
        if (cpu==="scissor"){
            return "Tie!";
        }
    }
}

function game() {
    let p1 = 0;
    let cpu = 0;
    let result = playRound(prompt("Choose rock, paper, or scissor"), computerPlay());
    alert(result+" Press OK to continue the game");
    if (result==="You Win! Rock beats Scissors" || result==="You Win! Paper beats Rock" || result==="You Win! Scissor beats Paper") {
        p1++;
    }
    else if (result==="You Lose! Rock beats Scissor" || result==="You Lose! Paper beats Rock" || result==="You Lose! Scissor beats Paper") {
        cpu++;
    }
}

const rock_div = document.getElementById("r");

rock_div.addEventListener('click', function rock_game() {
    let cpumove = computerPlay();
    let game = playRound("rock", cpumove);
    result_div.innerHTML = game;
    if (game.includes("You win!")) {
        userscore++;
        userscore_span.innerHTML = userscore;
    }
   else if (game.includes("T")){}
    else {
        cpuscore++;
        cpuscore_span.innerHTML = cpuscore;
    }
    console.log(cpumove+game);
})

const paper_div = document.getElementById("p");

paper_div.addEventListener('click', function paper_game() {
    let cpumove = computerPlay();
    let game = playRound("paper", cpumove);
    result_div.innerHTML = game;
    if (game.includes("You win!")) {
        userscore++;
        userscore_span.innerHTML = userscore;
    }
    else if (game.includes("T")){}
    else {
        cpuscore++;
        cpuscore_span.innerHTML = cpuscore;
    }
    console.log(cpumove+game);
})

const scissors_div = document.getElementById("s");

scissors_div.addEventListener('click', function scissors_game() {
    let cpumove = computerPlay();
    let game = playRound("scissor", cpumove);
    result_div.innerHTML = game;
    if (game.includes("You win!")) {
        userscore++;
        userscore_span.innerHTML = userscore;
    }
    else if (game.includes("T")){}
    else {
        cpuscore++;
        cpuscore_span.innerHTML = cpuscore;
    }
    console.log(cpumove+game);
})

