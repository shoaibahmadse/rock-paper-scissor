let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getcomputerchoice() {
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}

function converttoword(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userchoice, computerchoice) {
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${converttoword(userchoice)}${smalluserword} Beats  ${converttoword(computerchoice)}${smallcompword} . You Win`;
    userchoice_div.classList.add('green-glow')
    setTimeout(() => userchoice_div.classList.remove('green-glow'), 300);
}

function lose(userchoice, computerchoice) {
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${converttoword(computerchoice)}${smallcompword} Beats  ${converttoword(userchoice)}${smalluserword} . You Lose`;
    userchoice_div.classList.add('red-glow')
    setTimeout(() => userchoice_div.classList.remove('red-glow'), 300);
}

function draw(userchoice, computerchoice) {
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    const userchoice_div = document.getElementById(userchoice);
    result_p.innerHTML = `${converttoword(userchoice)}${smalluserword} Equal to ${converttoword(computerchoice)}${smallcompword} . It's a Draw.`;
    userchoice_div.classList.add('gray-glow')
    setTimeout(() => userchoice_div.classList.remove('gray-glow'), 300);
}

function game(userchoice) {
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userchoice, computerchoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userchoice, computerchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice, computerchoice);
    }


}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissor_div.addEventListener('click', function() {
        game("s")
    })
}
main();