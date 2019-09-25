var scores, roundScores;
scores = [0, 0];
roundScores = 0;
activeplayer = 0;        ;



dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

document.querySelector(`#current-` + activeplayer).textContent = dice;

document.querySelector(".dice").style.display = 'none';

document.querySelector(`#score-0`).textContent = 0;
document.querySelector(`#score-1`).textContent = 0;
document.querySelector(`#current-0`).textContent = 0;
document.querySelector(`#current-1`).textContent = 0;


document.querySelector('.btn-roll').addEventListener(`click`, function () {
    var docDOM = document.querySelector(".dice");
    
    docDOM.style.display = 'block';
    let dice = Math.floor(Math.random() * 6) + 1;

    docDOM.src = `dice-` + dice + `.png`;


    if (dice !== 1) {
        roundScores = roundScores + dice;
        document.querySelector(`#score-` + activeplayer).textContent = roundScores;
    }
    else {
        if (activeplayer == 0) {
                activeplayer=1
        }
        else {
            activeplayer = 0;
            document.querySelector(`#current-0`).textContent = 0;
            document.querySelector(`#current-1`).textContent = 0;
            document.querySelecto(`.player-0-panel-0`).classList.toggle(`active`)
            document.querySelector(`.player-0-panel-1`).classList.toggle(`active`)



        }
        
    }


    
});