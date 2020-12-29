const team1score = document.querySelector('#team1score');
const team2score = document.querySelector('#team2score');
const team1button = document.querySelector('#team1button');
const team2button = document.querySelector('#team2button');
const resetButton = document.querySelector("#resetButton");
const scoreSelect = document.querySelector("#playTo");

let t1score = 0;
let t2score = 0;
let winningScore = 1;
let isGameOver = false;

scoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

team1button.addEventListener('click', function(){
    if(!isGameOver){
        t1score += 1;
        if(t1score === winningScore){ 
            isGameOver = true;
            team1score.classList.add('winner');
            team2score.classList.add('loser');
        }
        team1score.textContent = t1score;
    }
})

team2button.addEventListener('click', function(){
    if(!isGameOver){
        t2score += 1;
        if(t2score === winningScore){ 
            isGameOver = true;
            team2score.classList.add('winner');
            team1score.classList.add('loser');
        }
        team2score.textContent = t2score;
    }
})

resetButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    t1score = 0;
    t2score = 0;
    team1score.textContent = t1score;
    team2score.textContent = t2score;
    team1score.classList.remove('winner', 'loser');
    team2score.classList.remove('winner', 'loser');
}