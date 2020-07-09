/* 
1. 로또 공 45개 생성
2. 공 7개 랜덤 추첨
3. 앞 6개는 당첨공
4. 보너스 공 추첨
5. 로또 짜잔
*/
const candidate = Array(45).fill().map((v, i) => i+1);
// 값, 매개변수 위에는 0~45개의 빈 배열이 만들어지고 각 자리에 인덱스+1값이 대입
// 1~45의 값 저장됨

/* map
map ( 함수를 집어 넣 ) 
매개변수는 아무거나 가능 
1대1
arr.map((a) => {
    return a*10
    힌 줄 또는 한 개의 경우 () {} return 생략 가능 
})
빈 배열 시  꼭 fill 사용


*/

const shuffle = [];
while (candidate.length > 0){
    const value = candidate.splice(Math.floor(Math.random()*candidate.length), 1)[0];
    shuffle.push(value);
}
console.log(shuffle);
/* 
풀어서 쓰면
const random = Math.floor(Math.random()* candidate.length);
const spliceArray = candidate.splice(random, 1);
const value = spliceArray[0];
*/

/* 
[1,2,3].splice(2,1)
=> [3]
[1,2,3].splice(2,1)[0]
=> 3
*/

/* const winBalls = shuffle.slice(0, 6).sort(); 
사전순으로 정렬됨

*/
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
/* for(let i=0; i<6; i++){
    setTimeout( ()=> {
        const ball = document.createElement('div');
        ball.className = 'ball'; 
        colorize(winBalls[i], ball);
        ball.textContent = winBalls[i];
        resultTag.appendChild(ball);
    }, 1000*(i+1))
}
 */
winBalls.forEach((number, index) => {
    setTimeout( ()=> {
        const ball = document.createElement('div');
        ball.className = 'ball'; 
        colorize(number, ball);
        ball.textContent =number;
        resultTag.appendChild(ball);
    }, 1000*(index+1))
});

const bonusTag = document.querySelector('#bonus');
setTimeout( () => {
    const bonusBall = document.createElement('div');
    bonusBall.className = 'ball';
    colorize(bonus, bonusBall);
    bonusBall.textContent = bonus;
    bonusTag.appendChild(bonusBall)
}, 7000);


