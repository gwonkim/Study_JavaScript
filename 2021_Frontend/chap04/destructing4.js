/* 3에 간결화 구조분해 */
let a = 3, b = 4;
[a, b] = [5, 6];
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);