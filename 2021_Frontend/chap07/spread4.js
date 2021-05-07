let name = "홍길동";
let age = 16;
let scores = { english: 90, math: 85, history: 95 };

let person1 = { name, age, scores };
console.log(person1);

let person2 = { name, age, ...scores };
console.log(person2);
