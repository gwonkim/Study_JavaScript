let a1 = [{ "name": "홍길동", "age": 16 }, { "name": "임꺽정", "age": 19 }];

let s = JSON.stringify(a1);
let a2 = JSON.parse(s);

console.log(a2);
