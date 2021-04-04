// 방법1
function sum1(a) {
    let sum = 0;
    for (let i = 0; i < a.length; ++i) {
        sum += Number(a[i]);
    };
    return sum;
}

// 방법2
function sum2(a) {
    let sum = 0;
    a.forEach((item) => sum += Number(item));
    return sum;
}

console.log(sum1(["1", "2", "3", "4"]))
console.log(sum1(["3", "4", "5"]))
console.log(sum1(["20", "21"]))
console.log(sum2(["1", "2", "3", "4"]))
console.log(sum2(["3", "4", "5"]))
console.log(sum2(["20", "21"]))
