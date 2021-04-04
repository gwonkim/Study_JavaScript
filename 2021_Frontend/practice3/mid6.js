let a = [];

for (let i = 0; i < 100; ++i)
    a[i] = Math.floor(Math.random() * 100 + 1);

for (let i = a.length - 1; i >= 0; --i) {
    let d = a[i] % 10;
    if (d >= 5 && d <= 9)
        a.splice(i, 1);
}

console.log(a);
