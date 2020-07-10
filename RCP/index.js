const computerTag = document.querySelector('#computer');
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;
//left top 0(주먹) -124(가위) -284(보)
let computerChoice = 'rock';
const rspCoord = {
    rock: '0',
    scissors: '-124px',
    paper: '-284px',
}
//Array Like Object


const intervalMaker = () => { //고차함수 
    return setInterval(() => {
        if (computerChoice === 'rock') { // 바위 -> 가위
            computerChoice = 'scissors';
        } else if (computerChoice === 'scissors') {
            computerChoice = 'paper';
        } else if (computerChoice === 'paper') {
            computerChoice = 'rock';
        }
        computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspCoord[computerChoice]} 0`;
    }, 50);
}

let intervalId = intervalMaker();

const rockTag = document.querySelector('#rock');
const scissorsTag = document.querySelector('#scissors');
const paperTag = document.querySelector('#paper');
/* 
가위 : 1
바위 : 0
보 : -1
각각 값을 빼주면

나\com     가위     바위    보
가위        0        1       2     
바위       -1        0       1
보         -2        -1      0

비기면 0 
이기면 2 || -1
지면 1 || -2
*/


const score = {
    rock: 0,
    scissors: 1,
    paper: -1,
};

const scoreTag = document.querySelector('#score');

const clickButton = (myChoice) => {
    return () => { // return 값 없으면 undefind
        clearInterval(intervalId);
        const myScore = score[myChoice];
        const computerScore = score[computerChoice];
        const diff = myScore - computerScore;
        let accScore = Number(scoreTag.textContent);
        if (diff === 2 || diff === -1) {
            accScore += 1;
        } else if (diff === -2 || diff === 1) {
            accScore -= 1;
        }
        scoreTag.textContent = accScore;
        // 1초 후 다시 반복 
        setTimeout(() => {  //setInterval로 하면 한 번만 실행됨.
            intervalId = intervalMaker();
        }, 1000);
    };
};

rockTag.addEventListener('click', clickButton('rock'));
scissorsTag.addEventListener('click', clickButton('scissors'));
paperTag.addEventListener('click', clickButton('paper'));
