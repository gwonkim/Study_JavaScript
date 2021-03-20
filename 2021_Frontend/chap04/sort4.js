let a = [3, 1, 6, 2, 4, 8, 10, 5, 11, 7, 9];
let b = [3, 1, 6, 2, 4, 8, 10, 5, 11, 7, 9];
a.sort((i, j) => i-j);
b.sort((i, j) => j-i);
console.log(a);
console.log(b);
