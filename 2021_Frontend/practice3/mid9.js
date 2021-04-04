let a = [];

for (let i = 0; i < 100; ++i)
    a[i] = Math.floor(Math.random() * 100 + 1);

let count = a.reduce((count, v) => v%2 === 0? count+1 : count, 0);
console.log(count)
