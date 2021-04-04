console.log('방법1');

let a = [];
let sum = 0;
for (let i=0; i<100; ++i) {
    a[i] = Math.floor(Math.random()*100 +1);
    sum += a[i];
}

let avg = sum/a.length;

console.log(sum);
console.log(avg.toFixed(1));

console.log('방법2');

let a2 = [];
for (let i=0; i<100; ++i) {
    a2[i] = Math.floor(Math.random()*100 +1);
}

let sum2 = a.reduce((a, b) => a+b);
let avg2 = sum2/a.length;

console.log(sum2);
console.log(avg2.toFixed(1));

