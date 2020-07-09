const candidate = Array(45).fill().map((v, i) => i+1);
const shuffle = [];
while (candidate.length > 0){
    const value = candidate.splice(Math.floor(Math.random()*candidate.length), 1)[0];
    shuffle.push(value);
}

console.log(shuffle);
const winBalls = shuffle.slice(0, 6).sort((p,c) => p-c);
const bonus = shuffle[6];
console.log(winBalls);
console.log(bonus);

function colorize(number, tag) {
    if (number <= 10){
        tag.style.background = 'red';
    } else if(number <= 20){
        tag.style.background = 'orange';
    }  else if(number <= 30){
        tag.style.background = 'yellow';
    }  else if(number <= 40){
        tag.style.background = 'green';
    }  else {
        tag.style.background = 'yellowgreen';
    }
}

const resultTag = document.querySelector('#result');
winBalls.forEach((number, index) => {
    setTimeout(()=> {
        const ball = document.createElement('div');
        ball.className = 'ball'; 
        colorize(number, ball);
        ball.textContent = number;
        resultTag.appendChild(ball);
    }, 1000*(index+1))
});

const bonusTag = document.querySelector('#bonus');
setTimeout(() => {
    const bonusBall = document.createElement('div');
    bonusBall.className = 'ball';
    colorize(bonus, bonusBall);
    bonusBall.textContent = bonus;
    bonusTag.appendChild(bonusBall);
}, 7000);

// 7월 10일에 할 것
//index2.js:45 Uncaught TypeError: Cannot read property 'appendChild' of null
//이 문제 해결하기 