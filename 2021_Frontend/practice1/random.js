// 10 이상 20 이하의 정수를 임의로 30개 출력하는 코드를 구현하시오.

let min = 10;
let max = 20;

for (let i = 0; i < 30; ++i) {
  let n = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(n);
}
