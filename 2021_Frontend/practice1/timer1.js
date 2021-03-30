// 타이머 1초에 총 10번 반복 후 종료

// 방법 1
let count = 0;
let callback = () => {
  console.log('방법1', new Date());
  if (++count == 10) clearInterval(id);
}
let id = setInterval(callback, 1000);

// 방법 2 
let count1 = 0;

setInterval(() => {
    if(count1 === 10) return clearInterval();
    console.log('방법2', new Date(), count1+1);
    count1 += 1;
}, 1000);