const input = document.querySelector('#input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');

let number = [];
for (let n = 0; n <= 9; n++) {
    numbers.push(n);
}

let answer = [];

for (let n = 0; n <= 3; n++) {
    const index = Math.floor(Math.random() * (numbers.length)); //0~9 정수 numbers.lengrh === 10 - n
    answer.push(numbers[index]); //추가
    numbers.splice(index, 1); // 확인 후 삭제 
}
console.log(answer);

let count = 0;
check.addEventListener('click', () => {
    const value = input.value;
    if (value && value.length === 4) {
        if (answer.join('') === value) {
            logs.appendChild(document.createTextNode('HomeRun!!'));
        } else {
            console.log('다르다');
            let strike = 0;
            let ball = 0;
            for (const [aIndex, aNumber] of answer.entries()) {
                for (const [bIndex, bString] of input.value.split('').entries()) {
                    if (aNumber === Number(bString)) {
                        if (aIndex === bIndex) {
                            strike += 1;
                        } else {
                            ball += 1;
                        }
                    }
                }
            }
            logs.appendChild(document.createTextNode(`${input.value} : ${strike} strike ${ball} ball`));
            logs.appendChild(document.createElement('br'));
            if (count > 10) {
                logs.appendChild(document.createTextNode(`Game Over : ${answer.join('')}`));

            } else {
                count++;
            }

        }

    }
});