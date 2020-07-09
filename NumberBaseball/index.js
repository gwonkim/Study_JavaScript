const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

/*1번 방법 let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] */

//2번 방법
let numbers = [];
for (let n = 0; n <= 9; n++) {
    numbers.push(n);
}

//3번 방법 함수형프로그램
//let numbers = Array(10).fill().map((v,i) => i);

let answer = [];

/* 
let n=0;
while (n <= 3) {
    answer[n] = Math.floor((Math.random() * 10)) 
    // 0이상 1미만*10 => 0~9 
    n++; 
    const index = Math.floor(Math.random()*(10-n)); //0~9 정수
    answer.push(numbers[index]);
    numbers.splice(index, 1);
    n++;
} 
*/

for (let n = 0; n <= 3; n++) {
    const index = Math.floor(Math.random() * (numbers.length)); //0~9 정수 numbers.lengrh === 10 - n
    answer.push(numbers[index]); //추가
    numbers.splice(index, 1); // 확인 후 삭제 
}
/* answer.join('');  */
//toString과 String to는 실행이 안 되는 경우도 있음 

console.log(answer);

let count = 0;
check.addEventListener('click', () => {
    const value = input.value;
    //'', 0, NaN, false, null, undefined, document.all ->false value
    if (value && value.length === 4) {
        if (answer.join('') === value) {
            logs.appendChild(document.createTextNode('HomeRun!!'));
        } else {
            console.log('다르다');
            let strike = 0;
            let ball = 0;
            //entries 배열
            for (const [aIndex, aNumber] of answer.entries()) {
                for (const [bIndex, bString] of input.value.split('').entries()) {
                    if (aNumber === Number(bString)) {
                        if (aIndex === bIndex) {
                            //스트라이크
                            strike += 1;
                        } else {
                            //볼
                            ball += 1;
                        }
                    }
                }
            }
            logs.appendChild(document.createTextNode(`${input.value} : ${strike} strike ${ball} ball`));
            logs.appendChild(document.createElement('br'));

            /*  
             const message = document.createTextNode();
             logs.append(`${input.value} : ${strike} strike ${ball} ball`, document.createElement('br'));
             익스플로 사용 불가 
             */
            if (count > 10) {
                logs.appendChild(document.createTextNode(`Game Over : ${answer.join('')}`));

            } else {
                count++;
            }

            /* 
            appent vs appendChiled
            인터넷 익스플로 사용 불가 apppend


            textCotent vs appendChiled
            기존 삭제 생성 / 추가 생성
            */
        }

    }
});

/*
let n=1;
while(n<6){
    console.log('*'.repeat(n));
    n++:
}
*/