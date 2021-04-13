let a1 = "1,2,3,4,5,6,7,8,9,10".split(",");
let a2 = a1.filter((e) => e % 2 === 0); // 문자열 덧셈으로 뎃셈 제외하고는 다 가능
console.log(a2);
