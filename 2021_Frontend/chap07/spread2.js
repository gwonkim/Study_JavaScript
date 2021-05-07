let person = { name: "홍길동", age: 16, english: 90, math: 85, history: 95 };
let { name, age, ...scores } = person;
console.log("%s %d", name, age);
console.log(scores);
