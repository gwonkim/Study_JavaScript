let sum = (a) => {
    return a.reduce((a, b) => a+b);
}

let test_sum = (f) => {
    let a = [];
    for (let i=0; i<5; ++i) {
        a[i] = Math.floor(Math.random()*10 +1);
    }
    console.log(a);
    return f(a);
}

for (let i=0; i<5; ++i)
    test_sum(sum);
