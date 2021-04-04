/* createArray 함수는 count 크기의 배열을 생성하여 리턴한다.
이 배열에는 1 이상의 홀수가 순서대로 들어있어야 한다.
 */

function createArray(count) {
    let array = [];
    for (let i = 0; i < count * 2; ++i) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    return array;
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));
